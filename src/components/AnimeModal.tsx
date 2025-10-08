"use client";

import { GET_ANIME_DETAIL } from "@/graphql/queries";
import { useQuery } from "@apollo/client/react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimeDetailContent } from "./AnimeDetailContent";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";

interface AnimeDetailData {
  Media: any;
}

interface AnimeModalProps {
  id: number;
  onClose: () => void;
}

export function AnimeModal(props: AnimeModalProps) {
  const { id, onClose } = props;
  const { loading, error, data } = useQuery<AnimeDetailData>(GET_ANIME_DETAIL, {
    variables: { id },
  });

  const anime = data?.Media;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full relative text-white overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          {loading && <Loader size="md" />}
          {error && <ErrorMessage message="Error al cargar el anime" />}

          {anime && <AnimeDetailContent anime={anime} onClose={onClose} />}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
