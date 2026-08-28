import { getTeamSeed } from "../../lib/get-groups-data";
import CountryLabel from "../country-label";
import { Game } from "../models/game";
import StatLable from "../stat-label";
import GroupGameScore from "./group-game-score";

interface gameRowProp {
  game: Game;
  index: number;
}

export default function GroupGameRow({
  game,
  index,
}: gameRowProp): React.JSX.Element {
  const group: string = game.phase.charAt(game.phase.length - 1);

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
      <GroupGameScore />
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
