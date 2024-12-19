import { useState, useEffect } from 'react';
import { fetchBooking } from '../lib/api';
import { type Booking } from '../types';

export function useBooking(id: string | undefined) {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBooking = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await fetchBooking(id);
        setBooking(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch booking details');
        setBooking(null);
      } finally {
        setLoading(false);
      }
    };

    loadBooking();
  }, [id]);

  return { booking, loading, error };
}