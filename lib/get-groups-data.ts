import { Group } from "../models/group";
import { GameResult } from "../models/game-result";
import { TeamStanding } from "../models/team-standing";
import { GameData } from "../models/game-data";
import { GroupData, StandingsData } from "../models/standings-data";

interface TeamStats {
  teamName: string;
  teamStats: string;
}

export function getGroupNames(groups: Group[]): string[] {
  let groupNames: string[] = [];

  groups.forEach((group: Group) => {
    groupNames.push("Group " + group.groupName);
  });

  const allNames: string[] = [...groupNames, "Knockout round"];
  return allNames;
}

function calculateGroupStats(
  teams: string[],
  groupData: GroupData,
): TeamStanding[] {
  const { groupGames, results } = groupData;

  const groupStats: TeamStanding[] = teams.map((team) => {
    const hostGames: GameData[] = groupGames.filter(
      (game: GameData) => game.teamA === team,
    );
    const awayGames: GameData[] = groupGames.filter(
      (game: GameData) => game.teamB === team,
    );
    const hostGameResults: GameResult[] = results.filter(
      (result: GameResult) =>
        result.matchID ===
        hostGames.find((game: GameData) => game.match_id === result.matchID)
          ?.match_id,
    );
    const awayGameResults: GameResult[] = results.filter(
      (result: GameResult) =>
        result.matchID ===
        awayGames.find((game: GameData) => result.matchID === game.match_id)
          ?.match_id,
    );
    //Goals scored by the current team in their host games
    const hostGoalsFor: number[] = hostGameResults.map((result: GameResult) =>
      Number(result.teamAScore),
    );
    //Goals scored by the current team in away games
    const awayGoalsFor: number[] = awayGameResults.map((result: GameResult) =>
      Number(result.teamBScore),
    );
    //Goals scored against the current team in their host games
    const hostGoalsAgainst: number[] = hostGameResults.map(
      (result: GameResult) => Number(result.teamBScore),
    );
    //Goals scored against the current team in away games
    const awayGoalsAgainst: number[] = awayGameResults.map(
      (result: GameResult) => Number(result.teamAScore),
    );
    const gamesWon: number =
      hostGoalsFor.filter(
        (goalsScored: number, index: number) =>
          goalsScored > hostGoalsAgainst[index],
      ).length +
      awayGoalsFor.filter(
        (goalsScored: number, index: number) =>
          goalsScored > awayGoalsAgainst[index],
      ).length;
    const gamesTied: number =
      hostGoalsFor.filter(
        (goalsScored: number, index: number) =>
          goalsScored === hostGoalsAgainst[index],
      ).length +
      awayGoalsFor.filter(
        (goalsScored: number, index: number) =>
          goalsScored === awayGoalsAgainst[index],
      ).length;
    const points: number = gamesWon * 3 + gamesTied;
    const goalsFor: number =
      hostGoalsFor.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0,
      ) +
      awayGoalsFor.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0,
      );
    const goalsAgainst: number =
      hostGoalsAgainst.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0,
      ) +
      awayGoalsAgainst.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0,
      );

    return { name: team, goalsFor, goalsAgainst, points };
  });

  return groupStats;
}

function tieBreakerSorting(
  teams: TeamStanding[],
  fifaRanking: string[],
): TeamStanding[] {
  const ranking: string[] = fifaRanking.toReversed();
  //Creates an array of objects where one of the strings (teamStats) is composed of:
  //the team's points + goal difference + goals scored + their index in the reversed Fifa ranking array.
  //Sorting teamStats in descending order works as the tie breaker
  const standingStats: TeamStats[] = teams.map((team) => {
    const goalDifference: number = team.goalsFor - team.goalsAgainst;
    const teamRanking: number = ranking.findIndex(
      (country) => country === team.name,
    );
    const stats: string =
      team.points.toString() +
      goalDifference.toString().padStart(3, "0") +
      team.goalsFor.toString().padStart(3, "0") +
      teamRanking.toString().padStart(2, "0");

    return { teamName: team.name, teamStats: stats };
  });

  standingStats.sort((teamA: TeamStats, teamB: TeamStats) =>
    teamB.teamStats.localeCompare(teamA.teamStats),
  );

  //To return the teamStanding object instead of the object with strings (standingStats)
  const sortedTeams: TeamStanding[] = standingStats.map(
    (teamStats: TeamStats) =>
      teams.find((team: TeamStanding) => teamStats.teamName === team.name) ||
      teams[0],
  );

  return sortedTeams;
}

