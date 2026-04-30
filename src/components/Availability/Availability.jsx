import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Availability.css';

/* EDITABLE: Update bike availability here */
const INITIAL_BIKES = [
  { id: 1, name: 'VoltRide Pro X1',  available: true  },
  { id: 2, name: 'VoltRide Urban S2', available: true  },
  { id: 3, name: 'VoltRide Trail T3', available: false },
];

const Availability = () => {
  const [bikes, setBikes] = useState(INITIAL_BIKES);

  const toggleBike = (id) => {
    setBikes(prev =>
      prev.map(b => b.id === id ? { ...b, available: !b.available } : b)
    );
  };

  const availableCount = bikes.filter(b => b.available).length;

  const headerRef   = useScrollAnimation();
  const contentRef  = useScrollAnimation({ threshold: 0.1 });
  const urgencyRef  = useScrollAnimation();

  return (
    <section className="availability" id="availability" aria-label="Live availability">
      <div className="container">
        {/* Header */}
        <div className="availability__header fade-up" ref={headerRef}>
          <span className="section-tag">🟢 Live Status</span>
          <h2 className="section-title">
            Only <span className="accent-text">{availableCount} Premium E-Bike{availableCount !== 1 ? 's' : ''}</span> Available Today
          </h2>
          <p className="section-subtitle">
            We operate a boutique fleet of 3 curated electric bikes — each maintained to the highest standard.
          </p>
        </div>

        {/* Bike cards */}
        <div className="availability__grid stagger fade-up" ref={contentRef}>
          {bikes.map((bike) => (
            <div
              key={bike.id}
              className={`avail-card${bike.available ? ' avail-card--available' : ' avail-card--rented'}`}
            >
              <div className="avail-card__icon">
                {bike.available ? '⚡' : '🔒'}
              </div>
              <div className="avail-card__body">
                <div className="avail-card__name">{bike.name}</div>
                <div className={`avail-card__status${bike.available ? ' avail-card__status--green' : ' avail-card__status--red'}`}>
                  <span className="avail-card__dot" />
                  {bike.available ? 'Available' : 'Rented'}
                </div>
              </div>
              {/* Dev toggle — remove in production */}
              <button
                className="avail-card__toggle"
                onClick={() => toggleBike(bike.id)}
                title="Toggle availability (demo)"
                aria-label={`Toggle ${bike.name} availability`}
              >
                ⟳
              </button>
            </div>
          ))}
        </div>

        {/* Urgency banner */}
        <div className="availability__urgency fade-up" ref={urgencyRef}>
          <span className="availability__urgency-icon">⚠️</span>
          <p>
            <strong>Limited fleet — reserve early.</strong>{' '}
            Bikes sell out fast during peak season. Secure your ride now.
          </p>
          <button
            className="availability__urgency-btn"
            onClick={() => {
              const el = document.getElementById('booking');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
            }}
          >
            Reserve Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Availability;
