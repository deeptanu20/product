import { useState, useMemo } from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { FilterSidebar } from '../components/FilterSidebar';
import { SortDropdown, type SortOption } from '../components/SortDropdown';
import { SERVICES } from '../data/services';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>('rating-desc');

  const categories = useMemo(() => 
    Array.from(new Set(SERVICES.map(service => service.category))),
    []
  );

  const filteredAndSortedServices = useMemo(() => {
    let filtered = SERVICES.filter(service => 
      (!selectedCategory || service.category === selectedCategory) &&
      service.price >= priceRange[0] &&
      service.price <= priceRange[1] &&
      service.rating >= minRating
    );

    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [selectedCategory, priceRange, minRating, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <FilterSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minRating={minRating}
          onMinRatingChange={setMinRating}
        />
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Available Services</h1>
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAndSortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredAndSortedServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}