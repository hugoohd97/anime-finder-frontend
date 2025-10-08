"use client";

import { GET_GENRES } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

interface GenresData {
  GenreCollection: string[];
}

export function useFiltersController() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data: genresData } = useQuery<GenresData>(GET_GENRES);
  const genres = useMemo(() => genresData?.GenreCollection ?? [], [genresData]);

  const values = {
    search: searchParams.get("search") ?? "",
    genre: searchParams.get("genre") ?? "",
    status: searchParams.get("status") ?? "",
    season: searchParams.get("season") ?? "",
    year: searchParams.get("year") ?? "",
  };

  const setParam = (key: string, value?: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value.trim() !== "") params.set(key, value);
    else params.delete(key);

    router.push(`${pathname}${params.size ? `?${params.toString()}` : ""}`, {
      scroll: false,
    });
  };

  return { values, genres, setParam };
}
