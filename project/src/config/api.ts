export const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    profile: '/auth/profile',
  },
  services: {
    list: '/services',
    create: '/services',
    update: (id: string) => `/services/${id}`,
    delete: (id: string) => `/services/${id}`,
  },
  bookings: {
    list: '/bookings',
    create: '/bookings',
    update: (id: string) => `/bookings/${id}`,
    status: (id: string) => `/bookings/${id}/status`,
    cancel: (id: string) => `/bookings/${id}/cancel`,
  },
  reviews: {
    create: '/reviews',
    service: (serviceId: string) => `/reviews/service/${serviceId}`,
  },
  payments: {
    createIntent: '/payments/create-intent',
    confirm: '/payments/confirm',
  },
};