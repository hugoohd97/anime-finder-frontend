"use client";

import { AnimeContent } from "@/components/AnimeContent";
import { FavoritesButton } from "@/components/FavoritesButton";
import { Filters } from "@/components/Filters";
import { Loader } from "@/components/Loader";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <main className="p-6 space-y-8">
      <Suspense fallback={<Loader size="md" />}>
        <Filters />
        <AnimeContent />
        <FavoritesButton />
      </Suspense>
    </main>
  );
}
