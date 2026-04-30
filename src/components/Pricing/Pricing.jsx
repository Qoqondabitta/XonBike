import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Pricing.css';

const PRICES = [185, 370, 740];
const HIGHLIGHTED = [false, true, false];

const Pricing = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.08 });
  const noteRef   = useScrollAnimation();

  const plans = t('pricing.plans');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="pricing" id="pricing" aria-label="Pricing plans">
      <div className="container">
        <div className="pricing__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('pricing.tag')}</span>
          <h2 className="section-title">
            {t('pricing.title')} <span className="accent-text">{t('pricing.titleAccent')}</span> {t('pricing.titleEnd')}
          </h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </div>

        <div className="pricing__grid stagger fade-up" ref={gridRef}>
          {Array.isArray(plans) && plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card${HIGHLIGHTED[i] ? ' pricing-card--featured' : ''}`}
              aria-label={`${plan.label} plan`}
            >
              {plan.badge && (
                <div className="pricing-card__badge">{plan.badge}</div>
              )}

              <div className="pricing-card__header">
                <div className="pricing-card__label">{plan.label}</div>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{PRICES[i].toLocaleString()}</span>
                  <span className="pricing-card__currency">PLN</span>
                </div>
                <div className="pricing-card__note">{plan.priceNote}</div>
              </div>

              <ul className="pricing-card__features">
                {Array.isArray(plan.features) && plan.features.map(f => (
                  <li key={f} className="pricing-card__feature">{f}</li>
                ))}
              </ul>

              <button
                className={`pricing-card__btn${HIGHLIGHTED[i] ? ' pricing-card__btn--featured' : ''}`}
                onClick={scrollToBooking}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="pricing__note fade-up" ref={noteRef}>
          {t('pricing.note')}
        </p>
      </div>
    </section>
  );
};

export default Pricing;