//Receives an array (tiedTeams) with only the tied teams
function tieBreaker(
  tiedTeams: TeamStanding[],
  standingsData: StandingsData,
): TeamStanding[] {
  const { groupGames, results, fifaRanking } = standingsData;
  const teamNames: string[] = tiedTeams.map((team: TeamStanding) => team.name);
  const gamesOfTiedTeams: GameData[] = groupGames.filter(
    (game: GameData) =>
      game.teamA === teamNames.find((team: string) => team === game.teamA) &&
      game.teamB === teamNames.find((team: string) => team === game.teamB),
  );
  const resultsOfTiedTeams: GameResult[] = results.filter(
    (result: GameResult) =>
      result.matchID ===
      gamesOfTiedTeams.find(
        (game: GameData) => result.matchID === game.match_id,
      )?.match_id,
  );
  //Calculates the standing stats only including the games among the tied teams
  const teamStats: TeamStanding[] = calculateGroupStats(teamNames, {
    groupGames: gamesOfTiedTeams,
    results: resultsOfTiedTeams,
  });
  const sortedTeams: TeamStanding[] = tieBreakerSorting(teamStats, fifaRanking);
  //To return the actual team stats instead of the stats of the games used for the tie breaker
  const tieBreakerResult: TeamStanding[] = sortedTeams.map(
    (sortedTeam: TeamStanding) =>
      tiedTeams.find((team: TeamStanding) => team.name === sortedTeam.name) ||
      tiedTeams[0],
  );

  return tieBreakerResult;
}

function sortTeams(
  teams: TeamStanding[],
  standingsData: StandingsData,
): TeamStanding[] {
  //The team names will be added to sortedTeams according to their final group standing
  //E.G.: sortedTeams[0] is the team that qualifies in 1st place, sortedTeams[3] is the team that ends in last place
  let sortedTeams: TeamStanding[] = [];

  teams.sort(
    (teamA: TeamStanding, teamB: TeamStanding) => teamB.points - teamA.points,
  );

  //If for when teams[0] and teams[1] are not tied in points
  if (teams[0].points > teams[1].points) {
    sortedTeams.push(teams[0]);
    if (teams[1].points > teams[2].points) {
      sortedTeams.push(teams[1]);
      if (teams[2].points > teams[3].points)
        sortedTeams.push(teams[2], teams[3]);
      else {
        const next2teams: TeamStanding[] = tieBreaker(
          [teams[2], teams[3]],
          standingsData,
        );
        sortedTeams.push(next2teams[0], next2teams[1]);
      }
    } else if (teams[2].points > teams[3].points) {
      const next2teams: TeamStanding[] = tieBreaker(
        [teams[1], teams[2]],
        standingsData,
      );
      sortedTeams.push(next2teams[0], next2teams[1], teams[3]);
    } else {
      const tiedTeams: TeamStanding[] = [teams[1], teams[2], teams[3]];
      const next3teams: TeamStanding[] = tieBreaker(tiedTeams, standingsData);
      sortedTeams.push(next3teams[0], next3teams[1], next3teams[2]);
    }
    return sortedTeams;
  }

  //If for when teams[0] and teams[1] are tied in points
  if (teams[1].points > teams[2].points) {
    const next2teams: TeamStanding[] = tieBreaker(
      [teams[0], teams[1]],
      standingsData,
    );
    sortedTeams.push(next2teams[0], next2teams[1]);
    if (teams[2].points > teams[3].points) sortedTeams.push(teams[2], teams[3]);
    else {
      const next2teams: TeamStanding[] = tieBreaker(
        [teams[2], teams[3]],
        standingsData,
      );
      sortedTeams.push(next2teams[0], next2teams[1]);
    }
  } else if (teams[2].points > teams[3].points) {
    const tiedTeams: TeamStanding[] = [teams[0], teams[1], teams[2]];
    const next3teams: TeamStanding[] = tieBreaker(tiedTeams, standingsData);
    sortedTeams.push(next3teams[0], next3teams[1], next3teams[2], teams[3]);
  } else {
    const tiedTeams: TeamStanding[] = [teams[0], teams[1], teams[2], teams[3]];
    const groupStanding: TeamStanding[] = tieBreaker(tiedTeams, standingsData);
    sortedTeams.push(
      groupStanding[0],
      groupStanding[1],
      groupStanding[2],
      groupStanding[3],
    );
  }

  return sortedTeams;
}

export function getGroupRanking(
  teams: string[],
  standingsData: StandingsData,
): TeamStanding[] {
  const { groupGames, results } = standingsData;
  const groupStats: TeamStanding[] = calculateGroupStats(teams, {
    groupGames,
    results,
  });
  //console.log("groupStats: ", groupStats);
  const sortedTeams: TeamStanding[] = sortTeams(groupStats, standingsData);
  console.log("final sortedTeams: ", sortedTeams);

  return [];
}
