
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-bold tracking-widest uppercase mb-6">
            Trusted HVAC Experts in San Ramon
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[1.1]">
            Friendly, Reliable HVAC Services in <span className="text-gray-400">San Ramon</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            Providing premium heating, cooling, and indoor comfort solutions for homes and small businesses in the East Bay area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-gray-800"
            >
              Request Service
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:9253102505"
              className="inline-flex items-center justify-center border-2 border-black text-black px-8 py-4 rounded-full font-semibold transition-all hover:bg-black hover:text-white"
            >
              Call (925) 310-2505
            </a>
          </div>
        </div>
      </div>
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100 0 L100 100 L0 100 Z" fill="black" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
