"use client";

import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import { RootState } from "../../lib/store";
import { useAppSelector } from "../../lib/hooks";
import { Game } from "../models/game";
import GroupGameRow from "./group-game-row";

export default function GroupGamesContainer(): React.JSX.Element {
  const { data: gamesList, isSuccess: haveGamesList } = useGetGroupsDataQuery(
    "list of matches.json",
  );
  const selectedGroup: string = useAppSelector(
    (state: RootState) => state.group.groupName,
  );
  let groupGames: Game[] = [];

  haveGamesList
    ? (groupGames = gamesList.filter(
        (game: Game) => game.phase === "group " + selectedGroup,
      ))
    : null;

  //#EDEADE is the hex color for alabaster
  return (
    <div className="bg-[#EDEADE] lg:mx-10 xl:mx-20 rounded-lg">
      {groupGames.length !== 0 &&
        groupGames.map((game: Game, index: number) => (
          <GroupGameRow key={index} game={game} index={index} />
        ))}
    </div>
  );
}
