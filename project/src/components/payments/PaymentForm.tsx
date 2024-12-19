import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Calendar, Lock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { type Booking } from '../../types';
import { createPayment } from '../../lib/api';

interface PaymentFormProps {
  booking: Booking;
}

export function PaymentForm({ booking }: PaymentFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await createPayment({
        bookingId: booking.id,
        ...formData,
      });
      toast.success('Payment successful!');
      navigate('/bookings');
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <div className="relative">
            <input
              type="text"
              required
              maxLength={19}
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\s/g, '');
                if (/^\d*$/.test(value) && value.length <= 16) {
                  setFormData({
                    ...formData,
                    cardNumber: value.replace(/(\d{4})/g, '$1 ').trim(),
                  });
                }
              }}
              className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="MM/YY"
                maxLength={5}
                value={formData.expiryDate}
                onChange={(e) => {
                  const value = e.target.value.replace('/', '');
                  if (/^\d*$/.test(value) && value.length <= 4) {
                    setFormData({
                      ...formData,
                      expiryDate: value.replace(/(\d{2})(\d{0,2})/, '$1/$2').trim(),
                    });
                  }
                }}
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <div className="relative">
              <input
                type="password"
                required
                maxLength={4}
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 4) {
                    setFormData({ ...formData, cvv: value });
                  }
                }}
                className="pl-10 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </form>
  );
}