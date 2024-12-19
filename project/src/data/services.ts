import { Service } from '../types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'House Cleaning',
    description: 'Professional house cleaning services for your home',
    price: 99.99,
    category: 'Cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
    rating: 4.8,
    reviews: []
  },
  {
    id: '2',
    name: 'Plumbing Services',
    description: 'Expert plumbing repair and installation',
    price: 85.00,
    category: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&q=80',
    rating: 4.7,
    reviews: []
  },
  {
    id: '3',
    name: 'Electrical Work',
    description: 'Licensed electricians for all your electrical needs',
    price: 120.00,
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
    rating: 4.9,
    reviews: []
  },
  {
    id: '4',
    name: 'Gardening & Landscaping',
    description: 'Professional garden maintenance and landscaping services',
    price: 75.00,
    category: 'Outdoor',
    image: 'https://images.unsplash.com/photo-1599685315640-be4027b6655f?auto=format&fit=crop&q=80',
    rating: 4.6,
    reviews: []
  }
];