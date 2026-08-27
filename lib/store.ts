import { configureStore } from "@reduxjs/toolkit";
import { fetchGroupsApi } from "./features/fetchGroupsApi";
import groupReducer from "./features/groupSlice";
import groupsReducer from "./features/groupsSlice";
import gameReducer from "./features/gamesSlice";

//Create store to hold reducers
export const makeStore = () =>
  configureStore({
    reducer: {
      group: groupReducer,
      groups: groupsReducer,
      games: gameReducer,
      [fetchGroupsApi.reducerPath]: fetchGroupsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(fetchGroupsApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
