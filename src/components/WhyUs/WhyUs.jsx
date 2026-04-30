import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './WhyUs.css';

const REASONS = [
  {
    icon: '🏆',
    title: 'Premium Condition Bikes',
    desc: 'Every bike is regularly serviced, inspected, and maintained to the highest standard before each rental.',
  },
  {
    icon: '🧼',
    title: 'Sanitized & Ready',
    desc: 'Bikes are fully cleaned, sanitized, and prepared fresh for every new customer — your hygiene matters.',
  },
  {
    icon: '⚡',
    title: 'Easy Booking Process',
    desc: 'Reserve your e-bike in under 2 minutes — no paperwork, no queue. Book online and pick up at agreed time.',
  },
  {
    icon: '💰',
    title: 'Affordable Daily Rates',
    desc: 'Only 185 PLN per day with helmet and charger included. No hidden fees. Transparent pricing always.',
  },
  {
    icon: '💬',
    title: 'Fast Customer Support',
    desc: 'We reply on WhatsApp within minutes. Our team is available 7 days a week to assist with any question.',
  },
  {
    icon: '🗺️',
    title: 'Perfect for Tourists & Locals',
    desc: 'Great for sightseeing, commuting, or weekend adventures. We can recommend the best local routes too.',
  },
];

const WhyUs = () => {
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className="whyus" id="why-us" aria-label="Why choose us">
      <div className="container">
        <div className="whyus__header fade-up" ref={headerRef}>
          <span className="section-tag">✅ Why Choose Us</span>
          <h2 className="section-title">
            The Premium <span className="accent-text">Difference</span>
          </h2>
          <p className="section-subtitle">
            We don't just rent bikes — we deliver an experience that makes every ride memorable.
          </p>
        </div>

        <div className="whyus__grid stagger fade-up" ref={gridRef}>
          {REASONS.map((reason) => (
            <div className="whyus-card" key={reason.title}>
              <div className="whyus-card__icon">{reason.icon}</div>
              <h3 className="whyus-card__title">{reason.title}</h3>
              <p className="whyus-card__desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
