import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-gray-600">
              123 Service Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">
              +1 (555) 123-4567<br />
              +1 (555) 987-6543
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">
              info@homeservices.com<br />
              support@homeservices.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645890124663!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}