import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { bookingApi } from '../lib/api/booking';
import type { CreateBookingData} from '../types/booking';

export function useCreateBooking() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBooking = async (data: CreateBookingData) => {
    try {
      setLoading(true);
      setError(null);
      const booking = await bookingApi.createBooking(data);
      toast.success('Booking created successfully!');
      navigate(`/payment/${booking.id}`);
      return booking;
    } catch (err) {
      setError('Failed to create booking');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, loading, error };
}
