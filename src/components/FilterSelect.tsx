"use client";

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: (string | number)[];
  placeholder?: string;
}

export function FilterSelect(props: FilterSelectProps) {
  const { label, value, onChange, options, placeholder = label } = props;

  return (
    <select
      className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2"
      value={value}
      onChange={(e) => onChange(e.target.value || "")}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
