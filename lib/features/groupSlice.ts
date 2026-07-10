import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//Define type for state
interface GroupState {
  selectedGroup: string;
}

//Define initial state
const initialState: GroupState = {
  selectedGroup: "Group B",
};

//Create slice with typed reducers
export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    selectGroup: (state, action: PayloadAction<string>) => {
      state.selectedGroup = action.payload;
    },
  },
});

export const { selectGroup } = groupSlice.actions;
export default groupSlice.reducer;
