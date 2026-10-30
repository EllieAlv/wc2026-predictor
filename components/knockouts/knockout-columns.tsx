"use client";

import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import KnockoutGame from "./knockout-game";
import { KnockoutMatch } from "../../models/knockout-match";

/*const round: string[] = [
  "Round of 32",
  "Round of 16",
  "Quarter finals",
  "Semi finals",
];*/

export default function KnockoutColumns(): React.JSX.Element {
  const {
    data: gamesList,
    isSuccess,
    isLoading,
  } = useGetGroupsDataQuery("knockout matches.json");
  const r32LeftBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 32" && Number(game.game_id) <= 8,
      )
    : [];
  const r16LeftBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 16" && Number(game.game_id) <= 4,
      )
    : [];
  const r8LeftBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 8" && Number(game.game_id) <= 2,
      )
    : [];
  const r4LeftBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 4" && Number(game.game_id) <= 1,
      )
    : [];
  const r4RightBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 4" && Number(game.game_id) > 1,
      )
    : [];
  const r8RightBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 8" && Number(game.game_id) > 2,
      )
    : [];
  const r16RightBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 16" && Number(game.game_id) > 4,
      )
    : [];
  const r32RightBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 32" && Number(game.game_id) > 8,
      )
    : [];

  return (
    <>
      <div className="grid grid-cols-9 grid-rows-8">
        <div className="flex flex-col justify-around">
          {r32LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r16LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r8LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r4LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <label>Final</label>
        <div className="flex flex-col justify-around">
          {r4RightBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r8RightBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r16RightBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
        <div className="flex flex-col justify-around">
          {r32RightBracket.map((game: KnockoutMatch) => (
            <KnockoutGame
              key={game.match_id}
              date={game.date}
              teamA={game.teamA}
              teamB={game.teamB}
              location={game.location}
            />
          ))}
        </div>
      </div>
    </>
  );
}
