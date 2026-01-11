
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6">
              ALL <span className="text-gray-500">HVAC</span> DEPOT
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sleek, modern comfort solutions for your home. We specialize in high-efficiency HVAC systems and dedicated service across San Ramon.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>HVAC Repair</li>
              <li>AC Installation</li>
              <li>Maintenance Plans</li>
              <li>Emergency Support</li>
              <li>Air Duct Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Office</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>2661 Derby Dr, San Ramon, CA 94583</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>(925) 310-2505</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 All HVAC Depot LLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
