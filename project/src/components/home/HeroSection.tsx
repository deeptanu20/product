
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <div className="relative bg-blue-600 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Your Home Services, Delivered with Excellence
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Book trusted professionals for all your home maintenance needs. From cleaning to repairs, 
            we've got you covered with verified experts.
          </p>
          
          <div className="bg-white rounded-lg p-2 flex shadow-lg max-w-2xl">
            <input
              type="text"
              placeholder="What service do you need?"
              className="flex-1 px-4 py-2 text-gray-900 focus:outline-none"
            />
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search
            </Link>
          </div>
          
          <div className="mt-8 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-blue-100">Verified Experts</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50k+</div>
              <div className="text-blue-100">Completed Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.8/5</div>
              <div className="text-blue-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}