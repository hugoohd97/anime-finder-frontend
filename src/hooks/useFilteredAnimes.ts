"use client";

import { GET_ANIMES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";
import { useEffect, useRef, useState } from "react";

export interface Anime {
  id: number;
  title: { english: string; native: string };
  coverImage: { large: string };
  averageScore: number | null;
  episodes: number | null;
  status: string | null;
}

interface PageInfo {
  currentPage: number;
  hasNextPage: boolean;
}

interface GetAnimesData {
  Page: {
    media: Anime[];
    pageInfo: PageInfo;
  };
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
  const [page, setPage] = useState(1);
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const scrollRestored = useRef(false);

  const { data, loading, error, fetchMore, refetch } = useQuery<GetAnimesData>(
    GET_ANIMES,
    {
      variables: {
        page: 1,
        perPage: 18,
        search,
        genreIn: genre ? [genre] : undefined,
        status,
        season,
        seasonYear,
        sort: ["POPULARITY_DESC"],
      },
      skip: !enabled,
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (!enabled) return;
    setPage(1);
    setAnimes([]);
    scrollRestored.current = true;

    refetch({
      page: 1,
      perPage: 18,
      search,
      genreIn: genre ? [genre] : undefined,
      status,
      season,
      seasonYear,
      sort: ["POPULARITY_DESC"],
    }).then((res) => {
      const newMedia = res.data?.Page?.media ?? [];
      setAnimes(newMedia);
      setHasNextPage(res.data?.Page?.pageInfo?.hasNextPage ?? false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, [search, genre, status, season, seasonYear, enabled, refetch]);

  const loadMore = async (): Promise<void> => {
    if (!hasNextPage) return;

    const nextPage = page + 1;
    const more = await fetchMore({ variables: { page: nextPage } });

    const newMedia = more.data?.Page?.media ?? [];
    if (!newMedia.length) return;

    setAnimes((prev) => [
      ...prev,
      ...newMedia.filter((item) => !prev.some((a) => a.id === item.id)),
    ]);
    setPage(nextPage);
    setHasNextPage(more.data?.Page?.pageInfo?.hasNextPage ?? false);
  };

  return {
    animes,
    loading,
    error,
    hasNextPage,
    loadMore,
  };
}
