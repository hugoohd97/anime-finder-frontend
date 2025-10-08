import reducer, {
    addFavorite,
    removeFavorite,
} from "@/store/slices/favoritesSlice";

const naruto = {
  id: 1,
  title: { english: "Naruto", native: "ナルト" },
  coverImage: { large: "https://example.com/cover.jpg" },
  averageScore: 80,
};

type FavoritesStateForTest = { items: Array<typeof naruto> };

describe("favoritesSlice", () => {
  it("agrega un favorito", () => {
    const initial: FavoritesStateForTest = { items: [] };
    const state = reducer(initial as any, addFavorite(naruto as any));
    expect(state.items).toHaveLength(1);
  });

  it("elimina un favorito", () => {
    const initial: FavoritesStateForTest = { items: [naruto] };
    const state = reducer(initial as any, removeFavorite(1));
    expect(state.items).toHaveLength(0);
  });

  it("no duplica favoritos", () => {
    const initial: FavoritesStateForTest = { items: [] };
    const s1 = reducer(initial as any, addFavorite(naruto as any));
    const s2 = reducer(s1 as any, addFavorite(naruto as any));
    expect(s2.items).toHaveLength(1);
  });
});
