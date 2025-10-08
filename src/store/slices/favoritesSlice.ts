import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Anime {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
}

interface FavoritesState {
  items: Anime[];
}

const initialState: FavoritesState = {
  items:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Anime>) => {
      const exists = state.items.some((a) => a.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((a) => a.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
