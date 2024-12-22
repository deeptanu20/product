/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { API_BASE_URL, API_ENDPOINTS } from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = Bearer ${token};
//   }
//   return config;
// });

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

export const fetchServices = async () => {
  const response = await api.get(API_ENDPOINTS.services.list);
  return response.data;
};

export const fetchService = async (id: string) => {
  const response = await api.get(`${API_ENDPOINTS.services.list}/${id}`);
  return response.data;
};

export const fetchBookings = async () => {
  const response = await api.get(API_ENDPOINTS.bookings.list);
  return response.data;
};

export const fetchBooking = async (id: string) => {
  const response = await api.get(`${API_ENDPOINTS.bookings.list}/${id}`);
  return response.data;
};

export const createBooking = async (data: any) => {
  const response = await api.post(API_ENDPOINTS.bookings.create, data);
  return response.data;
};

export const createPayment = async (data: any) => {
  const response = await api.post(API_ENDPOINTS.payments.createIntent, data);
  return response.data;
};

export default api;