import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { useMagnetic } from '../hooks/useMagnetic';
import NotFound from './NotFound';

export default function ProjectDetail() {
  useMagnetic('.magnetic');
  const { projectId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const project = projectsData.find((p) => p.id === projectId || p.slug === projectId);

  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="container" style={{ paddingTop: '130px', paddingBottom: 'var(--space-xl)' }}>
      {/* Back to Works Link */}
      <div style={{ marginBottom: 'var(--space-md)' }}>
        <Link to="/#projects" className="mono case-study-link" style={{ fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          ← BACK TO FEATURED WORKS
        </Link>
      </div>

      {/* Case Study Header Card */}
      <div className="bento-card" style={{ padding: 'var(--space-xl) var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
        <div className="label-pill" style={{ marginBottom: 'var(--space-sm)', backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)' }}>
          {project.badge}
        </div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', marginBottom: 'var(--space-xs)' }}>
          {project.title}
        </h1>
        <p className="text-lead" style={{ fontSize: '1.25rem', color: 'var(--accent-text)', marginBottom: 'var(--space-md)' }}>
          {project.subtitle}
        </p>

        {/* Overview */}
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '800px', marginBottom: 'var(--space-md)' }}>
          {project.overview}
        </p>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(10,17,40,0.08)' }}>
          {project.stats.map((stat, idx) => (
            <div key={idx}>
              <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-text)', fontWeight: 700 }}>
                {stat.label}
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', marginTop: '2px' }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Media Showcase */}
      <div className="bento-card" style={{ padding: 0, overflow: 'hidden', height: '480px', marginBottom: 'var(--space-lg)', position: 'relative' }}>
        <img
          src={project.heroImage}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
          onClick={() => setSelectedImage(project.heroImage)}
        />
      </div>

      {/* Problem & Solution Bento Grid */}
      <div className="bento-grid" style={{ marginBottom: 'var(--space-lg)' }}>
        <div className="bento-card col-6" style={{ padding: 'var(--space-lg)' }}>
          <h2 className="font-display" style={{ fontSize: '1.3rem', color: 'var(--color-tangerine)' }}>
            The Problem
          </h2>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.6 }}>{project.problemStatement}</p>
        </div>

        <div className="bento-card col-6" style={{ padding: 'var(--space-lg)' }}>
          <h2 className="font-display" style={{ fontSize: '1.3rem', color: 'var(--color-blue)' }}>
            The Solution
          </h2>
          <p style={{ fontSize: '0.98rem', lineHeight: 1.6 }}>{project.solution}</p>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bento-card" style={{ padding: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
        <h2 className="font-display" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)' }}>
          Key Features &amp; System Modules
        </h2>
        <div className="bento-grid">
          {project.keyFeatures.map((feature, idx) => (
            <div key={idx} className="bento-card col-6" style={{ backgroundColor: 'var(--bg-canvas)', border: '1px solid rgba(10,17,40,0.06)' }}>
              <h3 className="font-display" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: '0.92rem', marginBottom: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery / Deck Showcase */}
      {project.deckCards && project.deckCards.length > 0 && (
        <div className="bento-card" style={{ padding: 'var(--space-lg)', marginBottom: 'var(--space-lg)' }}>
          <h2 className="font-display" style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)' }}>
            Design Artefacts &amp; Prototypes
          </h2>
          <div className="bento-grid">
            {project.deckCards.map((card, idx) => (
              <div key={idx} className="bento-card col-6" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ height: '280px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setSelectedImage(card.image)}>
                  <img src={card.image} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 'var(--space-md)' }}>
                  <h3 className="font-display" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: 0 }}>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(10, 17, 40, 0.9)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
          />
        </div>
      )}

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-xl)' }}>
        <Link to="/" className="btn-pop btn-pop-secondary magnetic">
          ← ALL WORKS
        </Link>
        {project.demoLink && (
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-pop btn-pop-primary magnetic">
            LAUNCH DEMO 🚀
          </a>
        )}
      </div>
    </main>
  );
}
