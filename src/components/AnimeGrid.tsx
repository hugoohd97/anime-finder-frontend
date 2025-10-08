"use client";

import { AnimeCard } from "./AnimeCard";

interface Anime {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
}

interface AnimeGridProps {
  animes?: Anime[];
}

export function AnimeGrid(props: AnimeGridProps) {
  const { animes = [] } = props;

  if (!animes.length) {
    return (
      <p className="text-center mt-10 text-gray-400">
        No se encontraron resultados con los filtros seleccionados.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {animes.map((anime) => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}
