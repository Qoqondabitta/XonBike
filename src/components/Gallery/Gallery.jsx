import React, { useState } from 'react';
import { useLang } from '../../i18n/LanguageContext';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Gallery.css';

const GALLERY_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80', alt: 'Premium electric bike on Poland road', span: 'wide' },
  { id: 2, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',    alt: 'Electric bike close-up',             span: 'normal' },
  { id: 3, src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80', alt: 'Cyclist on a scenic road in Poland',  span: 'normal' },
  { id: 4, src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', alt: 'Happy cyclist exploring the city',    span: 'normal' },
  { id: 5, src: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80', alt: 'Beautiful Poland city street',        span: 'wide' },
  { id: 6, src: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94946?w=800&q=80', alt: 'E-bike adventure trail',              span: 'normal' },
];

const Gallery = () => {
  const { t } = useLang();
  const [lightbox, setLightbox] = useState(null);
  const headerRef = useScrollAnimation();
  const gridRef   = useScrollAnimation({ threshold: 0.05 });

  const openLightbox  = (item) => setLightbox(item);
  const closeLightbox = () => setLightbox(null);

  return (
    <section className="gallery" id="gallery" aria-label="Photo gallery">
      <div className="container">
        <div className="gallery__header fade-up" ref={headerRef}>
          <span className="section-tag">{t('gallery.tag')}</span>
          <h2 className="section-title">
            {t('gallery.title')} <span className="accent-text">{t('gallery.titleAccent')}</span>
          </h2>
          <p className="section-subtitle">{t('gallery.subtitle')}</p>
        </div>

        <div className="gallery__grid stagger fade-up" ref={gridRef}>
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`gallery-item${item.span === 'wide' ? ' gallery-item--wide' : ''}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${item.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
            >
              <img src={item.src} alt={item.alt} loading="lazy" className="gallery-item__img" />
              <div className="gallery-item__overlay">
                <span className="gallery-item__zoom">⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <div className="gallery-lightbox__backdrop" />
          <button className="gallery-lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          <div className="gallery-lightbox__inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="gallery-lightbox__img" />
            <p className="gallery-lightbox__caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
