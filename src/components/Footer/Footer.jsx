import React from 'react';
import './Footer.css';

/* EDITABLE: Update footer content */
const QUICK_LINKS = [
  { label: 'Home',     id: 'hero' },
  { label: 'Our Bikes', id: 'fleet' },
  { label: 'Pricing',  id: 'pricing' },
  { label: 'Book Now', id: 'booking' },
  { label: 'Reviews',  id: 'reviews' },
  { label: 'FAQ',      id: 'faq' },
  { label: 'Contact',  id: 'contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
    href: '#',
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    href: '#',
  },
  {
    label: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.77 1.52V6.76a4.86 4.86 0 01-1-.07z"/>
      </svg>
    ),
    href: '#',
  },
  {
    label: 'Google Maps',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    href: 'https://maps.google.com/?q=Poland',
  },
];

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <button className="footer__logo" onClick={() => scrollTo('hero')}>
              <span className="footer__logo-icon">⚡</span>
              <span className="footer__logo-text">
                <span className="footer__logo-brand">VOLT</span>RIDE
              </span>
            </button>
            <p className="footer__tagline">
              Premium electric bike rentals in Poland. Explore more, stress less.
            </p>
            <div className="footer__socials">
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              {QUICK_LINKS.map(({ label, id }) => (
                <li key={id}>
                  <button className="footer__link" onClick={() => scrollTo(id)}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-title">Contact</h3>
            <div className="footer__contact">
              {/* EDITABLE: Replace contact details */}
              <a href="https://wa.me/48000000000" className="footer__contact-item" target="_blank" rel="noopener noreferrer">
                <span>💬</span> WhatsApp: +48 000 000 000
              </a>
              <a href="tel:+48000000000" className="footer__contact-item">
                <span>📞</span> +48 000 000 000
              </a>
              <a href="mailto:hello@voltride.pl" className="footer__contact-item">
                <span>📧</span> hello@voltride.pl
              </a>
              <div className="footer__contact-item">
                <span>📍</span> Poland
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="footer__col">
            <h3 className="footer__col-title">Hours</h3>
            <div className="footer__hours">
              <div className="footer__hours-row">
                <span>Monday – Friday</span>
                <span>8:00 – 20:00</span>
              </div>
              <div className="footer__hours-row">
                <span>Saturday – Sunday</span>
                <span>9:00 – 18:00</span>
              </div>
              <div className="footer__hours-badge">
                <span className="footer__hours-dot" />
                Available on WhatsApp
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {currentYear} VoltRide. All rights reserved.
            {/* EDITABLE: Update business name */}
          </p>
          <div className="footer__badges">
            <span className="footer__badge">🇵🇱 Poland</span>
            <span className="footer__badge">⚡ Electric</span>
            <span className="footer__badge">⭐ 5.0 Rated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
