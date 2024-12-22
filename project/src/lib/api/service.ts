import api from '../api';
import { API_ENDPOINTS } from '../../config/api';
import { type Service } from '../../types/index';
import { type CreateServiceData, type UpdateServiceData,type ServiceFilters} from '../../types/service'

export const serviceApi = {
  // Get all services with optional filters
  getServices: async (filters?: ServiceFilters): Promise<Service[]> => {
    const response = await api.get(API_ENDPOINTS.services.list, { params: filters });
    return response.data;
  },

  // Get a single service by ID
  getService: async (id: string): Promise<Service> => {
    const response = await api.get(`${API_ENDPOINTS.services.list}/${id}`);
    return response.data;
  },

  // Create a new service (provider only)
  createService: async (data: CreateServiceData): Promise<Service> => {
    const response = await api.post(API_ENDPOINTS.services.create, data);
    return response.data;
  },

  // Update a service (provider only)
  updateService: async (id: string, data: UpdateServiceData): Promise<Service> => {
    const response = await api.put(API_ENDPOINTS.services.update(id), data);
    return response.data;
  },

  // Delete a service (admin only)
  deleteService: async (id: string): Promise<void> => {
    await api.delete(API_ENDPOINTS.services.delete(id));
  },

  // Update service availability
  updateAvailability: async (id: string, availability: any[]): Promise<Service> => {
    const response = await api.put(`${API_ENDPOINTS.services.list}/${id}/availability`, { availability });
    return response.data;
  },
};