import { useEffect } from 'react';
import gsap from 'gsap';

export function useMagnetic(selector = '.magnetic') {
  useEffect(() => {
    const magneticElements = document.querySelectorAll(selector);

    const handleMouseMove = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = (e) => {
      const el = e.currentTarget;
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: 'elastic.out(1.1, 0.45)'
      });
    };

    magneticElements.forEach((el) => {
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      magneticElements.forEach((el) => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [selector]);
}
