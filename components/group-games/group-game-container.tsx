"use client";

import { useGetGroupsDataQuery } from "../../lib/features/fetchGroupsApi";
import { RootState } from "../../lib/store";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Game } from "../models/game";

export default function GroupGamesContainer(): React.JSX.Element {
    const { data: gamesList, isSuccess: haveGamesList } = useGetGroupsDataQuery(
      "list of matches.json",
    );
  const listOfGames: Game[] = useAppSelector((state: RootState) => state.games);

  //haveGamesList && dispatch(loadGames(gamesList));
  
  return <div></div>;
}
