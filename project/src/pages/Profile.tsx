import React from 'react';
import { User, Mail, Phone, MapPin, Settings, LogOut } from 'lucide-react';

export function Profile() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">My Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Member since March 2024</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5" />
            <span>john.doe@example.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>123 Sample Street, City, Country</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition">
          <Settings className="w-5 h-5 text-gray-600" />
          <span>Account Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition text-red-600">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}