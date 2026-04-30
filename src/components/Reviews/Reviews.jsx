import React, { useState, useEffect, useCallback } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Reviews.css';

const REVIEWS = [
  {
    id: 1,
    name: 'Anna Wiśniewska',
    location: 'Kraków, Poland',
    avatar: 'AW',
    rating: 5,
    text: 'Amazing service! The bike was in perfect condition, fully charged, and the booking process took less than 5 minutes. Explored the whole city in a day. Absolutely worth every złoty!',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Marco Bianchi',
    location: 'Milan, Italy',
    avatar: 'MB',
    rating: 5,
    text: 'I was visiting Poland as a tourist and this was the best decision I made. The e-bike was top-quality and the owner responded instantly on WhatsApp. I\'ll definitely rent again next visit!',
    date: 'February 2025',
  },
  {
    id: 3,
    name: 'Tomasz Kowalski',
    location: 'Wrocław, Poland',
    avatar: 'TK',
    rating: 5,
    text: 'Very easy rental process and the bike performed flawlessly. Battery lasted the entire day without needing a charge. Perfect for exploring the city — much better than public transport.',
    date: 'January 2025',
  },
  {
    id: 4,
    name: 'Sophie Müller',
    location: 'Berlin, Germany',
    avatar: 'SM',
    rating: 5,
    text: 'Incredible experience! The bike was clean, fast, and comfortable. The owner even gave us local tips on the best scenic routes. Highly recommend to anyone visiting Poland!',
    date: 'April 2025',
  },
  {
    id: 5,
    name: 'Piotr Nowak',
    location: 'Warsaw, Poland',
    avatar: 'PN',
    rating: 5,
    text: 'Rented for 3 days and loved every minute. Great value for money, premium bike quality, and the customer support was exceptional. This is how bike rentals should be done!',
    date: 'March 2025',
  },
];

const StarRating = ({ count = 5 }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`review-star${i < count ? ' review-star--filled' : ''}`}>★</span>
    ))}
  </div>
);

const Reviews = () => {
  const [active,   setActive]   = useState(0);
  const [paused,   setPaused]   = useState(false);
  const headerRef  = useScrollAnimation();
  const contentRef = useScrollAnimation({ threshold: 0.08 });

  const goTo   = (idx) => setActive(idx);
  const goNext = useCallback(() => setActive(a => (a + 1) % REVIEWS.length), []);
  const goPrev = () => setActive(a => (a - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, 4500);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  const current = REVIEWS[active];

  return (
    <section className="reviews" id="reviews" aria-label="Customer reviews">
      <div className="container">
        <div className="reviews__header fade-up" ref={headerRef}>
          <span className="section-tag">⭐ Reviews</span>
          <h2 className="section-title">
            What Our <span className="accent-text">Customers Say</span>
          </h2>
          <div className="reviews__aggregate">
            <div className="reviews__aggregate-stars">
              {[...Array(5)].map((_, i) => <span key={i} className="review-star review-star--filled">★</span>)}
            </div>
            <span className="reviews__aggregate-score">5.0</span>
            <span className="reviews__aggregate-count">({REVIEWS.length} reviews)</span>
          </div>
        </div>

        <div
          className="reviews__slider fade-up"
          ref={contentRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main card */}
          <div className="reviews__card" key={active} aria-live="polite">
            <div className="reviews__card-top">
              <div className="reviews__avatar" aria-hidden="true">{current.avatar}</div>
              <div>
                <div className="reviews__name">{current.name}</div>
                <div className="reviews__location">📍 {current.location}</div>
              </div>
              <div className="reviews__google-badge">
                <span>G</span>
              </div>
            </div>

            <StarRating count={current.rating} />

            <blockquote className="reviews__text">
              "{current.text}"
            </blockquote>

            <div className="reviews__date">{current.date}</div>
          </div>

          {/* Controls */}
          <div className="reviews__controls">
            <button className="reviews__arrow" onClick={goPrev} aria-label="Previous review">‹</button>
            <div className="reviews__dots">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  className={`reviews__dot${i === active ? ' reviews__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="reviews__arrow" onClick={goNext} aria-label="Next review">›</button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="reviews__thumbs">
          {REVIEWS.map((r, i) => (
            <button
              key={r.id}
              className={`reviews__thumb${i === active ? ' reviews__thumb--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`View review from ${r.name}`}
            >
              <div className="reviews__thumb-avatar">{r.avatar}</div>
              <div className="reviews__thumb-name">{r.name.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
