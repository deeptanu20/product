import { useState, useMemo, useEffect } from 'react';
import { ServiceCard } from '../../components/ServiceCard';
import { FilterSidebar } from '../../components/FilterSidebar';
import { SortDropdown, type SortOption } from '../../components/SortDropdown';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import { serviceApi } from '../../lib/api/service';
import type { Service } from '../../types/index';
import type { ServiceFilters} from '../../types/service';

export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ServiceFilters>({});
  const [sortOption, setSortOption] = useState<SortOption>('rating-desc');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await serviceApi.getServices(filters);
        setServices(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch services');
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [filters]);

  const categories = useMemo(
    () => Array.from(new Set(services.map((service) => service.category))),
    [services]
  );

  const handleFilterChange = (newFilters: Partial<ServiceFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const sortedServices = useMemo(() => {
    return [...services].sort((a, b) => {
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
  }, [services, sortOption]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <FilterSidebar
          categories={categories}
          selectedCategory={filters.category || null}
          onCategoryChange={(category) =>
            handleFilterChange({ category: category || undefined })
          }
          priceRange={[filters.minPrice || 0, filters.maxPrice || 500]}
          onPriceRangeChange={([min, max]) =>
            handleFilterChange({ minPrice: min, maxPrice: max })
          }
          minRating={filters.rating || 0}
          onMinRatingChange={(rating) => handleFilterChange({ rating })}
        />

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Available Services</h1>
            <SortDropdown value={sortOption} onChange={setSortOption} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}