
import { HeroSection } from '../components/home/HeroSection';
import { CategorySection } from '../components/home/CategorySection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../data/services';
import Footer from '../components/home/Footer';
import Consaltation from '../components/home/Consaltation';

export function Home() {
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div>
      <HeroSection />
      
      <CategorySection />

     
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section>

        <Consaltation/>
        
      </section>

      <TestimonialSection />

    
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All our service providers undergo thorough background checks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600">100% satisfaction guarantee or your money back</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-50'>
        <div>
          <Footer/>
        </div>

      </section>
    </div>
  );
}