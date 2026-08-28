import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroupResults } from "../../components/models/group-results";

//Define initial state
const initialState: GroupResults[] = [];

//Create slice with type reducers
export const resultsSlice = createSlice({
  name: "groupStageResults",
  initialState,
  reducers: {
    addResults: (
      state,
      { payload }: PayloadAction<{ results: GroupResults }>,
    ) => {
      const index: number = state.findIndex(
        (group) => group.groupName === payload.results.groupName,
      );

      //Remove results of the current group if they exist
      index !== -1 && state.splice(1, index);
      //Insert new results
      state.push(payload.results);
    },

    /*clearResults: (
      state,
      { payload }: PayloadAction<{ group: number; results: [][] }>,
    ) => {
      state[payload.group] = { gameResults: [], numberOfGamesPlayed: 0 };
    },*/
  },
});

export const { addResults } = resultsSlice.actions;
export default resultsSlice.reducer;
