"use client";

import { MEDIA_SEASONS, MEDIA_STATUSES } from "@/constants/medias";
import { useFiltersController } from "@/hooks/useFiltersController";
import { XCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FilterSelect } from "./FilterSelect";

const yearsRange = (start = 1980, end = new Date().getFullYear()) =>
  Array.from({ length: end - start + 1 }, (_, i) => end - i);

export function Filters() {
  const { values, genres, setParam } = useFiltersController();
  const router = useRouter();
  const pathname = usePathname();

  const clearFilters = () => {
    router.push(pathname, { scroll: false });
  };

  const hasActiveFilters =
    values.search ||
    values.genre ||
    values.status ||
    values.season ||
    values.year;

  return (
    <section className="w-full bg-gray-900/60 border border-gray-800 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Filtros</h2>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm bg-red-500/20 hover:bg-red-600/30 text-red-400 hover:text-white px-3 py-1.5 rounded-md transition-colors"
          >
            <XCircle className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="flex flex-col relative">
          <label className="text-sm text-gray-400 mb-1">Título</label>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 pr-8"
              value={values.search || ""}
              onChange={(e) => setParam("search", e.target.value)}
            />

            {values.search && (
              <button
                type="button"
                onClick={() => setParam("search", null)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-400 transition"
                title="Borrar búsqueda"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

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
          options={yearsRange(1980).map(String)}
        />
      </div>
    </section>
  );
}
