import React from 'react';
import { Filter, Star } from 'lucide-react';
import { cn } from '../lib/utils';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
}

export function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
}: FilterSidebarProps) {
  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <button
              onClick={() => onCategoryChange(null)}
              className={cn(
                "w-full text-left px-2 py-1 rounded",
                selectedCategory === null ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
              )}
            >
              All Services
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "w-full text-left px-2 py-1 rounded",
                  selectedCategory === category ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="space-y-2">
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-medium mb-2">Minimum Rating</h3>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => onMinRatingChange(rating)}
                className={cn(
                  "p-1 rounded",
                  rating <= minRating ? "text-yellow-400" : "text-gray-300"
                )}
              >
                <Star className="w-5 h-5 fill-current" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}