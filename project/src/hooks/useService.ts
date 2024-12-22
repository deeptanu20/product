import { useState, useEffect } from 'react';
import { serviceApi } from '../lib/api/service';
import type { Service } from '../types';

export function useServices(filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await serviceApi.getServices(filters);
        setServices(data);
        setError(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [filters]);

  return { services, loading, error };
}