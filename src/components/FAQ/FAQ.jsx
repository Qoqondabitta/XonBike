import React, { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './FAQ.css';

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
    <button
      className="faq-item__question"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{faq.q}</span>
      <span className="faq-item__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
    </button>
    <div className="faq-item__answer-wrap" style={{ maxHeight: isOpen ? '400px' : '0' }}>
      <div className="faq-item__answer">{faq.a}</div>
    </div>
  </div>
);

const FAQ = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState(0);
  const headerRef = useScrollAnimation();
  const listRef   = useScrollAnimation({ threshold: 0.05 });
  const ctaRef    = useScrollAnimation();

  const faqs = t('faq.items');
  const toggle = (i) => setOpenIndex(prev => (prev === i ? -1 : i));

  return (
    <section className="faq" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="faq__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('faq.tag')}</span>
          <h2 className="section-title">
            {t('faq.title')} <span className="accent-text">{t('faq.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </div>

        <div className="faq__list fade-up" ref={listRef}>
          {Array.isArray(faqs) && faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        <div className="faq__cta fade-up" ref={ctaRef}>
          <p>{t('faq.stillHaveQuestions')}</p>
          <a
            href="https://wa.me/48000000000?text=Hello%2C%20I%20have%20a%20question%20about%20renting%20an%20e-bike."
            className="faq__cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('faq.askOnWhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
