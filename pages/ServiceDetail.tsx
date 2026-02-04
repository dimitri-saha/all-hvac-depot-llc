
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wrench, Snowflake, Calendar, ShieldAlert, Wind, Thermometer } from 'lucide-react';

export const servicesData = [
  {
    id: 'repair',
    title: 'Residential HVAC Repair',
    shortTitle: 'Repair',
    description: 'Expert diagnostics and repairs for all furnace and AC brands to restore your comfort quickly.',
    longDescription: `
      When your heating or cooling system breaks down, you need fast, reliable service. 
      Our certified technicians are equipped to handle repairs on all major brands and models. 
      We diagnose the issue accurately and provide transparent pricing before any work begins.
      
      Common issues we fix:
      - Refrigerant leaks
      - Frozen evaporator coils
      - Malfunctioning thermostats
      - Strange noises or odors
      - uneven cooling or heating
    `,
    icon: <Wrench className="w-12 h-12 text-black" />,
  },
  {
    id: 'installation',
    title: 'AC Installation & Replacement',
    shortTitle: 'Installation',
    description: 'Professional installation of high-efficiency cooling systems tailored to your home\'s specific needs.',
    longDescription: `
      Upgrade your home comfort with a new, high-efficiency air conditioning system. 
      We help you choose the right unit for your home's size and your budget. 
      Proper installation is crucial for the longevity and efficiency of your new system.
      
      Our installation process includes:
      - Load calculation to ensure proper sizing
      - Professional removal of old equipment
      - Expert installation of new unit and ductwork connections
      - Thorough testing and demonstration of new system features
    `,
    icon: <Snowflake className="w-12 h-12 text-black" />,
  },
  {
    id: 'maintenance',
    title: 'Routine Maintenance Plans',
    shortTitle: 'Maintenance',
    description: 'Scheduled tune-ups that extend the lifespan of your system and prevent costly breakdowns.',
    longDescription: `
      Regular maintenance is key to keeping your HVAC system running smoothly and efficiently. 
      Our maintenance plans are designed to catch potential issues before they become major problems.
      
      Benefits of our maintenance plan:
      - Lower energy bills
      - Extended system lifespan
      - Improved indoor air quality
      - Priority service scheduling
      - Discounted parts and labor
    `,
    icon: <Calendar className="w-12 h-12 text-black" />,
  },
  {
    id: 'emergency',
    title: 'Emergency HVAC Services',
    shortTitle: 'Emergency',
    description: 'We are available 24/7 for those critical moments when your system fails during extreme weather.',
    longDescription: `
      HVAC emergencies don't wait for business hours. That's why we offer 24/7 emergency service.
      Whether it's a furnace failure in the middle of winter or an AC breakdown during a heatwave, we're here to help.
      
      Our emergency team is:
      - Available 24 hours a day, 7 days a week
      - Fully stocked with common parts
      - Ready to dispatch quickly to your location
    `,
    icon: <ShieldAlert className="w-12 h-12 text-black" />,
  },
  {
    id: 'duct-cleaning',
    title: 'Air Duct Cleaning',
    shortTitle: 'Duct Cleaning',
    description: 'Improve your indoor air quality and system efficiency with our thorough duct cleaning services.',
    longDescription: `
      Over time, dust, allergens, and debris can accumulate in your home's air ducts. 
      Our professional duct cleaning service removes these contaminants, improving your indoor air quality and helping your system run more efficiently.
      
      We recommend duct cleaning if:
      - You have renovated your home recently
      - You have pets that shed
      - You notice excessive dust in your home
      - Family members suffer from allergies or asthma
    `,
    icon: <Wind className="w-12 h-12 text-black" />,
  },
  {
    id: 'indoor-air-quality',
    title: 'Indoor Air Quality',
    shortTitle: 'Air Quality',
    description: 'Advanced solutions to monitor and improve the air you breathe inside your home.',
    longDescription: `
      The air inside your home can be more polluted than the air outside. 
      We offer a range of solutions to help you breathe easier, including air purifiers, humidifiers, and ventilators.
      
      Our IAQ solutions help with:
      - Reducing allergens and irritants
      - Controlling humidity levels
      - Eliminating odors
      - preventing mold and mildew growth
    `,
    icon: <Thermometer className="w-12 h-12 text-black" />,
  },
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-black underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/services" className="text-gray-500 hover:text-black mb-4 inline-block">← Back to Services</Link>
          <div className="bg-light-grey w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
            {service.icon}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-500 leading-relaxed whitespace-pre-line">
            {service.longDescription}
          </p>
        </div>
        
        <div className="bg-light-grey p-8 rounded-3xl mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to schedule?</h3>
          <p className="mb-6 text-gray-600">Contact us today to get a quote for {service.title.toLowerCase()}.</p>
          <Link to="/contact" className="bg-black text-white px-8 py-4 rounded-full font-bold inline-block hover:scale-105 transition-transform">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
