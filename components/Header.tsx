
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-black">
              ALL <span className="text-gray-400">HVAC</span> DEPOT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-black ${
                  isActive(link.path) ? 'text-black' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:9253102505"
              className="flex items-center space-x-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-transform hover:scale-105"
            >
              <Phone size={16} />
              <span>(925) 310-2505</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium ${
                isActive(link.path) ? 'text-black' : 'text-gray-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:9253102505"
            className="flex items-center justify-center space-x-2 bg-black text-white w-full py-4 rounded-xl font-bold"
          >
            <Phone size={18} />
            <span>(925) 310-2505</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
