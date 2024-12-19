export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: Review[];
  provider: Provider;
}

export interface Provider {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Booking {
  id: string;
  service: Service;
  user: {
    id: string;
    name: string;
    email: string;
  };
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
  address: string;
  notes?: string;
  paymentStatus: 'pending' | 'completed' | 'refunded';
}