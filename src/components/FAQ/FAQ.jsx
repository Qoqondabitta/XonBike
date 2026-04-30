import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './FAQ.css';

/* EDITABLE: Update FAQ answers as needed */
const FAQS = [
  {
    q: 'Is a deposit required to rent an e-bike?',
    a: 'No deposit is required. We operate on a trust-based system. We simply need your name, phone number, and email to confirm your booking. No upfront payment or security deposit needed.',
  },
  {
    q: 'How do I book an e-bike?',
    a: 'Booking is easy! Fill out our online booking form on this page, or contact us directly via WhatsApp. We will confirm your reservation within 30 minutes and arrange a convenient pickup time and location.',
  },
  {
    q: 'What documents do I need to rent?',
    a: 'You only need a valid ID (passport or national ID card). No driving license is required as e-bikes in Poland are classified as bicycles and can be ridden without a license.',
  },
  {
    q: 'What happens if the battery runs out during my ride?',
    a: 'Our e-bikes have a range of 60–80 km on a full charge, which is more than enough for a full day of exploring. Each bike comes with a charger, so you can top up anywhere with a standard power outlet. In case of any issue, contact us on WhatsApp immediately and we will assist you.',
  },
  {
    q: 'Can tourists rent e-bikes from you?',
    a: 'Absolutely! We welcome tourists from all over the world. We speak English and can assist with route recommendations, local tips, and flexible pickup/return arrangements. Our bikes are perfect for exploring Polish cities and countryside.',
  },
  {
    q: 'Is a helmet included with the rental?',
    a: 'Yes! Every rental includes a helmet at no extra cost. Safety is our priority. A charger is also included with every rental so you are always ready to ride.',
  },
  {
    q: 'What is the maximum speed of your e-bikes?',
    a: 'Our e-bikes are electronically limited to 25 km/h as required by Polish and EU law for pedelecs. This means you can ride them on bike paths and roads without a special license or insurance.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
    <button
      className="faq-item__question"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{faq.q}</span>
      <span className="faq-item__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
    </button>
    <div className="faq-item__answer-wrap" style={{ maxHeight: isOpen ? '400px' : '0' }}>
      <div className="faq-item__answer">{faq.a}</div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const headerRef  = useScrollAnimation();
  const listRef    = useScrollAnimation({ threshold: 0.05 });
  const ctaRef     = useScrollAnimation();

  const toggle = (i) => setOpenIndex(prev => (prev === i ? -1 : i));

  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq__header fade-up" ref={headerRef}>
          <span className="section-tag">❓ FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before your first ride.
          </p>
        </div>

        <div className="faq__list fade-up" ref={listRef}>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="faq__cta fade-up" ref={ctaRef}>
          <p>Still have questions?</p>
          {/* EDITABLE: Replace phone number */}
          <a
            href="https://wa.me/48000000000?text=Hello%2C%20I%20have%20a%20question%20about%20renting%20an%20e-bike."
            className="faq__cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
