"use client";

import { RootState } from "../../lib/store";
import { useAppSelector, useAppDispatch } from "../../lib/hooks";
import { Game } from "../models/game";

export default function GroupGamesContainer(): React.JSX.Element {
  const listOfGames: Game[] = useAppSelector((state: RootState) => state.games);
  
  return <div></div>;
}
