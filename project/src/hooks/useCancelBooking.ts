import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { bookingApi } from '../lib/api/booking';

export function useCancelBooking() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cancelBooking = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      await bookingApi.cancelBooking(id);
      toast.success('Booking cancelled successfully');
    } catch (err) {
      setError('Failed to cancel booking');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { cancelBooking, loading, error };
}