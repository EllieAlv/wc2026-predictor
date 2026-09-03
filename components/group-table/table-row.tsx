"use client";

import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import { useAppSelector } from "../../lib/hooks";
import { RootState } from "../../lib/store";
import CountryLabel from "../country-label";
import { GameData } from "../models/game-data";
import { GameResult } from "../models/game-result";
import StatLabel from "../stat-label";

interface TableRowProps {
  group: string;
  index: number;
  country: string;
}

export default function TableRow({
  group,
  index,
  country,
}: TableRowProps): React.JSX.Element {
  const { data: gamesData, isSuccess: haveGamesData } = useGetGroupsDataQuery(
    "list of matches.json",
  );
  const homeGames: GameData[] = haveGamesData
    ? gamesData.filter((game: GameData) => game.team1 === country)
    : [];
  const awayGames: GameData[] = haveGamesData
    ? gamesData.filter((game: GameData) => game.team2 === country)
    : [];
  const games: GameData[] = [...homeGames, ...awayGames];
  const groupGames: GameResult[] = useAppSelector(
    (state: RootState) => state.results,
  );
  const groupGamesPlayed: GameResult[] = groupGames.filter(
    (game: GameResult) => game.wasPlayed,
  );

  //These 3 arrays have the data needed for calculating the stats in the table for the group standings
  const teamGamesPlayed: GameResult[] = groupGamesPlayed.filter(
    (gamePlayed: GameResult) =>
      gamePlayed.matchID ===
      games.find((game: GameData) => game.match_id === gamePlayed.matchID)
        ?.match_id,
  );
  const homeGamesPlayed: GameResult[] = teamGamesPlayed.filter(
    (gameResult: GameResult) =>
      gameResult.matchID ===
      homeGames.find(
        (homeGame: GameData) => homeGame.match_id === gameResult.matchID,
      )?.match_id,
  );
  const awayGamesPlayed: GameResult[] = teamGamesPlayed.filter(
    (gameResult: GameResult) =>
      gameResult.matchID ===
      awayGames.find(
        (awayGame: GameData) => awayGame.match_id === gameResult.matchID,
      )?.match_id,
  );

  function getGamesWon(): number {
    const homeGamesWon: number = homeGamesPlayed.filter(
      (game: GameResult) => Number(game.teamAScore) > Number(game.teamBScore),
    ).length;
    const awayGamesWon: number = awayGamesPlayed.filter(
      (game: GameResult) => Number(game.teamAScore) < Number(game.teamBScore),
    ).length;
    return homeGamesWon + awayGamesWon;
  }

  function getGamesTied(): number {
    const homeGamesTied: number = homeGamesPlayed.filter(
      (game: GameResult) => Number(game.teamAScore) === Number(game.teamBScore),
    ).length;
    const awayGamesTied: number = awayGamesPlayed.filter(
      (game: GameResult) => Number(game.teamAScore) === Number(game.teamBScore),
    ).length;
    return homeGamesTied + awayGamesTied;
  }

  function getGamesLost(): number {
    return teamGamesPlayed.length - getGamesWon() - getGamesTied();
  }

  function getGoalsFor(): number {
    const homeGoalsFor: number = homeGamesPlayed.reduce(
      (accumulator: number, goalsScored: GameResult) =>
        accumulator + Number(goalsScored.teamAScore),
      0,
    );
    const awayGoalsFor: number = awayGamesPlayed.reduce(
      (accumulator: number, goalsScored: GameResult) =>
        accumulator + Number(goalsScored.teamBScore),
      0,
    );
    return homeGoalsFor + awayGoalsFor;
  }

  function getGoalsAgainst(): number {
    const homeGoalsAgainst: number = homeGamesPlayed.reduce(
      (accumulator: number, goalsScored: GameResult) =>
        accumulator + Number(goalsScored.teamBScore),
      0,
    );
    const awayGoalsAgainst: number = awayGamesPlayed.reduce(
      (accumulator: number, goalsScored: GameResult) =>
        accumulator + Number(goalsScored.teamAScore),
      0,
    );
    return homeGoalsAgainst + awayGoalsAgainst;
  }

  function getGoalDifference(): number {
    return getGoalsFor() - getGoalsAgainst();
  }

  function getPoints(): number {
    return getGamesWon() * 3 + getGamesTied();
  }

  //#EDEADE is the hex color for alabaster
  return (
    <div className="grid grid-cols-[1fr_2fr_repeat(8,1fr)] grid-flow-col bg-[#EDEADE] py-2 rounded-md">
      <label className="text-center">{index + 1}</label>
      <CountryLabel
        countryName={country}
        fileName={`${group}${index + 1} ${country}`}
        flagPosition="left"
        justifyOption="justify-center"
      />
      <StatLabel>{teamGamesPlayed.length}</StatLabel>
      <StatLabel>{getGamesWon()}</StatLabel>
      <StatLabel>{getGamesTied()}</StatLabel>
      <StatLabel>{getGamesLost()}</StatLabel>
      <StatLabel>{getGoalsFor()}</StatLabel>
      <StatLabel>{getGoalsAgainst()}</StatLabel>
      <StatLabel>{getGoalDifference()}</StatLabel>
      <StatLabel>{getPoints()}</StatLabel>
    </div>
  );
}
