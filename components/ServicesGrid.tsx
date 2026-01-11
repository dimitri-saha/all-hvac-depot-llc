
import React from 'react';
import { Wrench, Snowflake, Calendar, ShieldAlert } from 'lucide-react';

const services = [
  {
    title: 'Residential HVAC Repair',
    description: 'Expert diagnostics and repairs for all furnace and AC brands to restore your comfort quickly.',
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    title: 'AC Installation & Replacement',
    description: 'Professional installation of high-efficiency cooling systems tailored to your home\'s specific needs.',
    icon: <Snowflake className="w-8 h-8" />,
  },
  {
    title: 'Routine Maintenance Plans',
    description: 'Scheduled tune-ups that extend the lifespan of your system and prevent costly breakdowns.',
    icon: <Calendar className="w-8 h-8" />,
  },
  {
    title: 'Emergency HVAC Services',
    description: 'We are available 24/7 for those critical moments when your system fails during extreme weather.',
    icon: <ShieldAlert className="w-8 h-8" />,
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-light-grey" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Core HVAC Services</h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="mb-6 text-black group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
