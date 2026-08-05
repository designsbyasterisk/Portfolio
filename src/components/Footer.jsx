import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ prevProject, nextProject, className = '', style = {} }) {
  const currentYear = new Date().getFullYear();
  const hasProjects = !!(prevProject || nextProject);

  return (
    <footer className={`no-print project-site-footer ${className}`.trim()} style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(10, 17, 40, 0.08)', padding: '24px 0', ...style }}>
      <div className={`container ${hasProjects ? 'has-projects-nav' : ''}`}>
        
        {/* Left Side: Previous Project */}
        <div className="footer-left">
          {prevProject ? (
            <Link to={prevProject.to} className="font-display footer-link-prev">
              ← {prevProject.label}
            </Link>
          ) : null}
        </div>

        {/* Center: Copyright Text */}
        <div className="footer-center">
          <span className="mono footer-copyright">
            © {currentYear} SHREYA KULKARNI. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Right Side: Next Project / Social Links */}
        <div className="footer-right">
          {nextProject ? (
            <Link to={nextProject.to} className="font-display footer-link-next">
              {nextProject.label} →
            </Link>
          ) : !hasProjects ? (
            <div className="footer-social-links" style={{ display: 'flex', gap: 'var(--space-md)' }}>
              <a href="mailto:designsbyasterisk@gmail.com" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '500' }}>
                EMAIL
              </a>
              <a href="https://linkedin.com/in/shreyakulkarni01" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '500' }}>
                LINKEDIN
              </a>
            </div>
          ) : null}
        </div>

      </div>
    </footer>
  );
}
