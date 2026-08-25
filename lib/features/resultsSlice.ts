import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Define type of state
interface GroupResults {
  gameResults: number[][]; //matrix = [[1,1],[6,0],[1,2]] Canada results in WC
  numberOfGamesPlayed: number;
}

//Define initial state
const initialState: GroupResults[] = [
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
  { gameResults: [], numberOfGamesPlayed: 0 },
];

//Create slice with type reducers
export const resultsSlice = createSlice({
  name: "groupStageResults",
  initialState,
  reducers: {
    //The number on the payload indicates the group to be modified, and the number[] is the result
    addResults: (
      state,
      { payload }: PayloadAction<{ group: number; results: number[][] }>,
    ) => {
      state[payload.group] = {
        gameResults: payload.results,
        numberOfGamesPlayed: state[payload.group].numberOfGamesPlayed++,
      };
    },
    clearResults: (
      state,
      { payload }: PayloadAction<{ group: number; results: [][] }>,
    ) => {
      state[payload.group] = { gameResults: [], numberOfGamesPlayed: 0 };
    },
  },
});
