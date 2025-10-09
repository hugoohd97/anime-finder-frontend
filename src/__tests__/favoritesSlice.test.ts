import reducer, {
  addFavorite,
  removeFavorite,
} from "@/store/slices/favoritesSlice";

interface FavoriteItem {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number;
}

interface FavoritesStateForTest {
  items: FavoriteItem[];
}

const naruto: FavoriteItem = {
  id: 1,
  title: { english: "Naruto", native: "ナルト" },
  coverImage: { large: "https://example.com/cover.jpg" },
  averageScore: 80,
};

describe("favoritesSlice", () => {
  it("agrega un favorito", () => {
    const initial: FavoritesStateForTest = { items: [] };
    const state = reducer(initial, addFavorite(naruto));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].title.english).toBe("Naruto");
  });

  it("elimina un favorito", () => {
    const initial: FavoritesStateForTest = { items: [naruto] };
    const state = reducer(initial, removeFavorite(1));
    expect(state.items).toHaveLength(0);
  });

  it("no duplica favoritos", () => {
    const initial: FavoritesStateForTest = { items: [] };
    const s1 = reducer(initial, addFavorite(naruto));
    const s2 = reducer(s1, addFavorite(naruto));
    expect(s2.items).toHaveLength(1);
  });
});
