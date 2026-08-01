import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <Link to={`/project-details/${project.id}`} className="horizontal-project-card bento-card" style={{ textDecoration: 'none' }}>
      <div className="horizontal-project-media">
        <div className="project-thumb-container" style={{ padding: 0, margin: 0, overflow: 'hidden', width: '100%', height: '100%', borderRadius: 'inherit' }}>
          <img
            src={project.heroImage}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
      <div className="horizontal-project-info">
        <div>
          <span className="label-pill" style={{ marginBottom: '8px' }}>{project.badge}</span>
          <h3 className="font-display project-title" style={{ marginTop: '4px' }}>{project.title}</h3>
          <p className="project-desc">{project.overview}</p>
        </div>
        <div className="horizontal-project-footer">
          <div className="horizontal-project-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="horizontal-project-tag">{tag}</span>
            ))}
          </div>
          <span className="mono case-study-link">CASE STUDY →</span>
        </div>
      </div>
    </Link>
  );
}
