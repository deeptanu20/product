import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../lib/api';
import { toast } from 'react-hot-toast';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        try {
          const response = await api.post('/auth/login', { email, password });
          const { token, ...user } = response.data;
          
          set({ user, token, isAuthenticated: true });
          toast.success('Successfully logged in!');
        } catch (error) {
          throw error;
        }
      },

      signup: async (name: string, email: string, password: string) => {
        try {
          const response = await api.post('/auth/register', { name, email, password });
          const { token, ...user } = response.data;
          
          set({ user, token, isAuthenticated: true });
          toast.success('Successfully signed up!');
        } catch (error) {
          throw error;
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
        toast.success('Successfully logged out!');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);