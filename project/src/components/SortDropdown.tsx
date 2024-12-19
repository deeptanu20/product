
import { ArrowUpDown } from 'lucide-react';

export type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="w-5 h-5 text-gray-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating-desc">Highest Rated</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </div>
  );
}