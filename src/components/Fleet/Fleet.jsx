import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Fleet.css';

/* EDITABLE: Update bike data here */
const BIKES = [
  {
    id: 1,
    name: 'VoltRide Pro X1',
    tag: 'Most Popular',
    /* EDITABLE: Replace image URL */
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    specs: [
      { icon: '🔋', label: 'Battery Range', value: '80 km' },
      { icon: '⚡', label: 'Max Speed',     value: '25 km/h' },
      { icon: '🏔️', label: 'Suspension',   value: 'Front Fork' },
      { icon: '🪑', label: 'Seat',          value: 'Ergonomic Comfort' },
      { icon: '📱', label: 'USB Charging',  value: 'Built-in Port' },
    ],
    price: 185,
  },
  {
    id: 2,
    name: 'VoltRide Urban S2',
    tag: 'City Cruiser',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80',
    specs: [
      { icon: '🔋', label: 'Battery Range', value: '65 km' },
      { icon: '⚡', label: 'Max Speed',     value: '25 km/h' },
      { icon: '🏔️', label: 'Suspension',   value: 'Dual Comfort' },
      { icon: '🪑', label: 'Seat',          value: 'Wide Cushion' },
      { icon: '📱', label: 'USB Charging',  value: 'Built-in Port' },
    ],
    price: 185,
  },
  {
    id: 3,
    name: 'VoltRide Trail T3',
    tag: 'Adventure Ready',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=800&q=80',
    specs: [
      { icon: '🔋', label: 'Battery Range', value: '70 km' },
      { icon: '⚡', label: 'Max Speed',     value: '25 km/h' },
      { icon: '🏔️', label: 'Suspension',   value: 'Full Suspension' },
      { icon: '🪑', label: 'Seat',          value: 'Sport Saddle' },
      { icon: '📱', label: 'USB Charging',  value: 'Built-in Port' },
    ],
    price: 185,
  },
];

const FleetCard = ({ bike, index }) => {
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
      {/* Tag */}
      <div className="fleet-card__tag">{bike.tag}</div>

      {/* Image */}
      <div className="fleet-card__image-wrap">
        <img
          src={bike.image}
          alt={`${bike.name} electric bike`}
          className="fleet-card__image"
          loading="lazy"
        />
        <div className="fleet-card__image-overlay" />
      </div>

      {/* Body */}
      <div className="fleet-card__body">
        <h3 className="fleet-card__name">{bike.name}</h3>

        <ul className="fleet-card__specs">
          {bike.specs.map(spec => (
            <li key={spec.label} className="fleet-card__spec">
              <span className="fleet-card__spec-icon">{spec.icon}</span>
              <span className="fleet-card__spec-label">{spec.label}</span>
              <span className="fleet-card__spec-value">{spec.value}</span>
            </li>
          ))}
        </ul>

        <div className="fleet-card__footer">
          <div className="fleet-card__price">
            <span className="fleet-card__price-amount">{bike.price} PLN</span>
            <span className="fleet-card__price-period">/week</span>
          </div>
          <button className="fleet-card__btn" onClick={scrollToBooking}>
            Book This Bike ⚡
          </button>
        </div>
      </div>
    </article>
  );
};

const Fleet = () => {
  const headerRef = useScrollAnimation();

  return (
    <section className="fleet" id="fleet" aria-label="Our fleet">
      <div className="container">
        <div className="fleet__header fade-up" ref={headerRef}>
          <span className="section-tag">🚴 Our Fleet</span>
          <h2 className="section-title">
            3 Premium <span className="accent-text">Electric Bikes</span>
          </h2>
          <p className="section-subtitle">
            Each bike is meticulously maintained, fully charged, and ready for your adventure across Poland.
          </p>
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
