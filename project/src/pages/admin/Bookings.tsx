import  { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { toast } from 'react-hot-toast';
import api from '../../lib/api';
import { API_ENDPOINTS } from '../../config/api';
import { type Booking } from '../../types';
import { cn, formatPrice } from '../../lib/utils';

export function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>('all');

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get(API_ENDPOINTS.bookings.list);
      setBookings(response.data);
    } catch (error) {
      toast.error('Failed to fetch bookings');
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      await api.put(API_ENDPOINTS.bookings.status(id), { status });
      toast.success('Booking status updated');
      fetchBookings();
    } catch (error) {
      toast.error('Failed to update booking status');
    }
  };

  const filteredBookings = bookings.filter(
    booking => filter === 'all' || booking.status === filter
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
        <div className="flex gap-2">
          {(['all', 'pending', 'confirmed', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium",
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Booking #{booking.id}</h3>
                <p className="text-gray-600">{formatPrice(booking.price)}</p>
              </div>
              <span className={cn(
                'px-3 py-1 rounded-full text-sm font-medium',
                {
                  'bg-yellow-100 text-yellow-800': booking.status === 'pending',
                  'bg-green-100 text-green-800': booking.status === 'confirmed',
                  'bg-blue-100 text-blue-800': booking.status === 'completed',
                }
              )}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{new Date(booking.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{new Date(booking.date).toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-5 h-5" />
                <span>John Doe</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5" />
                <span>123 Sample St</span>
              </div>
            </div>

            {booking.status === 'pending' && (
              <div className="flex gap-2">
                <button
                  onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}