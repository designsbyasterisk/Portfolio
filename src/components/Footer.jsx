import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ prevProject, nextProject, className = '', style = {} }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`no-print project-site-footer ${className}`.trim()} style={{ backgroundColor: '#ffffff', borderTop: '1px solid rgba(10, 17, 40, 0.08)', padding: '24px 0', ...style }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
        <span className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', letterSpacing: '0.05em' }}>
          © {currentYear} SHREYA KULKARNI. ALL RIGHTS RESERVED.
        </span>

        {prevProject || nextProject ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {prevProject && (
              <Link to={prevProject.to} className="font-display" style={{ fontSize: '0.82rem', fontWeight: 500, color: '#0a1128', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1, display: 'inline-flex', alignItems: 'center', transform: 'translateY(1.5px)' }}>
                ← {prevProject.label}
              </Link>
            )}
            {prevProject && nextProject && (
              <span className="font-display" style={{ fontSize: '0.82rem', fontWeight: 500, color: '#0a1128', opacity: 0.3, letterSpacing: '0.05em', lineHeight: 1, display: 'inline-flex', alignItems: 'center', transform: 'translateY(1.5px)' }}>|</span>
            )}
            {nextProject && (
              <Link to={nextProject.to} className="font-display" style={{ fontSize: '0.82rem', fontWeight: 500, color: '#0a1128', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1, display: 'inline-flex', alignItems: 'center', transform: 'translateY(1.5px)' }}>
                {nextProject.label} →
              </Link>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <a href="mailto:designsbyasterisk@gmail.com" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '500' }}>
              EMAIL
            </a>
            <a href="https://linkedin.com/in/shreyakulkarni01" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '500' }}>
              LINKEDIN
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
