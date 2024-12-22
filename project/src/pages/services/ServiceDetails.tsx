
import { useParams } from 'react-router-dom';
import { Star, Clock, MapPin, DollarSign } from 'lucide-react';
import { ServiceReviews } from '../../components/services/ServiceReviews';
import { ServiceProvider } from '../../components/services/ServiceProvider';
import { BookingForm, type BookingFormData } from '../../components/booking/BookingForm';
import { useService } from '../../hooks/useService';
import { useCreateBooking } from '../../hooks/useCreateBooking';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

export function ServiceDetails() {
  const { id } = useParams();
  const { service, loading, error } = useService(id);
  const { createBooking, loading: bookingLoading } = useCreateBooking();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!service) return <ErrorMessage message="Service not found" />;

  const handleBookingSubmit = async (formData: BookingFormData) => {
    try {
      await createBooking({
        serviceId: service.id,
        ...formData,
        date: '',
        time: ''
      });
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 font-semibold">{service.rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="ml-1">2 hours</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="ml-1">On Location</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-5 h-5 text-gray-500" />
              <span className="ml-1">Starting from ${service.price}</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">About this service</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>

          <ServiceProvider provider={service.provider} />
          <ServiceReviews serviceId={service.id} reviews={service.reviews} />
        </div>

        {/* Booking Sidebar */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <BookingForm 
              service={service} 
              onSubmit={handleBookingSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}