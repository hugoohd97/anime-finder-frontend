"use client";

import { RootState } from "@/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FavoritesModal } from "./FavoritesModal";

export function FavoritesButton() {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const favorites = useSelector((state: RootState) => state.favorites.items);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-full shadow-lg transition-colors z-50"
      >
        ❤️ {isClient ? favorites.length : 0}
      </motion.button>

      <AnimatePresence>
        {open && <FavoritesModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
