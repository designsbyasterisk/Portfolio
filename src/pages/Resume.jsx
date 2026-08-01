import React from 'react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resumeData';
import { useMagnetic } from '../hooks/useMagnetic';
import '../styles/resume.css';

export default function Resume() {
  useMagnetic('.magnetic');

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="container" style={{ paddingTop: '130px', maxWidth: '1200px' }}>
      {/* Header Panel */}
      <section className="resume-header bento-card" style={{ padding: 'var(--space-lg)', position: 'relative', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <div>
            <h1 className="font-display" style={{ marginBottom: '4px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
              {resumeData.header.name}
            </h1>
            <p className="font-display" style={{ color: 'var(--accent-text)', fontSize: '1.25rem', fontWeight: 600, marginBottom: 0 }}>
              {resumeData.header.role}
            </p>
          </div>
          <a
            href={resumeData.header.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pop btn-pop-primary magnetic no-print"
            style={{ boxShadow: '0 10px 30px var(--accent-glow)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            DOWNLOAD PDF
          </a>
        </div>
      </section>

      {/* Main Resume Grid */}
      <div className="resume-layout-grid">
        {/* Left Column: Profile Photo, Details & Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {/* Profile Photo */}
          <div className="profile-photo-container no-print" style={{ position: 'relative' }}>
            <div className="bento-card" style={{ padding: 0, overflow: 'hidden', borderRadius: 'var(--bento-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '340px' }}>
              <img src={resumeData.header.avatar} alt={resumeData.header.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>

          {/* About & Contact Card */}
          <div className="bento-card" style={{ padding: 'var(--space-lg) 20px' }}>
            <h2 className="resume-section-title font-display">About Me</h2>
            <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-md)' }}>
              {resumeData.about}
            </p>

            <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px' }}>
              My Details
            </h3>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-icon-wrapper">📍</span>
                <span>{resumeData.header.location}</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon-wrapper">🎓</span>
                <span>{resumeData.header.education}</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon-wrapper">📞</span>
                <span>{resumeData.header.phone}</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon-wrapper">✉️</span>
                <a href={`mailto:${resumeData.header.email}`}>{resumeData.header.email}</a>
              </li>
              <li className="contact-item">
                <span className="contact-icon-wrapper">🔗</span>
                <a href={resumeData.header.linkedin} target="_blank" rel="noopener noreferrer">
                  {resumeData.header.linkedinHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Skills & Software */}
          <div className="bento-card" style={{ padding: 'var(--space-lg) 20px' }}>
            <h2 className="resume-section-title font-display" style={{ marginBottom: 'var(--space-xs)' }}>
              Skills &amp; Software
            </h2>
            <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-xs)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px' }}>
              Core Skills
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-md)' }}>
              {resumeData.coreSkills.map((skill, idx) => (
                <span key={idx} className="pill-tag pill-blue">{skill}</span>
              ))}
            </div>

            <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-xs)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px' }}>
              Software &amp; Tools
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {resumeData.software.map((sw, idx) => (
                <span key={idx} className="pill-tag pill-orange">{sw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Work Experience & Education */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {/* Work Experience Card */}
          <div className="bento-card" style={{ padding: 'var(--space-lg)' }}>
            <h2 className="resume-section-title font-display">Work Experience</h2>
            <div className="timeline-list">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-meta">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-date">{exp.period}</span>
                  </div>
                  <ul style={{ paddingLeft: '20px', marginTop: '8px', fontSize: '0.92rem' }}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ marginBottom: '4px', color: 'var(--text-sub)' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bento-card" style={{ padding: 'var(--space-lg)' }}>
            <h2 className="resume-section-title font-display">Education</h2>
            <div className="timeline-list">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker" />
                  <div className="timeline-role">{edu.degree}</div>
                  <div className="timeline-meta">
                    <span className="timeline-company">{edu.institution}</span>
                    <span className="timeline-date">{edu.period}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bento-card" style={{ padding: 'var(--space-lg)' }}>
            <h2 className="resume-section-title font-display">Honors &amp; Awards</h2>
            <ul style={{ paddingLeft: '20px', fontSize: '0.92rem' }}>
              {resumeData.awards.map((award, idx) => (
                <li key={idx} style={{ marginBottom: '8px', color: 'var(--text-sub)' }}>
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
