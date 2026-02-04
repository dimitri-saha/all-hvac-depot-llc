
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../pages/ServiceDetail';

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-light-grey" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Core HVAC Services</h2>
          <div className="w-20 h-1 bg-black"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 group block"
            >
              <div className="mb-6 text-black group-hover:scale-110 transition-transform origin-left">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
