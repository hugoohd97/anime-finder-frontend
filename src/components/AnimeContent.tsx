"use client";

import { useAnimeFilters } from "@/hooks/useAnimeFilters";
import { useFilteredAnimes } from "@/hooks/useFilteredAnimes";
import {
  usePopularAnimesAllTime,
  usePopularAnimesCurrentSeason,
} from "@/hooks/usePopularAnimes";
import { FilteredResults } from "./FilteredResults";
import { PopularSection } from "./PopularSection";

export function AnimeContent() {
  const { search, genre, status, season, seasonYear, hasFilters } =
    useAnimeFilters();

  const {
    loading: loadingFiltered,
    error: errorFiltered,
    data: dataFiltered,
  } = useFilteredAnimes({
    search,
    genre,
    status,
    season,
    seasonYear,
    enabled: hasFilters,
  });

  const {
    loading: loadingSeason,
    error: errorSeason,
    data: dataSeason,
  } = usePopularAnimesCurrentSeason(!hasFilters);

  const {
    loading: loadingAllTime,
    error: errorAllTime,
    data: dataAllTime,
  } = usePopularAnimesAllTime(!hasFilters);

  if (hasFilters) {
    return (
      <FilteredResults
        loading={loadingFiltered}
        error={errorFiltered}
        animes={dataFiltered?.Page?.media}
      />
    );
  }

  return (
    <div className="space-y-10">
      <PopularSection
        title="Popular esta temporada"
        loading={loadingSeason}
        error={errorSeason}
        animes={dataSeason?.Page?.media}
      />

      <PopularSection
        title="Popular todos los tiempos"
        loading={loadingAllTime}
        error={errorAllTime}
        animes={dataAllTime?.Page?.media}
      />
    </div>
  );
}
