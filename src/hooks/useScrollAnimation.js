import { useEffect, useRef } from 'react';

/**
 * Hook that adds a 'visible' class when the element enters the viewport.
 * Works with CSS classes: fade-up, fade-in, scale-in, slide-left, slide-right
 */
const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return ref;
};

export default useScrollAnimation;
