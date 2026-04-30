import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Booking.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  startDate: '',
  duration: '1',
  bike: '',
  pickupTime: '',
  message: '',
};

/* EDITABLE: Update bike names to match your fleet */
const BIKE_OPTIONS = [
  { value: '',         label: 'Select a bike...' },
  { value: 'ProX1',   label: 'VoltRide Pro X1' },
  { value: 'UrbanS2', label: 'VoltRide Urban S2' },
  { value: 'TrailT3', label: 'VoltRide Trail T3' },
  { value: 'any',     label: 'Any available bike' },
];

const DURATION_OPTIONS = [
  { value: '1', label: '1 Day — 185 PLN' },
  { value: '3', label: '3 Days — 520 PLN' },
  { value: '7', label: '7 Days — 1,150 PLN' },
  { value: 'custom', label: 'Custom duration' },
];

const Booking = () => {
  const [form,        setForm]        = useState(INITIAL_FORM);
  const [errors,      setErrors]      = useState({});
  const [submitting,  setSubmitting]  = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const headerRef = useScrollAnimation();
  const formRef   = useScrollAnimation({ threshold: 0.05 });

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim())      e.name      = 'Full name is required';
    if (!form.phone.trim())     e.phone     = 'Phone / WhatsApp is required';
    if (!form.email.trim())     e.email     = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.startDate)        e.startDate = 'Start date is required';
    if (!form.bike)             e.bike      = 'Please select a bike';
    if (!form.pickupTime)       e.pickupTime = 'Pickup time is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setSubmitting(true);
    // Simulate API call — replace with real submission logic
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setForm(INITIAL_FORM);
      setErrors({});
    }, 1400);
  };

  const getTodayMin = () => today;

  return (
    <section className="booking" id="booking" aria-label="Book your e-bike">
      {/* Success Modal */}
      {showSuccess && (
        <div className="booking-modal" role="dialog" aria-modal="true" aria-label="Booking confirmation">
          <div className="booking-modal__backdrop" onClick={() => setShowSuccess(false)} />
          <div className="booking-modal__box">
            <div className="booking-modal__icon">✅</div>
            <h3 className="booking-modal__title">Booking Received!</h3>
            <p className="booking-modal__text">
              Thank you! We will contact you shortly via WhatsApp or email to confirm your reservation.
            </p>
            <div className="booking-modal__sub">
              Expected response: within 30 minutes
            </div>
            <button className="booking-modal__btn" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="booking__inner">
          {/* Left — copy */}
          <div className="booking__left fade-up" ref={headerRef}>
            <span className="section-tag">📋 Book Now</span>
            <h2 className="section-title">
              Reserve Your <span className="accent-text">E-Bike</span>
            </h2>
            <p className="section-subtitle">
              Fill in the form and we'll confirm your booking within 30 minutes via WhatsApp or email.
            </p>

            <div className="booking__perks">
              {[
                { icon: '⚡', text: 'Instant confirmation' },
                { icon: '🔒', text: 'No deposit required' },
                { icon: '🪖', text: 'Helmet included free' },
                { icon: '🔋', text: 'Charger included free' },
                { icon: '💬', text: 'WhatsApp support' },
              ].map(p => (
                <div className="booking__perk" key={p.text}>
                  <span className="booking__perk-icon">{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            className="booking__form fade-up"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Rental booking form"
          >
            <div className="booking__form-grid">
              {/* Full Name */}
              <div className={`booking__field${errors.name ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="booking__input"
                  placeholder="Jan Kowalski"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && <span className="booking__error">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className={`booking__field${errors.phone ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="phone">Phone / WhatsApp *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="booking__input"
                  placeholder="+48 123 456 789"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && <span className="booking__error">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className={`booking__field booking__field--full${errors.email ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="booking__input"
                  placeholder="jan@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && <span className="booking__error">{errors.email}</span>}
              </div>

              {/* Start Date */}
              <div className={`booking__field${errors.startDate ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="startDate">Start Date *</label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className="booking__input"
                  min={getTodayMin()}
                  value={form.startDate}
                  onChange={handleChange}
                />
                {errors.startDate && <span className="booking__error">{errors.startDate}</span>}
              </div>

              {/* Duration */}
              <div className="booking__field">
                <label className="booking__label" htmlFor="duration">Rental Duration *</label>
                <select
                  id="duration"
                  name="duration"
                  className="booking__input booking__select"
                  value={form.duration}
                  onChange={handleChange}
                >
                  {DURATION_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Bike */}
              <div className={`booking__field${errors.bike ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="bike">Select Bike *</label>
                <select
                  id="bike"
                  name="bike"
                  className="booking__input booking__select"
                  value={form.bike}
                  onChange={handleChange}
                >
                  {BIKE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.bike && <span className="booking__error">{errors.bike}</span>}
              </div>

              {/* Pickup time */}
              <div className={`booking__field${errors.pickupTime ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="pickupTime">Pickup Time *</label>
                <input
                  id="pickupTime"
                  name="pickupTime"
                  type="time"
                  className="booking__input"
                  value={form.pickupTime}
                  onChange={handleChange}
                />
                {errors.pickupTime && <span className="booking__error">{errors.pickupTime}</span>}
              </div>

              {/* Message */}
              <div className="booking__field booking__field--full">
                <label className="booking__label" htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="booking__input booking__textarea"
                  placeholder="Any special requests, pickup location details, or questions..."
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>

            <button type="submit" className="booking__submit" disabled={submitting}>
              {submitting ? (
                <><span className="booking__spinner" /> Processing...</>
              ) : (
                <>⚡ Reserve My E-Bike</>
              )}
            </button>

            <p className="booking__privacy">
              🔒 Your details are private and will never be shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
