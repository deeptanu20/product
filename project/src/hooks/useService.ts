import { useState, useEffect } from 'react';
import { fetchService } from '../lib/api';
import { type Service } from '../types';

export function useService(id: string | undefined) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadService = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await fetchService(id);
        setService(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch service details');
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  return { service, loading, error };
}