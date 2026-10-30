import { configureStore } from "@reduxjs/toolkit";
import { fetchGroupsApi } from "./features/fetchGroupsApi";
import groupReducer from "./features/groupSlice";
import resultsReducer from "./features/resultsSlice"
import standingsReducer from "./features/standingsSlice"

//Create store to hold reducers
export const makeStore = () =>
  configureStore({
    reducer: {
      group: groupReducer,
      standings: standingsReducer,
      results: resultsReducer,
      [fetchGroupsApi.reducerPath]: fetchGroupsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fetchGroupsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
