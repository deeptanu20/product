import  { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BookingCalendar } from '../components/booking/BookingCalendar';
import { BookingForm, type BookingFormData } from '../components/booking/BookingForm';
import { SERVICES } from '../data/services';

const AVAILABLE_TIME_SLOTS = [
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '01:00 PM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: false },
  { time: '04:00 PM', available: true },
  { time: '05:00 PM', available: true },
];

export function BookingPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === serviceId);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p>Service not found</p>
      </div>
    );
  }

  const handleBookingSubmit = (formData: BookingFormData) => {
    if (!selectedTime) {
      toast.error('Please select a time slot');
      return;
    }

    // Here you would typically make an API call to create the booking
    console.log('Booking submitted:', {
      service,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });

    toast.success('Booking confirmed!');
    navigate('/bookings');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Book {service.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BookingCalendar
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          selectedTime={selectedTime}
          onTimeSelect={setSelectedTime}
          availableTimeSlots={AVAILABLE_TIME_SLOTS}
        />
        
        <BookingForm
          service={service}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </div>
  );
}