import React, { useState } from 'react';
// import { Camera } from 'lucide-react';
// import { toast } from 'react-hot-toast';
import type { CreateServiceData } from '../../types/service';

interface ServiceFormProps {
  onSubmit: (data: CreateServiceData) => Promise<void>;
  loading?: boolean;
  initialData?: Partial<CreateServiceData>;
}

export function ServiceForm({ onSubmit, loading, initialData }: ServiceFormProps) {
  const [formData, setFormData] = useState<CreateServiceData>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    category: initialData?.category || '',
    price: initialData?.price || 0,
    image: initialData?.image || '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Service Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          required
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          required
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Gardening">Gardening</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            className="pl-7 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <div className="mt-1 flex items-center gap-4">
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              className="h-12 w-12 object-cover rounded-md"
            />
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {loading ? 'Saving...' : 'Save Service'}
      </button>
    </form>
  );
}