import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GREETINGS = ["HI THERE!", "WELCOME!", "EXPLORE!"];

export default function HomeTemp() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Technical Blueprint Grid Background */}
      <div className="pattern-bg"></div>

      {/* Floating Header */}
      <header className="floating-header">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center', width: '32px', height: '32px', justifyContent: 'center' }}>
              <svg width="28" height="28" viewBox="0 0 1514 1287" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes kf_Frame_8_transform_0 {
                    0% { transform: translate(757px, 643.5px) rotate(6.283rad) translate(-757px, -643.5px); }
                    100% { transform: translate(757px, 643.5px) rotate(-6.283rad) translate(-757px, -643.5px); }
                  }
                  #Frame_8 {
                    transform-origin: 0 0;
                    animation: kf_Frame_8_transform_0 1.074199s linear infinite;
                  }
                ` }} />
                <g id="Frame_8">
                  <path d="M559.56 757.221C564.269 748.959 558.296 738.691 548.786 738.7L4.99175 739.189C3.07642 739.191 1.88359 737.112 2.85193 735.459L114.747 544.504C115.192 543.746 116.004 543.279 116.883 543.279L676.027 542.775C679.584 542.772 682.866 540.862 684.628 537.772L989.929 2.06869C990.369 1.29605 991.19 0.818692 992.079 0.817891L1208.75 0.622788C1210.64 0.621087 1211.83 2.64816 1210.92 4.30033L923.126 524.155C918.552 532.416 924.532 542.551 933.975 542.543L1508.13 542.026C1510.05 542.024 1511.24 544.122 1510.26 545.774L1396.16 736.732C1395.72 737.48 1394.91 737.938 1394.04 737.939L810.314 738.464C806.713 738.468 803.397 740.424 801.653 743.575L503.544 1282.07C503.108 1282.85 502.279 1283.34 501.378 1283.34L263.863 1283.56C261.961 1283.56 260.767 1281.5 261.709 1279.85L559.56 757.221Z" fill="#0A1128"></path>
                  <path d="M673.578 180.373C673.862 180.786 674.014 181.274 674.015 181.775L674.325 526.123C674.327 528.565 671.169 529.537 669.797 527.516L314.603 4.19047C313.487 2.54628 314.664 0.323334 316.651 0.321545L548.26 0.11299C549.076 0.112255 549.84 0.513721 550.303 1.18629L673.578 180.373Z" fill="#0A1128"></path>
                  <path d="M815.897 1106C815.613 1105.59 815.461 1105.1 815.46 1104.6L815.15 760.248C815.148 757.806 818.307 756.834 819.678 758.854L1174.87 1282.18C1175.99 1283.82 1174.81 1286.05 1172.82 1286.05L941.215 1286.26C940.399 1286.26 939.635 1285.86 939.172 1285.18L815.897 1106Z" fill="#0A1128"></path>
                </g>
              </svg>
            </Link>
            <span className="label-pill" style={{ fontSize: '0.65rem', padding: '4px 10px', margin: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '24px' }}>PORTFOLIO (SANDBOX DRAFT)</span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <Link to="/resume" className="font-display" style={{ fontSize: '0.9rem', margin: '0', display: 'inline-flex', alignItems: 'center' }}>ABOUT ME</Link>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main style={{ paddingTop: '130px', position: 'relative', overflow: 'hidden' }}>
        {/* Hero Section */}
        <section className="container reveal" style={{ minHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 'var(--space-lg)', position: 'relative' }}>
          <div className="bento-grid">
            <div className="bento-card col-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left', padding: 'clamp(32px, 6vw, 80px) clamp(24px, 5vw, 100px)', minHeight: '420px' }}>
              <h1 className="custom-entrance-h1" style={{ marginBottom: 'var(--space-sm)', position: 'relative', fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)' }}>
                <span id="hero-greeting" className="gsap-split-portfolio" style={{ color: 'var(--accent-text)', display: 'inline-block', transition: 'all 0.3s ease' }}>{GREETINGS[greetingIndex]}</span><br />
                <span className="nowrap-desktop"><span className="hero-title-main gsap-split-portfolio">I</span> <span className="hero-title-main gsap-split-portfolio">AM</span> <span className="hero-title-main gsap-split-portfolio">SHREYA</span> <span className="hero-title-main gsap-split-portfolio">KULKARNI</span></span>
              </h1>
              <p className="text-lead" style={{ maxWidth: '620px', marginBottom: 'var(--space-md)' }}>
                A Product Designer who applies product thinking to promote unconventional design solutions by pushing the boundaries of problem solving and articulating <span style={{ whiteSpace: 'nowrap' }}>compelling narratives.</span>
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn-pop btn-pop-primary magnetic">VIEW WORKS</a>
                <a href="mailto:designsbyasterisk@gmail.com" className="btn-pop btn-pop-secondary magnetic">SAY HELLO</a>
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
                  <div className="project-card-image-wrap">
                    <img src="/project-details/img/phone_mockup_1_44kb.webp" alt="Emberquit Mobile App Preview" />
                  </div>
                  <div className="project-card-body">
                    <span className="badge-category-pill">MOBILE APP</span>
                    <h3 className="project-card-title-mockup">EMBERQUIT</h3>
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
                  <div className="project-card-image-wrap">
                    <img src="/project-details/img/restease_44kb.webp" alt="Restease Command Center Preview" />
                  </div>
                  <div className="project-card-body">
                    <span className="badge-category-pill">MOBILE APP</span>
                    <h3 className="project-card-title-mockup">RESTEASE</h3>
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
                  <div className="project-card-image-wrap">
                    <img src="/project-details/img/f1_44kb.webp" alt="F1 Dashboard Preview" />
                  </div>
                  <div className="project-card-body">
                    <span className="badge-category-pill">WEBSITE</span>
                    <h3 className="project-card-title-mockup">F1 DASHBOARD</h3>
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
                  <div className="project-card-image-wrap">
                    <img src="/project-details/img/honee_44kb.webp" alt="Honee E-Commerce Preview" />
                  </div>
                  <div className="project-card-body">
                    <span className="badge-category-pill">WEBSITE</span>
                    <h3 className="project-card-title-mockup">HONÉE STOREFRONT</h3>
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
                <h2 className="font-display" style={{ marginBottom: 'var(--space-xs)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                  Have a project in mind?
                </h2>
                <p style={{ fontSize: '1.05rem', marginBottom: 0 }}>
                  I am currently open to consulting, contract work, and full-time Product Design roles. Let's make something playful and high-impact together.
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
