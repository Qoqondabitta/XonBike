import React from 'react';
import { useLang } from '../../i18n/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { t } = useLang();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>

      <div className="hero__particles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i + 1}`} />
        ))}
      </div>

      <div className="hero__content">
        <div className="hero__badge">
          <span>🇵🇱</span>
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="hero__title">
          {t('hero.titleLine1')}<br />
          <span className="hero__title-accent">{t('hero.titleAccent')}</span>
        </h1>

        <p className="hero__subtitle">{t('hero.subtitle')}</p>

        <div className="hero__actions">
          <button className="hero__btn-primary" onClick={() => scrollTo('booking')}>
            <span>⚡</span> {t('hero.btnPrimary')}
          </button>
          <button className="hero__btn-secondary" onClick={() => scrollTo('fleet')}>
            {t('hero.btnSecondary')} <span>→</span>
          </button>
        </div>

        <div className="hero__trust">
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">⭐</span>
            <div>
              <div className="hero__trust-label">{t('hero.trust1Label')}</div>
              <div className="hero__trust-sub">{t('hero.trust1Sub')}</div>
            </div>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">⚡</span>
            <div>
              <div className="hero__trust-label">{t('hero.trust2Label')}</div>
              <div className="hero__trust-sub">{t('hero.trust2Sub')}</div>
            </div>
          </div>
          <div className="hero__trust-divider" />
          <div className="hero__trust-badge">
            <span className="hero__trust-icon">🔋</span>
            <div>
              <div className="hero__trust-label">{t('hero.trust3Label')}</div>
              <div className="hero__trust-sub">{t('hero.trust3Sub')}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>{t('hero.scroll')}</span>
      </div>
    </section>
  );
};

export default Hero;
