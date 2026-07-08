import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

interface GroupState {
  group: string;
}

const initialState: GroupState = {
  group: "Group B",
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    pick: (state, action: PayloadAction<string>) => {
      state.group = action.payload;
    },
  },
});

export const { pick } = groupSlice.actions;
export default groupSlice.reducer;
