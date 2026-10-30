import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GroupStandings } from "../../models/group-standings";

//Define initial state
const initialState: GroupStandings[] = [];

//Create slice with type reducers
export const standingsSlice = createSlice({
  name: "standings",
  initialState,
  reducers: {
    addTeams: (state, action: PayloadAction<GroupStandings[]>) => {
      action.payload.map((team: GroupStandings) => {
        const index: number = state.findIndex(
          (standing: GroupStandings) => team.group === standing.group,
        );

        index !== -1 && state.splice(index, 1);
        state.push(team);
      });
    },
  },
});

export const { addTeams } = standingsSlice.actions;
export default standingsSlice.reducer;
