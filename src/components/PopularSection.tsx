"use client";

import { AnimeGrid } from "./AnimeGrid";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

interface PopularSectionProps {
  title: string;
  loading: boolean;
  error?: Error;
  animes?: any[];
}

export function PopularSection(props: PopularSectionProps) {
  const { title, loading, error, animes } = props;

  return (
    <section>
      <h2 className="text-2xl font-bold text-indigo-400 border-l-4 border-indigo-500 pl-3 mb-3">
        {title}
      </h2>

      {loading && <Loader size="md" />}
      {error && <ErrorMessage message="Error al cargar esta sección." />}
      {!loading && !error && <AnimeGrid animes={animes} />}
    </section>
  );
}
