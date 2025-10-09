"use client";

import { RootState } from "@/store";
import { addFavorite, removeFavorite } from "@/store/slices/favoritesSlice";
import { useDispatch, useSelector } from "react-redux";

interface AnimeDetailProps {
  anime: {
    id: number;
    title: { english: string; native: string };
    description: string;
    bannerImage?: string;
    coverImage?: { large: string };
    averageScore?: number;
    episodes?: number;
    status?: string;
    startDate?: { year?: number; month?: number; day?: number };
    endDate?: { year?: number; month?: number; day?: number };
    trailer?: { id?: string; site?: string };
  };
  onClose: () => void;
}

export function AnimeDetailContent(props: AnimeDetailProps) {
  const { anime, onClose } = props;
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === anime.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(anime.id));
    } else {
      dispatch(
        addFavorite({
          id: anime.id,
          title: anime.title,
          coverImage: anime.coverImage ?? { large: "" },
          averageScore: anime.averageScore ?? null,
        })
      );
    }
  };

  return (
    <>
      {anime.bannerImage && (
        <img
          src={anime.bannerImage}
          alt="banner"
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}

      <h2 className="text-2xl font-bold mb-1">
        {anime.title.english || "Sin título en inglés"}
      </h2>
      <h3 className="text-md text-gray-400 mb-4">{anime.title.native}</h3>

      <h3 className="text-lg font-semibold mb-2">📝 Descripción</h3>
      <p className="text-sm text-gray-300 mb-3 whitespace-pre-line">
        {anime.description?.replace(/<\/?[^>]+(>|$)/g, "")}
      </p>

      <h3 className="text-lg font-semibold mb-2">📊 Información general</h3>
      <div className="grid grid-cols-2 gap-3 text-sm text-gray-400 mb-3">
        <p>⭐ Puntuación promedio: {anime.averageScore ?? "N/A"}</p>
        <p>📺 Episodios: {anime.episodes ?? "?"}</p>
        <p>📅 Estado: {anime.status}</p>
        <p>
          🕒 Inicio:{" "}
          {anime.startDate?.year
            ? `${anime.startDate.year}-${anime.startDate.month ?? "?"}-${
                anime.startDate.day ?? "?"
              }`
            : "?"}
        </p>
        <p>
          📆 Finalización:{" "}
          {anime.endDate?.year
            ? `${anime.endDate.year}-${anime.endDate.month ?? "?"}-${
                anime.endDate.day ?? "?"
              }`
            : "En emisión"}
        </p>
      </div>

      {anime.trailer?.id && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">🎬 Trailer</h3>
          {anime.trailer.site === "youtube" ? (
            <iframe
              src={`https://www.youtube.com/embed/${anime.trailer.id}`}
              title="Trailer"
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            />
          ) : (
            "Sin trailer"
          )}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={handleToggleFavorite}
          className={`px-4 py-2 rounded-md font-semibold transition-colors ${
            isFavorite
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          {isFavorite ? "❤️ En favoritos" : "🤍 Añadir a favoritos"}
        </button>

        <button
          onClick={onClose}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Cerrar
        </button>
      </div>
    </>
  );
}
