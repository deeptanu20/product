import { useState, useEffect } from 'react';
import { fetchBookings } from '../lib/api';
import { type Booking } from '../types';

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        setLoading(true);
        const data = await fetchBookings();
        setBookings(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch bookings');
      } finally {
        setLoading(false);
      }
    };

    loadBookings();
  }, []);

  return { bookings, loading, error };
}