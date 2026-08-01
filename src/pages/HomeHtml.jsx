import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const GREETINGS = ["HI THERE!", "WELCOME!", "EXPLORE!"];

export default function HomeHtml() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="pattern-bg"></div>
      <Navbar />

      {/* Main Container */}
      <main style={{ paddingTop: '130px', position: 'relative', overflow: 'hidden' }}>
        {/* Hero Section */}
        <section className="container reveal" style={{ minHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 'var(--space-lg)', position: 'relative' }}>
          <div className="bento-grid">
            <div className="bento-card col-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', padding: 'clamp(32px, 6vw, 80px) clamp(24px, 5vw, 100px)', minHeight: '420px' }}>
              <h1 className="custom-entrance-h1" style={{ marginBottom: 'var(--space-sm)', position: 'relative', fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)' }}>
                <span id="hero-greeting" className="gsap-split-portfolio" style={{ color: 'var(--accent-text)', display: 'inline-block', transition: 'all 0.3s ease' }}>{GREETINGS[greetingIndex]}</span><br />
                <span style={{ whiteSpace: 'nowrap' }}><span className="hero-title-main gsap-split-portfolio">I</span> <span className="hero-title-main gsap-split-portfolio">AM</span> <span className="hero-title-main gsap-split-portfolio">SHREYA</span> <span className="hero-title-main gsap-split-portfolio">KULKARNI</span></span>
              </h1>
              <p className="text-lead" style={{ maxWidth: '620px', marginBottom: 'var(--space-md)' }}>
                A Product Designer who applies product thinking to promote unconventional design solutions by pushing the boundaries of problem solving and articulating <span style={{ whiteSpace: 'nowrap' }}>compelling narratives.</span>
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <Button href="#projects" variant="primary">VIEW WORKS</Button>
                <Button href="mailto:designsbyasterisk@gmail.com" variant="secondary">SAY HELLO</Button>
              </div>
            </div>
          </div>

          {/* Directional Navigation Arrow */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
            <button className="scroll-indicator-arrow" aria-label="Scroll to projects" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </button>
          </div>
        </section>

        {/* 01. FEATURED PROJECTS */}
        <section id="projects" style={{ marginBottom: 'var(--space-xl)' }}>
          <div className="horizontal-scroll-container">
            <div className="horizontal-progress-tracker">
              <div className="project-indicator-text">
                PROJECT <span id="current-project-num">01</span> / 04
              </div>
              <div className="project-indicator-bar-wrapper">
                <div id="project-progress-bar" style={{ width: '25%' }}></div>
              </div>
              <div id="current-project-desc">EMBERQUIT: Behavioral Nicotine Cessation Mobile App</div>
            </div>

            <div className="horizontal-scroll-wrapper">
              {/* Intro Panel */}
              <div className="horizontal-scroll-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="label-pill" style={{ marginBottom: '16px', backgroundColor: 'var(--color-blue, #2A65D4)', color: '#FFFFFF', textTransform: 'uppercase', fontWeight: '700', padding: '8px 20px', borderRadius: '8px', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  <span>PRODUCT &amp; SYSTEMS DESIGN</span>
                </div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', marginBottom: '20px', color: '#FFFFFF', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                  FEATURED PROJECTS
                </h2>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.25)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#FFFFFF', marginTop: '8px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Project Card 1: Emberquit */}
              <div className="horizontal-scroll-panel" data-project-num="01" data-project-desc="EMBERQUIT: Behavioral Nicotine Cessation Mobile App">
                <div className="bento-card horizontal-project-card project-card-emberquit">
                  <Link to="/project-details/emberquit" className="project-card-image-wrap" style={{ display: 'block', textDecoration: 'none' }}>
                    <img src="/project-details/img/phone_mockup_1_44kb.webp" alt="Emberquit Mobile App Preview" />
                  </Link>
                  <div className="project-card-body">
                    <span className="badge-category-pill">MOBILE APP</span>
                    <Link to="/project-details/emberquit" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="project-card-title-mockup">EMBERQUIT</h3>
                    </Link>
                    <p className="project-card-desc-mockup">
                      A behavior companion supporting individuals on their journey to quit smoking and vaping through positive reinforcement and logging.
                    </p>
                    <div className="project-card-footer-row">
                      <div className="tag-group-mockup">
                        <span className="tag-pill-custom">HABIT TRACKING</span>
                        <span className="tag-pill-custom">BEHAVIORAL DESIGN</span>
                      </div>
                      <Link to="/project-details/emberquit" className="case-study-link-custom">
                        CASE STUDY →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 2: Restease */}
              <div className="horizontal-scroll-panel" data-project-num="02" data-project-desc="RESTEASE: Disaster Rescue Command &amp; Coordination System">
                <div className="bento-card horizontal-project-card project-card-restease">
                  <Link to="/project-details/restease" className="project-card-image-wrap" style={{ display: 'block', textDecoration: 'none' }}>
                    <img src="/project-details/img/restease_44kb.webp" alt="Restease Command Center Preview" />
                  </Link>
                  <div className="project-card-body">
                    <span className="badge-category-pill">MOBILE APP</span>
                    <Link to="/project-details/restease" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="project-card-title-mockup">RESTEASE</h3>
                    </Link>
                    <p className="project-card-desc-mockup">
                      An offline-first emergency rescue command center and telemetry system for search and rescue teams during disaster operations.
                    </p>
                    <div className="project-card-footer-row">
                      <div className="tag-group-mockup">
                        <span className="tag-pill-custom">UX RESEARCH</span>
                        <span className="tag-pill-custom">SYSTEMS DESIGN</span>
                      </div>
                      <Link to="/project-details/restease" className="case-study-link-custom">
                        CASE STUDY →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 3: F1 Dashboard */}
              <div className="horizontal-scroll-panel" data-project-num="03" data-project-desc="F1 LIVE TELEMETRY: Real-Time Race Analytics Dashboard">
                <div className="bento-card horizontal-project-card project-card-f1">
                  <Link to="/project-details/f1_dashboard" className="project-card-image-wrap" style={{ display: 'block', textDecoration: 'none' }}>
                    <img src="/project-details/img/f1_44kb.webp" alt="F1 Dashboard Preview" />
                  </Link>
                  <div className="project-card-body">
                    <span className="badge-category-pill">WEBSITE</span>
                    <Link to="/project-details/f1_dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="project-card-title-mockup">F1 DASHBOARD</h3>
                    </Link>
                    <p className="project-card-desc-mockup">
                      Real-time motorsport telemetry dashboard featuring 3D Monaco track visualization, driver head-to-head battles, and cockpit dials.
                    </p>
                    <div className="project-card-footer-row">
                      <div className="tag-group-mockup">
                        <span className="tag-pill-custom">DATA VISUALISATION</span>
                        <span className="tag-pill-custom">INTERACTION DESIGN</span>
                      </div>
                      <Link to="/project-details/f1_dashboard" className="case-study-link-custom">
                        CASE STUDY →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Card 4: Honee */}
              <div className="horizontal-scroll-panel" data-project-num="04" data-project-desc="HONÉE: Artisanal Honey E-Commerce Experience">
                <div className="bento-card horizontal-project-card project-card-honee">
                  <Link to="/project-details/honee" className="project-card-image-wrap" style={{ display: 'block', textDecoration: 'none' }}>
                    <img src="/project-details/img/honee_44kb.webp" alt="Honee E-Commerce Preview" />
                  </Link>
                  <div className="project-card-body">
                    <span className="badge-category-pill">WEBSITE</span>
                    <Link to="/project-details/honee" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3 className="project-card-title-mockup">HONÉE STOREFRONT</h3>
                    </Link>
                    <p className="project-card-desc-mockup">
                      Luxury organic honey skincare storefront celebrating artisanal honey harvesting through interactive storytelling and rituals.
                    </p>
                    <div className="project-card-footer-row">
                      <div className="tag-group-mockup">
                        <span className="tag-pill-custom">BRANDING</span>
                        <span className="tag-pill-custom">E-COMMERCE UX</span>
                      </div>
                      <Link to="/project-details/honee" className="case-study-link-custom">
                        CASE STUDY →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 02: Work History */}
        <section id="experience-summary" className="container" style={{ marginBottom: 'var(--space-xl)' }}>
          <div className="bento-card" style={{ padding: 'clamp(32px, 5vw, 64px) clamp(20px, 4vw, 48px)', textAlign: 'center' }}>
            <p className="text-lead" style={{ maxWidth: '680px', margin: '0 auto var(--space-md) auto', lineHeight: 1.7 }}>
              As a Product Designer, I enjoy solving complex problems through systems thinking, research, and interaction design. My experience as the Founding Designer at The Karmhaus has strengthened my ability to build thoughtful products across both digital and physical touchpoints.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
              <span className="label-pill" style={{ fontSize: '0.88rem', textTransform: 'none', fontWeight: 600 }}>
                The Karmhaus (Founding Designer) &nbsp;&nbsp; September 2025 - Present
              </span>
            </div>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-md)' }}>
              <Link to="/resume" className="btn-pop btn-pop-primary magnetic" style={{ fontSize: '1.05rem', padding: '14px 28px' }}>
                VIEW DETAILED RESUME
              </Link>
            </div>
          </div>
        </section>

        {/* Section 03: CTA Say Hello */}
        <section className="container" style={{ marginBottom: 'var(--space-xl)' }}>
          <div className="bento-card cta-bento-card" style={{ padding: 'clamp(32px, 5vw, 64px) clamp(20px, 4vw, 48px)' }}>
            <div className="cta-grid">
              <div className="cta-content">
                <h2 className="font-display" style={{ marginBottom: 'var(--space-xs)', fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)', whiteSpace: 'nowrap' }}>
                  Have a project in mind?
                </h2>
                <p style={{ fontSize: '1.05rem', marginBottom: 0, maxWidth: '680px' }}>
                  I am currently open to consulting, contract work, and full-time Product Design roles. Let's make something playful and <span style={{ whiteSpace: 'nowrap' }}>high-impact together.</span>
                </p>
              </div>
              <div className="cta-action">
                <a href="mailto:designsbyasterisk@gmail.com" className="btn-pop btn-pop-primary magnetic" style={{ fontSize: '1.15rem', padding: '18px 36px' }}>
                  SAY HELLO
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
