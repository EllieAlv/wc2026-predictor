"use client";

import { getTeamSeed } from "../../lib/get-groups-data";
import CountryLabel from "../country-label";
import { Game } from "../models/game";

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
    <div className="grid grid-cols-[repeat(2,1fr)_2fr_repeat(2,1fr)_2fr_1fr]">
      <label>{game.match_id}</label>
      <label>{game.date}</label>
      <CountryLabel
        countryName={game.team1}
        fileName={`${group}${getTeamSeed(game.team1)} ${game.team1}`}
        leftMargin="0rem"
      />
      <input></input>
      <input></input>
      <CountryLabel
        countryName={game.team2}
        fileName={`${group}${getTeamSeed(game.team2)} ${game.team2}`}
        leftMargin="0rem"
      />
      <label>{game.location}</label>
    </div>
  );
}
