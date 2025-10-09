/* eslint-disable @next/next/no-img-element */
"use client";

import { RootState } from "@/store";
import { removeFavorite } from "@/store/slices/favoritesSlice";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConfirmDialog } from "./ConfirmationDialog";
import { InfoMessage } from "./InfoMessage";

interface FavoritesModalProps {
  onClose: () => void;
}

export function FavoritesModal(props: FavoritesModalProps) {
  const { onClose } = props;
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [animeToDelete, setAnimeToDelete] = useState<number | null>(null);

  const handleConfirmDelete = () => {
    if (animeToDelete !== null) {
      dispatch(removeFavorite(animeToDelete));
      setConfirmOpen(false);
      setAnimeToDelete(null);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full relative text-white overflow-y-auto max-h-[90vh]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">❤️ Mis Favoritos</h2>

        {favorites.length === 0 ? (
          <InfoMessage message="Aún no tienes animes en favoritos." />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map((anime) => (
              <div
                key={anime.id}
                className="bg-gray-800 rounded-lg p-4 shadow relative hover:scale-105 transition-transform duration-200"
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

                <button
                  onClick={() => {
                    setAnimeToDelete(anime.id);
                    setConfirmOpen(true);
                  }}
                  className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition-colors"
                  title="Quitar de favoritos"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Cerrar
          </button>
        </div>

        <ConfirmDialog
          open={confirmOpen}
          title="Eliminar favorito"
          message="¿Estás seguro de que deseas eliminar este anime de tus favoritos?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setConfirmOpen(false)}
        />
      </motion.div>
    </motion.div>
  );
}
