
import React from 'react';
import { CheckCircle } from 'lucide-react';

const reasons = [
  "24/7 Emergency Service Available",
  "Trusted & Certified Technicians",
  "Personalized Comfort Solutions",
  "Flat-Rate Pricing Transparency",
  "Licensed, Insured & Bonded",
  "San Ramon Local Business"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/hvac-tech/800/600" 
                alt="HVAC Technician at work" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Expertise You Can Depend On</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              At All HVAC Depot LLC, we prioritize your comfort and peace of mind. Our team brings decades of combined experience to every job, ensuring San Ramon homeowners get the best service possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="text-black flex-shrink-0" size={20} />
                  <span className="font-medium text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
