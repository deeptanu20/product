
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../types/index';
import { cn, formatPrice } from '../lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden", className)}>
      <img 
        src={service.image || 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80'} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{service.description}</p>
        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm">{service.rating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm ml-1">
            ({service.reviews?.length || 0} reviews)
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{formatPrice(service.price)}</span>
          <Link
            to={`/services/${service.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}