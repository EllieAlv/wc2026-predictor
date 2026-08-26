import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Group } from "../../components/models/group";

//The type for the state is defined in "../../components/models/group"

//Define initial state
const initialState: Group = {
  groupName: "B",
  color: "#FFFFFF",
  background: "#C5281C",
  countries: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
};

//Create slice with typed reducers
export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    selectGroup: (state, action: PayloadAction<Group>) => {
      return action.payload;
    },
  },
});

export const { selectGroup } = groupSlice.actions;
export default groupSlice.reducer;
