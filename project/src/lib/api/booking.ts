import api from '../api';
import { API_ENDPOINTS } from '../../config/api';
import { type CreateBookingData } from '../../types/booking';
import { type Booking} from '../../types/index';

export const bookingApi = {
  // Create a new booking
  createBooking: async (data: CreateBookingData): Promise<Booking> => {
    const response = await api.post(API_ENDPOINTS.bookings.create, data);
    return response.data;
  },

  // Get all bookings for the current user
  getBookings: async (): Promise<Booking[]> => {
    const response = await api.get(API_ENDPOINTS.bookings.list);
    return response.data;
  },

  // Get a specific booking by ID
  getBooking: async (id: string): Promise<Booking> => {
    const response = await api.get(`${API_ENDPOINTS.bookings.list}/${id}`);
    return response.data;
},

  // Update booking status (for providers)
  updateBookingStatus: async (id: string, status: string): Promise<Booking> => {
    const response = await api.put(API_ENDPOINTS.bookings.status(id), { status });
    return response.data;
  },

  // Cancel a booking
  cancelBooking: async (id: string): Promise<Booking> => {
    const response = await api.put(API_ENDPOINTS.bookings.cancel(id));
    return response.data;
  },
};
