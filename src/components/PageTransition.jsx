import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useOriginalAnimations from '../hooks/useOriginalAnimations';

export default function PageTransition({ children }) {
  const location = useLocation();

  // Re-trigger GSAP scroll triggers & animations on route change
  useOriginalAnimations(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="page-transition-wrapper" key={location.pathname}>
      {children}
    </div>
  );
}
