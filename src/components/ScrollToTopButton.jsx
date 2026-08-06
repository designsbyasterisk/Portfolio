import React, { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${isVisible ? 'visible' : ''}`}
        aria-label="Scroll back to top"
      >
        <span className="scroll-to-top-arrow">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </span>
        <span className="scroll-to-top-text">BACK TO TOP</span>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        .scroll-to-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          height: 48px;
          width: 48px;
          border-radius: 50px;
          background-color: var(--bg-card);
          color: var(--text-main);
          border: 1px solid var(--bento-border);
          box-shadow: 0 8px 30px rgba(10, 17, 40, 0.08);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          z-index: 99;
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px) scale(0.9);
          transition: 
            opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.3s ease,
            border-color 0.3s ease;
          overflow: hidden;
          padding: 0;
          box-sizing: border-box;
        }

        .scroll-to-top-btn.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0) scale(1);
        }

        .scroll-to-top-arrow {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-to-top-text {
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-main);
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-8px);
          transition: 
            opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Hover Expansion Animation */
        @media (hover: hover) {
          .scroll-to-top-btn:hover {
            width: 154px;
            background-color: var(--accent);
            color: var(--accent-contrast, #ffffff);
            border-color: var(--accent);
            box-shadow: 0 10px 30px var(--accent-glow, rgba(42, 101, 212, 0.15));
          }

          .scroll-to-top-btn:hover .scroll-to-top-arrow {
            transform: translateY(-2px);
            color: var(--accent-contrast, #ffffff);
          }

          .scroll-to-top-btn:hover .scroll-to-top-text {
            opacity: 1;
            transform: translateX(0);
            color: var(--accent-contrast, #ffffff);
          }
        }

        /* Mobile specific positioning overrides */
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 16px;
            right: 16px;
            height: 44px;
            width: 44px;
          }
          .scroll-to-top-arrow {
            width: 42px;
            height: 42px;
          }
        }
      ` }} />
    </>
  );
}
