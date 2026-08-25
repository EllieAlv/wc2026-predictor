import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./features/groupSlice";
import groupsReducer from "./features/groupsSlice";

//Create store to hold reducers
export const makeStore = () =>
  configureStore({
    reducer: { group: groupReducer, groups: groupsReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
