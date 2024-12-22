import { useState, useEffect } from 'react';
import { serviceApi } from '../lib/api/service';
import type { Service } from '../types';

export function useService(id: string | undefined) {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchService = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await serviceApi.getService(id);
        setService(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch service details');
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  return { service, loading, error };
}