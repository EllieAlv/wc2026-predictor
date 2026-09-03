/* WILL PROBABLY NOT USE AND WILL NEED TO DELETE */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameResult } from "../../components/models/game-result";

//interface 

//Define initial state
const initialState: GameResult[] = [];

//Create slice with type reducers
export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    loadGames: (state, action: PayloadAction<GameResult[]>) => {
        return action.payload;
    },
  },
});

export const { loadGames } = gamesSlice.actions;
export default gamesSlice.reducer;
