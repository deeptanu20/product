export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: Review[];
<<<<<<< HEAD
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
=======
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
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
<<<<<<< HEAD
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
=======
  serviceId: string;
  userId: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  price: number;
>>>>>>> 7c0fb2fb64e86a60a1867dbfd07fe6b0067767d1
}