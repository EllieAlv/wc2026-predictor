import { getTeamSeed } from "../../lib/get-groups-data";
import CountryLabel from "../country-label";
import StatLable from "../stat-label";
import GroupGameScore from "./group-game-score";
import { GameData } from "../models/game-data";
import { TeamData } from "../models/team-data";

interface GameRowProp {
  game: GameData;
}

export default function GroupGameRow({ game }: GameRowProp): React.JSX.Element {
  const group: string = game.phase.charAt(game.phase.length - 1);
  const teamA: TeamData = { matchID: game.match_id, team: "A" };
  const teamB: TeamData = { matchID: game.match_id, team: "B" };

  return (
    <div className="grid grid-cols-[repeat(2,1fr)_1.6fr_1fr_1.6fr_2fr] my-3">
      <StatLable>{game.match_id}</StatLable>
      <StatLable>{game.date}</StatLable>
      <CountryLabel
        countryName={game.team1}
        fileName={`${group}${getTeamSeed(game.team1)} ${game.team1}`}
        flagPosition="right"
        justifyOption="justify-end"
      />
      <GroupGameScore teamA={teamA} teamB={teamB} />
      <CountryLabel
        countryName={game.team2}
        fileName={`${group}${getTeamSeed(game.team2)} ${game.team2}`}
        flagPosition="left"
        justifyOption="justify-start"
      />
      <StatLable>{game.location}</StatLable>
    </div>
  );
}
