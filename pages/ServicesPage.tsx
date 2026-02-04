
import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from './ServiceDetail';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-8">Our Services</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">
        Explore our comprehensive range of heating and cooling solutions for San Ramon residents.
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Link 
            key={service.id} 
            to={`/services/${service.id}`}
            className="bg-light-grey p-10 rounded-3xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 text-left group"
          >
            <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
              {React.cloneElement(service.icon as React.ReactElement, { className: "w-10 h-10 text-black" })}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-500 mb-6">{service.description}</p>
            <span className="text-black font-semibold underline">Learn more</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
