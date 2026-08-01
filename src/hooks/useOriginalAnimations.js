import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initHomeAnimations } from '../animations/main.js';
import { initCursorAnimations } from '../animations/cursor.js';
import { initProjectDetailAnimations, resizeIframes } from '../animations/projectDetail.js';

gsap.registerPlugin(ScrollTrigger);

export default function useOriginalAnimations(pathname) {
  const ctxRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    ScrollTrigger.clearScrollMemory();
  }, [pathname]);

  useEffect(() => {
    // Wait for a tick so DOM nodes from route change are fully mounted
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
      // Revert previous context
      if (ctxRef.current) {
        ctxRef.current.revert();
      }

      ctxRef.current = gsap.context(() => {
        // Clean up any existing cursor bubbles first.
        document.querySelectorAll('.cursor-playful, .cursor-trail').forEach(el => el.remove());
        initCursorAnimations(gsap);

        // Reset body inline styles and classes so theme transitions start from clean baseline
        document.body.classList.remove("dark-theme");
        document.body.style.backgroundColor = '';
        document.body.style.color = '';

        // Run main animations if page contains horizontal scroll or reveal sections
        if (document.querySelector('.horizontal-scroll-container') || document.querySelector('.horizontal-scroll-wrapper')) {
           initHomeAnimations(gsap, ScrollTrigger);
           ScrollTrigger.refresh();
           setTimeout(() => ScrollTrigger.refresh(), 250);
        }

        // Run project detail animations if page contains story chapters, deck pins, or project hero
        if (document.querySelector('.story-chapter') || document.querySelector('.chapter-hero') || document.querySelector('.chapter-deck-pin')) {
           initProjectDetailAnimations(gsap, ScrollTrigger);
           ScrollTrigger.refresh();
           setTimeout(() => {
              resizeIframes();
              ScrollTrigger.refresh();
           }, 100);
           setTimeout(() => {
              resizeIframes();
              ScrollTrigger.refresh();
           }, 350);
           setTimeout(() => {
              resizeIframes();
              ScrollTrigger.refresh();
           }, 800);
        }
      });

      const handleResize = () => {
        resizeIframes();
      };
      window.addEventListener('resize', handleResize);

      // Robust auto-hide floating header on idle delay and reappear on scroll/scrub
      let headerHideTimeout = null;

      window.triggerHeaderShow = () => {
        const header = document.querySelector('header.floating-header');
        if (!header) return;

        // Reappear immediately when scrolling or scrubbing
        header.classList.remove('header-hidden');

        if (headerHideTimeout) {
          clearTimeout(headerHideTimeout);
        }

        // Hide after 2.5s of idle if not scrolled to the very top
        headerHideTimeout = setTimeout(() => {
          const currentY = window.scrollY || document.documentElement.scrollTop || 0;
          if (currentY > 30) {
            header.classList.add('header-hidden');
          }
        }, 2500);
      };

      const handleScrollOrMove = (e) => {
        // If mouse is near the top 70px of viewport, keep header visible
        if (e && e.type === 'mousemove') {
          if (e.clientY < 70) {
            const header = document.querySelector('header.floating-header');
            if (header) header.classList.remove('header-hidden');
            if (headerHideTimeout) clearTimeout(headerHideTimeout);
            return;
          }
        }
        if (window.triggerHeaderShow) {
          window.triggerHeaderShow();
        }
      };

      window.addEventListener('scroll', handleScrollOrMove, { passive: true });
      window.addEventListener('wheel', handleScrollOrMove, { passive: true });
      window.addEventListener('touchmove', handleScrollOrMove, { passive: true });
      window.addEventListener('mousemove', handleScrollOrMove, { passive: true });

      // Initial trigger to start idle countdown if user lands scrolled down
      window.triggerHeaderShow();

      // Save cleanup function
      window._cleanHeaderScroll = () => {
        if (headerHideTimeout) clearTimeout(headerHideTimeout);
        window.removeEventListener('scroll', handleScrollOrMove);
        window.removeEventListener('wheel', handleScrollOrMove);
        window.removeEventListener('touchmove', handleScrollOrMove);
        window.removeEventListener('mousemove', handleScrollOrMove);
        window.removeEventListener('resize', handleResize);
      };
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (window._cleanHeaderScroll) {
        window._cleanHeaderScroll();
      }
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
    };
  }, [pathname]);
}
