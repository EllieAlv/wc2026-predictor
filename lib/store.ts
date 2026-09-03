import { configureStore } from "@reduxjs/toolkit";
import { fetchGroupsApi } from "./features/fetchGroupsApi";
import groupReducer from "./features/groupSlice";
import gameReducer from "./features/gamesSlice";
import resultsReducer from "./features/resultsSlice"

//Create store to hold reducers
export const makeStore = () =>
  configureStore({
    reducer: {
      group: groupReducer,
      //games: gameReducer,
      results: resultsReducer,
      [fetchGroupsApi.reducerPath]: fetchGroupsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fetchGroupsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
