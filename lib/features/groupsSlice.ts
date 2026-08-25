import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../../components/models/group";

//Define initial state
const initialState: Group[] = [];

//Create slice with type reducers
export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    loadGroups: (state, action: PayloadAction<Group[]>) => {
      state = action.payload;
    },
  },
});

export const { loadGroups } = groupsSlice.actions;
export default groupsSlice.reducer;
