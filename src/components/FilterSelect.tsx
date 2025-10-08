"use client";

import { XCircle } from "lucide-react";

interface FilterSelectProps {
  label: string;
  value?: string;
  onChange: (val: string | null) => void;
  options: string[];
}

export function FilterSelect(props: FilterSelectProps) {
  const { label, value, onChange, options } = props;
  const handleClear = () => onChange(null);

  return (
    <div className="flex flex-col relative">
      <label className="text-sm text-gray-400 mb-1">{label}</label>

      <div className="relative">
        <select
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-gray-200 outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
          value={value || ""}
          onChange={(e) => onChange(e.target.value || null)}
        >
          <option value="" disabled hidden />
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-400 transition"
            title="Limpiar filtro"
          >
            <XCircle className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
