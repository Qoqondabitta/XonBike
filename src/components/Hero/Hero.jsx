import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Background */}
      <div className="hero__bg">
        {/* EDITABLE: Replace background-image URL in Hero.css with your own photo */}
        <div className="hero__overlay" />
      </div>

      {/* Floating particles */}
      <div className="hero__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span>🇵🇱</span>
          <span>Available in Poland</span>
        </div>

        <h1 className="hero__title">
          Rent Premium<br />
          <span className="hero__title-accent">E-Bikes</span> in Poland
        </h1>

        <p className="hero__subtitle">
          Explore the city faster, easier, and smarter with our
          high-quality electric bikes. Premium experience, every ride.
        </p>

        <div className="hero__actions">
          <button className="hero__btn-primary" onClick={() => scrollTo('booking')}>
            <span>⚡</span> Book Now
          </button>
          <button className="hero__btn-secondary" onClick={() => scrollTo('fleet')}>
            View Bikes <span>→</span>
          </button>
        </div>

        {/* Trust badges */}
        <div className="hero__trust">
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">⭐</span>
            <div>
              <div className="hero__trust-label">Top Rated</div>
              <div className="hero__trust-sub">5.0 Service</div>
            </div>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">⚡</span>
            <div>
              <div className="hero__trust-label">Fast Booking</div>
              <div className="hero__trust-sub">Under 2 min</div>
            </div>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">🔋</span>
            <div>
              <div className="hero__trust-label">Long Range</div>
              <div className="hero__trust-sub">Up to 80 km</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
