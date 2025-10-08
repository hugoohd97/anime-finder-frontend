"use client";

import { GET_ANIMES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";

export interface Anime {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
}

interface GetAnimesData {
  Page: { media: Anime[] };
}

interface UseFilteredAnimesProps {
  search?: string;
  genre?: string;
  status?: string;
  season?: string;
  seasonYear?: number;
  enabled?: boolean;
}

export function useFilteredAnimes(props: UseFilteredAnimesProps) {
  const { search, genre, status, season, seasonYear, enabled = true } = props;

  const query = useQuery<GetAnimesData>(GET_ANIMES, {
    variables: {
      page: 1,
      perPage: 18,
      search,
      genreIn: genre ? [genre] : undefined,
      status: status as any,
      season: season as any,
      seasonYear,
      sort: ["POPULARITY_DESC"],
    },
    skip: !enabled,
  });

  return query;
}
