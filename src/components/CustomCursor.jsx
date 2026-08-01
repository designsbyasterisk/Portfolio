import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const bubbleRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const bubble = bubbleRef.current;
    const trail = trailRef.current;

    if (!bubble || !trail) return;

    gsap.set([bubble, trail], { opacity: 0, xPercent: -50, yPercent: -50 });

    const xToBubble = gsap.quickTo(bubble, "x", { duration: 0.15, ease: "power2.out" });
    const yToBubble = gsap.quickTo(bubble, "y", { duration: 0.15, ease: "power2.out" });

    const xToTrail = gsap.quickTo(trail, "x", { duration: 0.45, ease: "power3.out" });
    const yToTrail = gsap.quickTo(trail, "y", { duration: 0.45, ease: "power3.out" });

    let isVisible = false;

    const handleMouseMove = (e) => {
      if (!isVisible) {
        gsap.to([bubble, trail], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xToBubble(e.clientX);
      yToBubble(e.clientY);
      xToTrail(e.clientX);
      yToTrail(e.clientY);
    };

    const handleMouseLeave = () => {
      gsap.to([bubble, trail], { opacity: 0, duration: 0.3 });
      isVisible = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const bindHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, .btn-pop, .pill-tag, .bento-card, .theme-picker-dot');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          gsap.to(bubble, { scale: 1.4, duration: 0.25, ease: "power2.out" });
          gsap.to(trail, { scale: 0, duration: 0.2, ease: "power2.in" });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(bubble, { scale: 1, duration: 0.25, ease: "power2.out" });
          gsap.to(trail, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
      });
    };

    bindHoverEvents();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div ref={bubbleRef} className="cursor-playful" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
