"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export interface AnimeFilters {
  search?: string;
  genre?: string;
  status?: string;
  season?: string;
  seasonYear?: number;
  hasFilters: boolean;
}

export function useAnimeFilters(): AnimeFilters {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || undefined;
  const genre = searchParams.get("genre") || undefined;
  const status = searchParams.get("status") || undefined;
  const season = searchParams.get("season") || undefined;
  const yearParam = searchParams.get("year");
  const seasonYear = yearParam ? parseInt(yearParam, 10) : undefined;

  const hasFilters = useMemo(
    () => !!(search || genre || status || season || seasonYear),
    [search, genre, status, season, seasonYear]
  );

  return { search, genre, status, season, seasonYear, hasFilters };
}
