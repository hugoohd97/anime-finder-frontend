"use client";

import { AnimeCard } from "./AnimeCard";
import { InfoMessage } from "./InfoMessage";

interface Anime {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
  episodes: number | null;
}

interface AnimeGridProps {
  animes?: Anime[];
}

export function AnimeGrid(props: AnimeGridProps) {
  const { animes = [] } = props;

  if (!animes.length) {
    return (
      <InfoMessage message="No se encontraron resultados con los filtros seleccionados." />
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
