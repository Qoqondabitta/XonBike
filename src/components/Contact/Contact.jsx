import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Contact.css';

/* EDITABLE: Update all contact details below */
const CONTACT_INFO = [
  {
    icon: '💬',
    title: 'WhatsApp',
    value: '+48 000 000 000',
    sub: 'Reply within 30 min',
    href: 'https://wa.me/48000000000?text=Hello%2C%20I%27d%20like%20to%20rent%20an%20e-bike.',
    color: '#25D366',
  },
  {
    icon: '📞',
    title: 'Phone',
    value: '+48 000 000 000',
    sub: 'Mon – Sun, 8am – 8pm',
    href: 'tel:+48000000000',
    color: '#3b82f6',
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'hello@voltride.pl',
    sub: 'We reply within 2 hours',
    href: 'mailto:hello@voltride.pl',
    color: '#f59e0b',
  },
  {
    icon: '📍',
    title: 'Location',
    value: 'Poland',
    sub: 'Pickup location shared on booking',
    href: 'https://maps.google.com/?q=Poland',
    color: '#ef4444',
  },
];

const Contact = () => {
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.05 });
  const mapRef    = useScrollAnimation({ threshold: 0.08 });

  return (
    <section className="contact" id="contact" aria-label="Contact information">
      <div className="container">
        <div className="contact__header fade-up" ref={headerRef}>
          <span className="section-tag">📬 Contact</span>
          <h2 className="section-title">
            Get in <span className="accent-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We're here to help. Choose your preferred contact method below.
          </p>
        </div>

        <div className="contact__grid stagger fade-up" ref={gridRef}>
          {CONTACT_INFO.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="contact-card"
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={`Contact via ${item.title}: ${item.value}`}
            >
              <div className="contact-card__icon" style={{ '--c': item.color }}>
                {item.icon}
              </div>
              <div className="contact-card__body">
                <div className="contact-card__title">{item.title}</div>
                <div className="contact-card__value">{item.value}</div>
                <div className="contact-card__sub">{item.sub}</div>
              </div>
              <span className="contact-card__arrow">→</span>
            </a>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="contact__map fade-up" ref={mapRef} aria-label="Map placeholder">
          <div className="contact__map-placeholder">
            {/* EDITABLE: Replace with real Google Maps embed iframe */}
            <div className="contact__map-overlay">
              <div className="contact__map-pin">📍</div>
              <p className="contact__map-label">Poland</p>
              <p className="contact__map-sub">Exact pickup location shared upon booking confirmation</p>
              <a
                href="https://maps.google.com/?q=Poland"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__map-btn"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
