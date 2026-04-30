import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Pricing.css';

/* EDITABLE: Update pricing here */
const PLANS = [
  {
    id: 'day',
    label: '1 Week',
    price: 185,
    priceNote: 'per week',
    highlighted: false,
    features: [
      '✓ 1 premium e-bike',
      '✓ Additional Battery included',
      '✓ Charger included',
      '✓ Basic route advice',
      '✓ WhatsApp support',
    ],
    cta: 'Book 1 Day',
  },
  {
    id: 'three',
    label: '3 Days',
    price: 520,
    priceNote: 'total — save 35 PLN',
    highlighted: true,
    badge: 'Best Value',
    features: [
      '✓ 1 premium e-bike',
      '✓ Helmet included',
      '✓ Charger included',
      '✓ Route map & tips',
      '✓ Priority WhatsApp support',
    ],
    cta: 'Book 3 Days',
  },
  {
    id: 'week',
    label: '7 Days',
    price: 1150,
    priceNote: 'total — save 145 PLN',
    highlighted: false,
    features: [
      '✓ 1 premium e-bike',
      '✓ Helmet included',
      '✓ Charger included',
      '✓ City tour route map',
      '✓ VIP support line',
    ],
    cta: 'Book 7 Days',
  },
];

const Pricing = () => {
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.08 });
  const noteRef   = useScrollAnimation();

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <section className="pricing" id="pricing" aria-label="Pricing plans">
      <div className="container">
        <div className="pricing__header fade-up" ref={headerRef}>
          <span className="section-tag">💰 Pricing</span>
          <h2 className="section-title">
            Simple, <span className="accent-text">Transparent</span> Pricing
          </h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. Just premium bikes at honest prices.
          </p>
        </div>

        <div className="pricing__grid stagger fade-up" ref={gridRef}>
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card${plan.highlighted ? ' pricing-card--featured' : ''}`}
              aria-label={`${plan.label} plan`}
            >
              {plan.badge && (
                <div className="pricing-card__badge">{plan.badge}</div>
              )}

              <div className="pricing-card__header">
                <div className="pricing-card__label">{plan.label}</div>
                <div className="pricing-card__price">
                  <span className="pricing-card__amount">{plan.price.toLocaleString()}</span>
                  <span className="pricing-card__currency">PLN</span>
                </div>
                <div className="pricing-card__note">{plan.priceNote}</div>
              </div>

              <ul className="pricing-card__features">
                {plan.features.map(f => (
                  <li key={f} className="pricing-card__feature">{f}</li>
                ))}
              </ul>

              <button
                className={`pricing-card__btn${plan.highlighted ? ' pricing-card__btn--featured' : ''}`}
                onClick={scrollToBooking}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="pricing__note fade-up" ref={noteRef}>
          🪖 Helmet &amp; charger included in all plans &nbsp;·&nbsp;
          🔒 No deposit required &nbsp;·&nbsp;
          ⚡ Instant confirmation
        </p>
      </div>
    </section>
  );
};

export default Pricing;
