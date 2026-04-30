import React, { useState, useEffect } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import './Navbar.css';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'pl', label: 'PL' },
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
];

const Navbar = () => {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: t('nav.home'),     id: 'hero' },
    { label: t('nav.bikes'),    id: 'fleet' },
    { label: t('nav.pricing'),  id: 'pricing' },
    { label: t('nav.reviews'),  id: 'reviews' },
    { label: t('nav.faq'),      id: 'faq' },
    { label: t('nav.contact'),  id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
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
            <span className="navbar__logo-brand">Xon</span>Bike
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

        {/* Desktop actions */}
        <div className="navbar__actions">
          {/* Language switcher */}
          <div className="navbar__lang" aria-label="Language selector">
            {LANGUAGES.map((l, i) => (
              <React.Fragment key={l.code}>
                {i > 0 && <span className="navbar__lang-sep">|</span>}
                <button
                  className={`navbar__lang-btn${lang === l.code ? ' navbar__lang-btn--active' : ''}`}
                  onClick={() => setLang(l.code)}
                  aria-label={`Switch to ${l.label}`}
                  aria-pressed={lang === l.code}
                >
                  {l.label}
                </button>
              </React.Fragment>
            ))}
          </div>

          <button className="navbar__cta" onClick={() => scrollTo('booking')}>
            {t('nav.bookNow')}
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

        {/* Mobile language switcher */}
        <div className="navbar__mobile-lang">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              className={`navbar__mobile-lang-btn${lang === l.code ? ' navbar__mobile-lang-btn--active' : ''}`}
              onClick={() => { setLang(l.code); setMenuOpen(false); }}
              aria-pressed={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button className="navbar__mobile-cta" onClick={() => scrollTo('booking')}>
          {t('nav.bookNow')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
