import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Fleet.css';

const BIKES = [
  {
    id: 1,
    name: 'XonBike Pro X1',
    tagKey: 'mostPopular',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    specKeys: ['batteryRange', 'maxSpeed', 'suspension', 'seat', 'usbCharging'],
    specIcons: ['🔋', '⚡', '🏔️', '🪑', '📱'],
    specValues: ['80 km', '25 km/h', 'Front Fork', 'Ergonomic Comfort', 'Built-in Port'],
    price: 185,
  },
  {
    id: 2,
    name: 'XonBike Urban S2',
    tagKey: 'cityCruiser',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    specKeys: ['batteryRange', 'maxSpeed', 'suspension', 'seat', 'usbCharging'],
    specIcons: ['🔋', '⚡', '🏔️', '🪑', '📱'],
    specValues: ['65 km', '25 km/h', 'Dual Comfort', 'Wide Cushion', 'Built-in Port'],
    price: 185,
  },
  {
    id: 3,
    name: 'XonBike Trail T3',
    tagKey: 'adventureReady',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=800&q=80',
    specKeys: ['batteryRange', 'maxSpeed', 'suspension', 'seat', 'usbCharging'],
    specIcons: ['🔋', '⚡', '🏔️', '🪑', '📱'],
    specValues: ['70 km', '25 km/h', 'Full Suspension', 'Sport Saddle', 'Built-in Port'],
    price: 185,
  },
];

const BIKE_TAGS = {
  mostPopular:   { en: 'Most Popular', pl: 'Najpopularniejszy', ru: 'Самый Популярный', uz: 'Eng Mashhur' },
  cityCruiser:   { en: 'City Cruiser',  pl: 'Miejski',          ru: 'Городской',         uz: 'Shahar Kreyser' },
  adventureReady:{ en: 'Courier Ready', pl: 'Kurierski',        ru: 'Для Курьеров',      uz: 'Kuryer Uchun' },
};

const FleetCard = ({ bike, index }) => {
  const { t, lang } = useLang();
  const ref = useScrollAnimation({ threshold: 0.08 });

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  return (
    <article
      className="fleet-card fade-up"
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={`${bike.name} e-bike`}
    >
      <div className="fleet-card__tag">{BIKE_TAGS[bike.tagKey]?.[lang] ?? BIKE_TAGS[bike.tagKey]?.en}</div>

      <div className="fleet-card__image-wrap">
        <img
          src={bike.image}
          alt={`${bike.name} electric bike`}
          className="fleet-card__image"
          loading="lazy"
        />
        <div className="fleet-card__image-overlay" />
      </div>

      <div className="fleet-card__body">
        <h3 className="fleet-card__name">{bike.name}</h3>

        <ul className="fleet-card__specs">
          {bike.specKeys.map((key, i) => (
            <li key={key} className="fleet-card__spec">
              <span className="fleet-card__spec-icon">{bike.specIcons[i]}</span>
              <span className="fleet-card__spec-label">{t(`fleet.specs.${key}`)}</span>
              <span className="fleet-card__spec-value">{bike.specValues[i]}</span>
            </li>
          ))}
        </ul>

        <div className="fleet-card__footer">
          <div className="fleet-card__price">
            <span className="fleet-card__price-amount">{bike.price} PLN</span>
            <span className="fleet-card__price-period">{t('fleet.perPeriod')}</span>
          </div>
          <button className="fleet-card__btn" onClick={scrollToBooking}>
            {t('fleet.bookBike')}
          </button>
        </div>
      </div>
    </article>
  );
};

const Fleet = () => {
  const { t } = useLang();
  const headerRef = useScrollAnimation();

  return (
    <section className="fleet" id="fleet" aria-label="Our fleet">
      <div className="container">
        <div className="fleet__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('fleet.tag')}</span>
          <h2 className="section-title">
            {t('fleet.title1')} <span className="accent-text">{t('fleet.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('fleet.subtitle')}</p>
        </div>

        <div className="fleet__grid">
          {BIKES.map((bike, i) => (
            <FleetCard key={bike.id} bike={bike} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
