import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Availability from './components/Availability/Availability';
import Fleet from './components/Fleet/Fleet';
import WhyUs from './components/WhyUs/WhyUs';
import Pricing from './components/Pricing/Pricing';
import Booking from './components/Booking/Booking';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <Availability />
          <Fleet />
          <WhyUs />
          <Pricing />
          <Booking />
          <Reviews />
          <FAQ />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;
