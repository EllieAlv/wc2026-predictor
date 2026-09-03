import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameResult } from "../../components/models/game-result";

//Define initial state
const initialState: GameResult[] = [];

//Create slice with type reducers
export const resultsSlice = createSlice({
  name: "groupStageResults",
  initialState,
  reducers: {
    addResult: (
      state, action: PayloadAction<GameResult>,
    ) => {
      const index: number = state.findIndex(
        (result) => result.matchID === action.payload.matchID,
      );

      //Remove results of the current game if they exist
      index !== -1 && state.splice(index, 1);
      //Insert new results
      state.push(action.payload);
    },

    /*clearResults: (
      state,
      { payload }: PayloadAction<{ group: number; results: [][] }>,
    ) => {
      state[payload.group] = { gameResults: [], numberOfGamesPlayed: 0 };
    },*/
  },
});

export const { addResult } = resultsSlice.actions;
export default resultsSlice.reducer;
