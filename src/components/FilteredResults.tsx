"use client";

import { AnimeGrid } from "./AnimeGrid";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

interface FilteredResultsProps {
  loading: boolean;
  error?: Error;
  animes?: any[];
}

export function FilteredResults(props: FilteredResultsProps) {
  const { loading, error, animes } = props;

  if (loading) {
    return <Loader size="md" />;
  }

  if (error) {
    return <ErrorMessage message="Error al cargar resultados." />;
  }

  return <AnimeGrid animes={animes} />;
}
