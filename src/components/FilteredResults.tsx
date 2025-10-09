"use client";

import type { Anime } from "@/hooks/useFilteredAnimes";
import { AnimeGrid } from "./AnimeGrid";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

interface FilteredResultsProps {
  loading: boolean;
  error?: Error;
  animes?: Anime[];
  hasNextPage?: boolean;
  loadMore?: () => void;
}

export function FilteredResults(props: FilteredResultsProps) {
  const { loading, error, animes, hasNextPage, loadMore } = props;

  if (loading && (!animes || animes.length === 0)) {
    return (
      <div className="flex justify-center py-10">
        <Loader size="md" />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Error al cargar resultados." />;
  }

  return (
    <div>
      <AnimeGrid animes={animes} />

      {hasNextPage && !loading && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="relative overflow-hidden group px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-purple-500"
          >
            <span className="relative z-10">Cargar más</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      )}

      {loading && animes && animes.length > 0 && (
        <div className="flex justify-center mt-6">
          <Loader size="sm" />
        </div>
      )}
    </div>
  );
}
