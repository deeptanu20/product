import React from 'react';
import { Clock, Calendar, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { cn, formatPrice } from '../lib/utils';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useBookings } from '../hooks/useBookings';
import { type Booking } from '../types';

function BookingCard({ booking }: { booking: Booking }) {
  const bookingDate = new Date(booking.date);

  const statusStyles = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const StatusIcon = {
    pending: Clock,
    confirmed: CheckCircle,
    completed: CheckCircle,
    cancelled: XCircle,
  }[booking.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{booking.service?.name}</h3>
          <p className="text-gray-600">{formatPrice(booking.price)}</p>
        </div>
        <span className={cn(
          'px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1',
          statusStyles[booking.status]
        )}>
          <StatusIcon className="w-4 h-4" />
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>
            {bookingDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>
            {bookingDate.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
            })}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{booking.address}</span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {booking.status === 'pending' && (
          <>
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Confirm
            </button>
            <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
              Cancel
            </button>
          </>
        )}
        {booking.status === 'confirmed' && (
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
            Cancel Booking
          </button>
        )}
        {booking.status === 'completed' && (
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Leave Review
          </button>
        )}
      </div>
    </div>
  );
}

export function Bookings() {
  const { bookings, loading, error } = useBookings();
  const [filter, setFilter] = React.useState<'all' | 'upcoming' | 'completed'>('all');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'upcoming') {
      return ['pending', 'confirmed'].includes(booking.status);
    }
    if (filter === 'completed') {
      return booking.status === 'completed';
    }
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              filter === 'all'
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            All
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              filter === 'upcoming'
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              filter === 'completed'
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No bookings found.</p>
          </div>
        )}
      </div>
    </div>
  );
}