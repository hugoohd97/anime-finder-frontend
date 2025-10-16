/* eslint-disable @next/next/no-img-element */
"use client";

import { STATUS_TRANSLATIONS } from "@/constants/translations";
import { useState } from "react";
import { AnimeModal } from "./AnimeModal";

interface AnimeCardProps {
  anime: {
    id: number;
    title: { english: string; native: string };
    coverImage: { large: string };
    averageScore: number | null;
    episodes: number | null;
    status: string | null;
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
          className="w-full h-82 object-contain bg-gray-900 rounded-md mb-2"
        />

        <h2 className="text-white font-semibold leading-tight">
          {anime.title.english}
        </h2>

        <p className="text-gray-400 text-sm mb-2">{anime.title.native}</p>

        <div className="flex items-center text-gray-300 text-sm mt-2 gap-3">
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{anime.averageScore ?? "N/A"}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>📺</span>
            <span>{anime.episodes ?? "N/A"}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>
              {STATUS_TRANSLATIONS[anime.status ?? ""] ||
                anime.status ||
                "Desconocido"}
            </span>
          </div>
        </div>
      </div>

      {open && <AnimeModal id={anime.id} onClose={() => setOpen(false)} />}
    </>
  );
}
