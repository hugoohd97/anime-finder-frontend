import { AnimeDetailContent } from "@/components/AnimeDetailContent";
import type { Anime } from "@/hooks/useFilteredAnimes";
import favoritesReducer from "@/store/slices/favoritesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

interface TestState {
  favorites: ReturnType<typeof favoritesReducer>;
}

const mockAnime: Anime & {
  averageScore?: number | null;
  description: string;
  bannerImage?: string;
  status?: string;
  startDate?: { year: number; month: number; day: number };
  endDate?: { year: number; month: number; day: number };
  trailer?: { id: string; site: string };
} = {
  id: 1,
  title: { english: "Naruto", native: "ナルト" },
  description: "Un ninja adolescente que busca reconocimiento.",
  bannerImage: "https://example.com/banner.jpg",
  coverImage: { large: "https://example.com/cover.jpg" },
  averageScore: 85,
  episodes: 220,
  status: "FINISHED",
  startDate: { year: 2002, month: 10, day: 3 },
  endDate: { year: 2007, month: 2, day: 8 },
  trailer: { id: "abc123", site: "youtube" },
};

function renderWithStore(
  ui: React.ReactNode,
  preloadedState?: Partial<TestState>
) {
  const store = configureStore<TestState>({
    reducer: { favorites: favoritesReducer },
    preloadedState: preloadedState as TestState,
  });
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("AnimeDetailContent", () => {
  it("renderiza título y descripción", () => {
    renderWithStore(
      <AnimeDetailContent anime={mockAnime} onClose={() => {}} />
    );

    expect(screen.getByText("Naruto")).toBeInTheDocument();
    expect(
      screen.getByText(/Un ninja adolescente que busca reconocimiento/i)
    ).toBeInTheDocument();
  });

  it("toggle de favoritos cambia el texto del botón", () => {
    renderWithStore(
      <AnimeDetailContent anime={mockAnime} onClose={() => {}} />
    );

    const btnAdd = screen.getByRole("button", {
      name: "🤍 Añadir a favoritos",
    });
    fireEvent.click(btnAdd);
    expect(
      screen.getByRole("button", { name: "❤️ En favoritos" })
    ).toBeInTheDocument();

    const btnRemove = screen.getByRole("button", { name: "❤️ En favoritos" });
    fireEvent.click(btnRemove);
    expect(
      screen.getByRole("button", { name: "🤍 Añadir a favoritos" })
    ).toBeInTheDocument();
  });
});
