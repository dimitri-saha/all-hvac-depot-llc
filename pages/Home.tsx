
import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default Home;
