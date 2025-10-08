"use client";

import { AnimeGrid } from "./AnimeGrid";
import Loader from "./Loader";

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
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      {loading && <Loader size="md" />}
      {error && <p className="text-red-500">Error al cargar esta sección.</p>}
      {!loading && !error && <AnimeGrid animes={animes} />}
    </section>
  );
}
