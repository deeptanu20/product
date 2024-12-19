import { type Booking } from '../../types';
import { formatPrice } from '../../lib/utils';

interface PaymentSummaryProps {
  booking: Booking;
}

export function PaymentSummary({ booking }: PaymentSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Payment Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Service Fee</span>
          <span>{formatPrice(booking.price)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Platform Fee</span>
          <span>{formatPrice(booking.price * 0.1)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span>{formatPrice(booking.price * 0.08)}</span>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatPrice(booking.price * 1.18)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}