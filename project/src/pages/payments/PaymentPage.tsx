import { useParams } from 'react-router-dom';
import { PaymentForm } from '../../components/payments/PaymentForm';
import { PaymentSummary } from '../../components/payments/PaymentSummary';
import { useBooking } from '../../hooks/useBooking';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

export function PaymentPage() {
  const { bookingId } = useParams();
  const { booking, loading, error } = useBooking(bookingId);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!booking) return <ErrorMessage message="Booking not found" />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Complete your payment</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PaymentForm booking={booking} />
        <PaymentSummary booking={booking} />
      </div>
    </div>
  );
}