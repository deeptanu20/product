export interface CreateBookingData {
    serviceId: string;
    date: string;
    time: string;
    address: string;
    notes?: string;
  }
  
  export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    notes: string;
  }