import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="container" style={{ paddingTop: '160px', paddingBottom: 'var(--space-xl)', textAlign: 'center' }}>
      <div className="bento-card" style={{ padding: 'var(--space-xl) var(--space-lg)', maxWidth: '600px', margin: '0 auto' }}>
        <span className="mono" style={{ fontSize: '1rem', color: 'var(--accent-text)' }}>404 // PAGE NOT FOUND</span>
        <h1 className="font-display" style={{ fontSize: '3rem', margin: 'var(--space-sm) 0' }}>
          LOST IN SPACE?
        </h1>
        <p style={{ fontSize: '1.05rem', marginBottom: 'var(--space-md)' }}>
          The page or case study you were looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-pop btn-pop-primary magnetic">
          RETURN TO HOMEPAGE
        </Link>
      </div>
    </main>
  );
}
