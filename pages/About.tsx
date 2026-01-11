
import React from 'react';

const About: React.FC = () => {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-bold mb-8">Premium Comfort Solutions for the East Bay.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            All HVAC Depot LLC is your go-to HVAC contractor in San Ramon, CA, offering top-rated heating, ventilation, and air conditioning solutions for residential and commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <img 
              src="https://picsum.photos/seed/hvac-hq/800/600" 
              alt="Our professional team" 
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Expert Care You Can Trust</h2>
            <p className="text-gray-600 leading-relaxed">
              Our skilled technicians specialize in HVAC installation, repair, and maintenance services designed to keep your indoor climate comfortable and energy-efficient all year round. Whether you need AC repair, furnace installation, or complete HVAC system upgrades, All HVAC Depot LLC delivers fast, reliable, and affordable services tailored to your needs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Proudly serving San Ramon and surrounding areas, we're committed to quality workmanship, exceptional customer care, and eco-friendly solutions.
            </p>
            <div className="bg-light-grey p-8 rounded-2xl border-l-4 border-black">
              <p className="italic font-medium text-gray-800">
                "We don't just fix units; we build long-term relationships through trust and expert care."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-sm uppercase tracking-widest text-gray-400">Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm uppercase tracking-widest text-gray-400">Availability</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Eco</div>
            <div className="text-sm uppercase tracking-widest text-gray-400">Friendly</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">Local</div>
            <div className="text-sm uppercase tracking-widest text-gray-400">San Ramon</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
