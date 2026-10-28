import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TeamStanding } from "../../models/team-standing";

//Define initial state
const initialState: TeamStanding[] = [];

//Create slice with type reducers
export const standingsSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {
    loadGames: (state, action: PayloadAction<TeamStanding[]>) => {
        return action.payload;
    },
  },
});

export const { loadGames } = standingsSlice.actions;
export default standingsSlice.reducer;
