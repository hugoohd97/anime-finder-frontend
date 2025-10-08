import { FavoritesButton } from "@/components/FavoritesButton";
import favoritesReducer from "@/store/slices/favoritesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

type FavoriteItem = {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
};

interface TestState {
  favorites: { items: FavoriteItem[] };
}

const fav = {
  id: 99,
  title: { english: "One Piece", native: "ワンピース" },
  coverImage: { large: "" },
  averageScore: 90,
};

function renderWithStore(preloadedItems: FavoriteItem[] = []) {
  const store = configureStore({
    reducer: { favorites: favoritesReducer },
    preloadedState: { favorites: { items: preloadedItems } },
  });
  return render(
    <Provider store={store}>
      <FavoritesButton />
    </Provider>
  );
}

describe("FavoritesButton", () => {
  it("muestra el contador correcto después de hidratar en cliente", async () => {
    renderWithStore([fav]);

    expect(await screen.findByText(/❤️ 1/)).toBeInTheDocument();
  });
});
