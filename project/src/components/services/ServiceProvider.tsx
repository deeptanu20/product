import { User, Star, Award } from 'lucide-react';
import { type Provider } from '../../types';

interface ServiceProviderProps {
  provider: Provider;
}

export function ServiceProvider({ provider }: ServiceProviderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">About the Provider</h2>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          {provider.profileImage ? (
            <img 
              src={provider.profileImage} 
              alt={provider.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-8 h-8 text-gray-400" />
          )}
        </div>
        <div>
          <h3 className="font-semibold">{provider.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{provider.rating.toFixed(1)} ({provider.reviewCount} reviews)</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Verified Professional</span>
          </div>
        </div>
      </div>
    </div>
  );
}