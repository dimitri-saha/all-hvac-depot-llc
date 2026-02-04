
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import Chatbot from './components/Chatbot';
import { Star } from 'lucide-react';

console.log('App.tsx loaded');

// Minimal Page stubs for layout consistency

const TestimonialsPage = () => {
  const realReviews = [
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

  return (
    <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-8">Customer Stories</h1>
      <p className="text-xl text-gray-500 mb-16">Real feedback from local San Ramon homeowners.</p>
      <div className="space-y-12">
        {realReviews.map((review, i) => (
          <div key={i} className="max-w-2xl mx-auto bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-left">
            <div className="flex mb-4">
              {[...Array(review.stars)].map((_, starIdx) => (
                <Star key={starIdx} size={16} className="text-black fill-current" />
              ))}
            </div>
            <p className="text-lg italic text-gray-700 mb-6">"{review.quote}"</p>
            <div className="font-bold">{review.name}</div>
            <div className="text-sm text-gray-400">{review.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32">
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold">Contact Us</h1>
    </div>
    <div className="max-w-7xl mx-auto pb-20 px-4">
      <div className="bg-light-grey p-12 rounded-3xl text-center">
        <p className="text-2xl font-semibold mb-8">Need immediate help?</p>
        <a href="tel:9253102505" className="text-4xl font-bold block mb-4 underline">(925) 310-2505</a>
        <p className="text-gray-500">We are available 24/7 for emergency HVAC services.</p>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
