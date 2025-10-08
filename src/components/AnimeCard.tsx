"use client";

import { useState } from "react";
import { AnimeModal } from "./AnimeModal";

interface AnimeCardProps {
  anime: {
    id: number;
    title: { english: string; native: string };
    coverImage: { large: string };
    averageScore: number | null;
  };
}

export function AnimeCard(props: AnimeCardProps) {
  const { anime } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200"
      >
        <img
          src={anime.coverImage.large}
          alt={anime.title.english || anime.title.native}
          className="rounded-md mb-2"
        />
        <h2 className="text-white font-semibold">
          {anime.title.english || anime.title.native}
        </h2>
        <p className="text-gray-400 text-sm">
          ⭐ {anime.averageScore ?? "N/A"}
        </p>
      </div>

      {open && <AnimeModal id={anime.id} onClose={() => setOpen(false)} />}
    </>
  );
}
