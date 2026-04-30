import React, { useState, useEffect } from 'react';
import './Navbar.css';

/* EDITABLE: Update business name here */
const BUSINESS_NAME = { prefix: 'VOLT', suffix: 'RIDE' };

const NAV_LINKS = [
  { label: 'Home',    id: 'hero' },
  { label: 'Bikes',   id: 'fleet' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Reviews', id: 'reviews' },
  { label: 'FAQ',     id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">

        {/* Logo */}
        <button className="navbar__logo" onClick={() => scrollTo('hero')} aria-label="Go to top">
          <span className="navbar__logo-icon">⚡</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-brand">{BUSINESS_NAME.prefix}</span>{BUSINESS_NAME.suffix}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <button className="navbar__link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="navbar__actions">
          <button className="navbar__cta" onClick={() => scrollTo('booking')}>
            ⚡ Book Now
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ label, id }) => (
          <button key={id} className="navbar__mobile-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
        <button className="navbar__mobile-cta" onClick={() => scrollTo('booking')}>
          ⚡ Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
