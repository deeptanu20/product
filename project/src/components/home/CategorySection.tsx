import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Paintbrush, 
  Wrench, 
  Zap, 
  Sprout, 
  Droplets, 
  Shield, 
  Hammer, 
  Truck 
} from 'lucide-react';

const CATEGORIES = [
  { icon: Paintbrush, name: 'Painting', color: 'bg-red-100 text-red-600' },
  { icon: Wrench, name: 'Plumbing', color: 'bg-blue-100 text-blue-600' },
  { icon: Zap, name: 'Electrical', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Sprout, name: 'Gardening', color: 'bg-green-100 text-green-600' },
  { icon: Droplets, name: 'Cleaning', color: 'bg-purple-100 text-purple-600' },
  { icon: Shield, name: 'Security', color: 'bg-gray-100 text-gray-600' },
  { icon: Hammer, name: 'Carpentry', color: 'bg-orange-100 text-orange-600' },
  { icon: Truck, name: 'Moving', color: 'bg-indigo-100 text-indigo-600' },
];

export function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CATEGORIES.map(({ icon: Icon, name, color }) => (
            <Link
              key={name}
              to={`/services?category=${name}`}
              className="group bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className={`w-16 h-16 mx-auto rounded-full ${color} flex items-center justify-center mb-4`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold group-hover:text-blue-600 transition">{name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}