import CountryLabel from "../country-label";
import StatLabel from "../stat-label";
import GroupGameScore from "./group-game-score";
import { GameData } from "../../models/game-data";
import { TeamData } from "../../models/team-data";

interface GameRowProp {
  game: GameData;
}

export default function GroupGameRow({ game }: GameRowProp): React.JSX.Element {
  const teamA: TeamData = { matchID: game.match_id, team: "A" };
  const teamB: TeamData = { matchID: game.match_id, team: "B" };

  return (
    <div className="grid grid-cols-[repeat(2,1fr)_1.6fr_1fr_1.6fr_2fr] my-3">
      <StatLabel>{game.match_id}</StatLabel>
      <StatLabel>{game.date}</StatLabel>
      <div className="mx-4">
        <CountryLabel
          countryName={game.teamA}
          flagPosition="right"
          justifyOption="justify-end"
        />
      </div>
      <GroupGameScore teamA={teamA} teamB={teamB} />
      <div className="mx-4">
        <CountryLabel
          countryName={game.teamB}
          flagPosition="left"
          justifyOption="justify-start"
        />
      </div>
      <StatLabel>{game.location}</StatLabel>
    </div>
  );
}
