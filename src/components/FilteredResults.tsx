"use client";

import { AnimeGrid } from "./AnimeGrid";

interface FilteredResultsProps {
  loading: boolean;
  error?: Error;
  animes?: any[];
}

export function FilteredResults(props: FilteredResultsProps) {
  const { loading, error, animes } = props;

  if (loading) {
    return <p className="text-center mt-10">Cargando resultados...</p>;
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        Error al cargar resultados.
      </p>
    );
  }

  return <AnimeGrid animes={animes} />;
}
