"use client";

import { MEDIA_SEASONS, MEDIA_STATUSES } from "@/constants/medias";
import { useFiltersController } from "@/hooks/useFiltersController";
import { FilterSelect } from "./FilterSelect";

const yearsRange = (start = 1980, end = new Date().getFullYear()) =>
  Array.from({ length: end - start + 1 }, (_, i) => end - i);

export function Filters() {
  const { values, genres, setParam } = useFiltersController();

  return (
    <section className="w-full bg-gray-900/60 border border-gray-800 rounded-xl p-4 mb-6">
      <h2 className="text-lg font-semibold mb-3">Filtros</h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <input
          type="text"
          placeholder="Buscar por título..."
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          defaultValue={values.search}
          onChange={(e) => setParam("search", e.target.value)}
        />

        <FilterSelect
          label="Género"
          value={values.genre}
          onChange={(val) => setParam("genre", val)}
          options={genres}
        />
        <FilterSelect
          label="Estado"
          value={values.status}
          onChange={(val) => setParam("status", val)}
          options={MEDIA_STATUSES}
        />
        <FilterSelect
          label="Temporada"
          value={values.season}
          onChange={(val) => setParam("season", val)}
          options={MEDIA_SEASONS}
        />
        <FilterSelect
          label="Año"
          value={values.year}
          onChange={(val) => setParam("year", val)}
          options={yearsRange(1980)}
        />
      </div>
    </section>
  );
}
