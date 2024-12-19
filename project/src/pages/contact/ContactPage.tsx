import { ContactForm } from '../../components/contact/ContactForm';
import { ContactInfo } from '../../components/contact/ContactInfo';

export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our services? We're here to help. Contact us through any of 
          the following methods or fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}