import React, { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Booking.css';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  platform: '',
  startDate: '',
  duration: '',
  message: '',
};

const Booking = () => {
  const { t } = useLang();
  const [form,        setForm]        = useState(INITIAL_FORM);
  const [errors,      setErrors]      = useState({});
  const [submitting,  setSubmitting]  = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const headerRef = useScrollAnimation();
  const formRef   = useScrollAnimation({ threshold: 0.05 });

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const e = {};
    if (!form.name.trim())     e.name     = t('booking.errors.name');
    if (!form.phone.trim())    e.phone    = t('booking.errors.phone');
    if (!form.email.trim())    e.email    = t('booking.errors.email');
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = t('booking.errors.emailInvalid');
    if (!form.platform)        e.platform = t('booking.errors.platform');
    if (!form.startDate)       e.startDate = t('booking.errors.startDate');
    if (!form.duration)        e.duration  = t('booking.errors.duration');
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
    setTimeout(() => {
      setSubmitting(false);
      setShowSuccess(true);
      setForm(INITIAL_FORM);
      setErrors({});
    }, 1400);
  };

  const PERKS = [
    { icon: '⚡', text: t('booking.perks.fastApproval') },
    { icon: '🔋', text: t('booking.perks.chargerIncluded') },
    { icon: '💬', text: t('booking.perks.whatsappSupport') },
    { icon: '🛠', text: t('booking.perks.maintainedBikes') },
    { icon: '🚴', text: t('booking.perks.courierReady') },
  ];

  const PLATFORM_OPTIONS = [
    { value: '',         label: t('booking.placeholders.selectPlatform') },
    { value: 'UberEats', label: t('booking.platforms.uberEats') },
    { value: 'Glovo',    label: t('booking.platforms.glovo') },
    { value: 'Wolt',     label: t('booking.platforms.wolt') },
    { value: 'Bolt',     label: t('booking.platforms.bolt') },
    { value: 'Other',    label: t('booking.platforms.other') },
  ];

  const DURATION_OPTIONS = [
    { value: '',      label: t('booking.placeholders.selectDuration') },
    { value: 'week1', label: t('booking.durations.week1') },
    { value: 'week2', label: t('booking.durations.week2') },
    { value: 'month1',label: t('booking.durations.month1') },
  ];

  return (
    <section className="booking" id="booking" aria-label="Book your e-bike">
      {/* Success Modal */}
      {showSuccess && (
        <div className="booking-modal" role="dialog" aria-modal="true" aria-label="Booking confirmation">
          <div className="booking-modal__backdrop" onClick={() => setShowSuccess(false)} />
          <div className="booking-modal__box">
            <div className="booking-modal__icon">✅</div>
            <h3 className="booking-modal__title">{t('booking.successTitle')}</h3>
            <p className="booking-modal__text">{t('booking.successText')}</p>
            <div className="booking-modal__sub">{t('booking.successSub')}</div>
            <button className="booking-modal__btn" onClick={() => setShowSuccess(false)}>
              {t('booking.successClose')}
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="booking__inner">
          {/* Left — copy */}
          <div className="booking__left fade-up" ref={headerRef}>
            <span className="section-tag">{t('booking.tag')}</span>
            <h2 className="section-title">
              {t('booking.title')} <span className="accent-text">{t('booking.titleAccent')}</span>
            </h2>
            <p className="section-subtitle">{t('booking.subtitle')}</p>

            <div className="booking__perks">
              {PERKS.map(p => (
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
                <label className="booking__label" htmlFor="name">{t('booking.labels.fullName')}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="booking__input"
                  placeholder={t('booking.placeholders.fullName')}
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && <span className="booking__error">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className={`booking__field${errors.phone ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="phone">{t('booking.labels.phone')}</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="booking__input"
                  placeholder={t('booking.placeholders.phone')}
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && <span className="booking__error">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className={`booking__field booking__field--full${errors.email ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="email">{t('booking.labels.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="booking__input"
                  placeholder={t('booking.placeholders.email')}
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
                {errors.email && <span className="booking__error">{errors.email}</span>}
              </div>

              {/* Delivery Platform */}
              <div className={`booking__field booking__field--full${errors.platform ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="platform">{t('booking.labels.platform')}</label>
                <select
                  id="platform"
                  name="platform"
                  className="booking__input booking__select"
                  value={form.platform}
                  onChange={handleChange}
                >
                  {PLATFORM_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.platform && <span className="booking__error">{errors.platform}</span>}
              </div>

              {/* Start Date */}
              <div className={`booking__field${errors.startDate ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="startDate">{t('booking.labels.startDate')}</label>
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className="booking__input"
                  min={today}
                  value={form.startDate}
                  onChange={handleChange}
                />
                {errors.startDate && <span className="booking__error">{errors.startDate}</span>}
              </div>

              {/* Duration */}
              <div className={`booking__field${errors.duration ? ' booking__field--error' : ''}`}>
                <label className="booking__label" htmlFor="duration">{t('booking.labels.duration')}</label>
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
                {errors.duration && <span className="booking__error">{errors.duration}</span>}
              </div>

              {/* Message */}
              <div className="booking__field booking__field--full">
                <label className="booking__label" htmlFor="message">{t('booking.labels.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  className="booking__input booking__textarea"
                  placeholder={t('booking.placeholders.message')}
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            </div>

            <button type="submit" className="booking__submit" disabled={submitting}>
              {submitting ? (
                <><span className="booking__spinner" /> {t('booking.submitting')}</>
              ) : (
                t('booking.submit')
              )}
            </button>

            <p className="booking__privacy">{t('booking.privacy')}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
