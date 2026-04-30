import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Availability.css';

const Availability = () => {
  const { t } = useLang();

  const headerRef  = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.1 });
  const urgencyRef = useScrollAnimation();

  const TRUST_CARDS = [
    { icon: t('availability.card1Icon'), title: t('availability.card1Title') },
    { icon: t('availability.card2Icon'), title: t('availability.card2Title') },
    { icon: t('availability.card3Icon'), title: t('availability.card3Title') },
  ];

  return (
    <section className="availability" id="availability" aria-label="Bike availability">
      <div className="container">
        {/* Header */}
        <div className="availability__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('availability.tag')}</span>
          <h2 className="section-title">
            {t('availability.headline')}
          </h2>
          <p className="section-subtitle">
            {t('availability.subtitle')}
          </p>
        </div>

        {/* Trust cards */}
        <div className="availability__grid stagger fade-up" ref={contentRef}>
          {TRUST_CARDS.map((card) => (
            <div key={card.title} className="avail-card avail-card--trust">
              <div className="avail-card__icon">{card.icon}</div>
              <div className="avail-card__body">
                <div className="avail-card__name">{card.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="availability__urgency fade-up" ref={urgencyRef}>
          <span className="availability__urgency-icon">📅</span>
          <p>
            <strong>{t('availability.bannerStrong')}</strong>{' '}
            {t('availability.bannerSub')}
          </p>
          <button
            className="availability__urgency-btn"
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
          >
            {t('availability.bannerBtn')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Availability;
