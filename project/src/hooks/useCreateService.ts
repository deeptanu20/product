import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { serviceApi } from '../lib/api/service';
import type {  Service } from '../types';
import type { CreateServiceData } from '../types/service'

export function useCreateService() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createService = async (data: CreateServiceData): Promise<Service> => {
    try {
      setLoading(true);
      setError(null);
      const service = await serviceApi.createService(data);
      toast.success('Service created successfully!');
      navigate(`/services/${service.id}`);
      return service;
    } catch (err) {
      setError('Failed to create service');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createService, loading, error };
}