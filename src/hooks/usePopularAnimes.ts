"use client";

import { GET_ANIMES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";
import type { Anime } from "./useFilteredAnimes";

interface GetAnimesData {
  Page: { media: Anime[] };
}

export function usePopularAnimesCurrentSeason(enabled = true) {
  return useQuery<GetAnimesData>(GET_ANIMES, {
    variables: {
      page: 1,
      perPage: 6,
      season: "WINTER",
      seasonYear: 2025,
      sort: ["POPULARITY_DESC"],
    },
    skip: !enabled,
  });
}

export function usePopularAnimesAllTime(enabled = true) {
  return useQuery<GetAnimesData>(GET_ANIMES, {
    variables: {
      page: 1,
      perPage: 6,
      sort: ["POPULARITY_DESC"],
    },
    skip: !enabled,
  });
}
