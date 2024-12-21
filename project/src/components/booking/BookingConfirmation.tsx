import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Booking } from '../../types/index';
import { formatPrice } from '../../lib/utils';

interface BookingConfirmationProps {
  booking: Booking;
}

export function BookingConfirmation({ booking }: BookingConfirmationProps) {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600">
          Your booking has been successfully created. Please proceed to payment.
        </p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-600">Service:</span>
          <span className="font-medium">{booking.service.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Date:</span>
          <span className="font-medium">
            {new Date(booking.date).toLocaleDateString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Time:</span>
          <span className="font-medium">{booking.time}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-bold">{formatPrice(booking.price)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          to={`/payment/${booking.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Proceed to Payment
        </Link>
        <Link
          to="/bookings"
          className="block w-full bg-gray-100 text-gray-700 text-center py-2 px-4 rounded-md hover:bg-gray-200 transition"
        >
          View All Bookings
        </Link>
      </div>
    </div>
  );
}