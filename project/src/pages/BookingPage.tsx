import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookingCalendar } from '../components/booking/BookingCalendar';
import { BookingForm, type BookingFormData } from '../components/booking/BookingForm';
import { BookingConfirmation } from '../components/booking/BookingConfirmation';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { useService } from '../hooks/useService';
import { useCreateBooking } from '../hooks/useCreateBooking';

export function BookingPage() {
  const { serviceId } = useParams();
  const { service, loading: serviceLoading, error: serviceError } = useService(serviceId);
  const { createBooking, loading: bookingLoading } = useCreateBooking();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booking, setBooking] = useState<any>(null);

  if (serviceLoading) return <LoadingSpinner />;
  if (serviceError) return <ErrorMessage message={serviceError} />;
  if (!service) return <ErrorMessage message="Service not found" />;

  const availableTimeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '12:00', available: true },
    { time: '13:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: false },
    { time: '16:00', available: true },
  ];

  const handleBookingSubmit = async (formData: BookingFormData) => {
    if (!selectedDate || !selectedTime) {
      return;
    }

    try {
      const newBooking = await createBooking({
        serviceId: service.id,
        date: selectedDate.toISOString(),
        time: selectedTime,
        ...formData,
      });
      setBooking(newBooking);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  if (booking) {
    return <BookingConfirmation booking={booking} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Book {service.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BookingCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          availableTimeSlots={availableTimeSlots}
        />
        
        <div>
          <BookingForm
            service={service}
            onSubmit={handleBookingSubmit}
          />
        </div>
      </div>
    </div>
  );
}