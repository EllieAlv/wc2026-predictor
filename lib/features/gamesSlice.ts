import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../components/models/game";

//Define initial state
const initialState: Game[] = [];

//Create slice with type reducers
export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    loadGames: (state, action: PayloadAction<Game[]>) => {
        return action.payload;
    },
  },
});

export const { loadGames } = gamesSlice.actions;
export default gamesSlice.reducer;
