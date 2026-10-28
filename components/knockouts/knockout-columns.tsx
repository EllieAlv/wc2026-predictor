import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import KnockoutGame from "./knockout-game";
import { KnockoutMatch } from "../../models/knockout-match";

const round: string[] = [
  "Round of 32",
  "Round of 16",
  "Quarter finals",
  "Semi finals",
];

export default function KnockoutColumns(): React.JSX.Element {
  const rightSideBracket: string[] = round.toReversed();
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
  const r32RightBracket: KnockoutMatch[] = isSuccess
    ? gamesList.filter(
        (game: KnockoutMatch) =>
          game.phase === "Ro 32" && Number(game.game_id) > 8,
      )
    : [];

  return (
    <>
      <div className="grid grid-cols-9 grid-rows-8">
        <div className="flex flex-col justify-start">
          {r32LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame key={game.match_id} />
          ))}
        </div>
        <div className="flex flex-col justify-evenly">
          {r16LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame key={game.match_id} />
          ))}
        </div>
        <div className="flex flex-col justify-evenly">
          {r8LeftBracket.map((game: KnockoutMatch) => (
            <KnockoutGame key={game.match_id} />
          ))}
        </div>
        <label>Final</label>
        {rightSideBracket.map((roundName: string) => (
          <label key={roundName}>{roundName}</label>
        ))}
      </div>
    </>
  );
}
