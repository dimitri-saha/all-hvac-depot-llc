
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Deandre Zaria",
    location: "San Ramon, CA",
    quote: "Top-notch service from All HVAC Depot LLC. Their team was friendly, professional, and got my AC running in just 2 hours.",
    stars: 5
  },
  {
    name: "Allen Marina",
    location: "San Ramon, CA",
    quote: "Gregory was exceptional. He arrived in approximately an hour and spent around two hours finishing the task.",
    stars: 5
  },
  {
    name: "Lorelei Marilyn",
    location: "San Ramon, CA",
    quote: "Smith shows a high level of professionalism to inquiries with confidence. He has extensive HVAC related knowledge.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-500">Verified reviews from our local customers in San Ramon.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col h-full">
              <div className="flex mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-black fill-current" />
                ))}
              </div>
              <p className="italic text-gray-600 mb-6 flex-grow">"{review.quote}"</p>
              <div>
                <div className="font-bold text-black">{review.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{review.location}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-black rounded-3xl text-white flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Trusted in San Ramon</h3>
            <p className="text-gray-400">Licensed, Insured, and Ready to Help.</p>
          </div>
          <div className="flex space-x-4">
            <div className="text-center px-4">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Years Exp</div>
            </div>
            <div className="text-center px-4 border-l border-gray-800">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-xs uppercase tracking-widest text-gray-400">Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
