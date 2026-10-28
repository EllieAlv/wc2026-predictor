import { GameData } from "./game-data";
import { GameResult } from "./game-result";

//Grouped the arrays to simplify the function arguments in get-groups-data.ts
export interface GroupData {
  groupGames: GameData[];
  results: GameResult[];
}

export interface StandingsData {
  groupGames: GameData[];
  results: GameResult[];
  fifaRanking: string[];
}
