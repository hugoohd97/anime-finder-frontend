"use client";

import { AnimeContent } from "@/components/AnimeContent";
import { FavoritesButton } from "@/components/FavoritesButton";
import { Filters } from "@/components/Filters";

export default function HomePage() {
  return (
    <main className="p-6 space-y-8">
      <Filters />
      <AnimeContent />
      <FavoritesButton />
    </main>
  );
}
