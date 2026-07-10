import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "./features/groupSlice";

//Create store to hold reducers
export const makeStore = () =>
  configureStore({
    reducer: { group: groupReducer },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
