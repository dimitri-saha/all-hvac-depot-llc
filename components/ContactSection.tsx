
import React, { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Future integration for email delivery
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Ready to schedule a service or have questions about your HVAC system? Fill out the form or call us directly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-light-grey p-3 rounded-xl">
                  <Phone size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-1">Call Us</h4>
                  <a href="tel:9253102505" className="text-xl font-semibold hover:text-gray-600 transition-colors">
                    (925) 310-2505
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-light-grey p-3 rounded-xl">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-1">Location</h4>
                  <p className="text-xl font-semibold">
                    2661 Derby Dr, San Ramon, CA 94583
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light-grey p-8 md:p-12 rounded-3xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-black text-white p-4 rounded-full mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 font-bold border-b border-black"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                    <input type="text" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                    <input type="tel" required className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email (Optional)</label>
                  <input type="email" className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Service Needed</label>
                  <select className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none transition-all appearance-none cursor-pointer">
                    <option>HVAC Repair</option>
                    <option>AC Installation</option>
                    <option>Maintenance Plan</option>
                    <option>Emergency Service</option>
                    <option>Air Duct Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-black text-white font-bold py-5 rounded-xl transition-all hover:bg-gray-800 active:scale-[0.98]">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
