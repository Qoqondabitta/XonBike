import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './WhyUs.css';

const WhyUs = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.05 });

  const reasons = t('whyus.reasons');

  return (
    <section className="whyus" id="why-us" aria-label="Why choose us">
      <div className="container">
        <div className="whyus__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('whyus.tag')}</span>
          <h2 className="section-title">
            {t('whyus.title')} <span className="accent-text">{t('whyus.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('whyus.subtitle')}</p>
        </div>

        <div className="whyus__grid stagger fade-up" ref={gridRef}>
          {Array.isArray(reasons) && reasons.map((reason) => (
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
