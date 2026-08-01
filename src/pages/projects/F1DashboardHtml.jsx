import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/project-detail.css';

export default function F1DashboardHtml() {
  useEffect(() => {
    // Apply brand theme to body for F1 Dashboard
    document.body.classList.add('theme-brand');
    document.body.style.setProperty('--brand-bg', '#ffffff');
    document.body.style.setProperty('--brand-text', '#09090b');
    document.body.style.setProperty('--brand-text-sub', '#52525b');
    document.body.style.setProperty('--brand-accent', '#e10600');
    document.body.style.setProperty('--accent', '#e10600');
    document.body.style.setProperty('--brand-card-bg', '#f4f4f5');
    document.body.style.setProperty('--brand-border', 'rgba(9, 9, 11, 0.08)');
    document.body.style.setProperty('--brand-grid-color', 'rgba(9, 9, 11, 0.05)');
    document.body.style.setProperty('--brand-sketch-fill', '#f4f4f5');
    document.body.style.setProperty('--brand-nav-bg', 'rgba(255, 255, 255, 0.85)');
    document.body.style.setProperty('--brand-nav-border', 'rgba(9, 9, 11, 0.08)');

    return () => {
      document.body.classList.remove('theme-brand');
      document.body.style.removeProperty('--brand-bg');
      document.body.style.removeProperty('--brand-text');
      document.body.style.removeProperty('--brand-text-sub');
      document.body.style.removeProperty('--brand-accent');
      document.body.style.removeProperty('--accent');
      document.body.style.removeProperty('--brand-card-bg');
      document.body.style.removeProperty('--brand-border');
      document.body.style.removeProperty('--brand-grid-color');
      document.body.style.removeProperty('--brand-sketch-fill');
      document.body.style.removeProperty('--brand-nav-bg');
      document.body.style.removeProperty('--brand-nav-border');
    };
  }, []);

  const scrollToNarrative = () => {
    const el = document.querySelector('.chapter-narrative');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleF1Fullscreen = async (e) => {
    e.preventDefault();
    const prototypeUrl = '/Projects/F1_Dashboard.html';
    
    // Check if user is on portrait / tablet / mobile viewport
    const isPortrait = window.matchMedia('(orientation: portrait)').matches || window.innerWidth < 1024;
    
    if (isPortrait) {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock('landscape');
        }
      } catch (err) {
        console.log('Landscape orientation lock on click:', err);
      }
    }
    
    window.open(prototypeUrl, '_blank', 'noreferrer');
  };

  return (
    <>
      {/* Grid blueprint background */}
      <div className="pattern-bg"></div>

      <Navbar />

      <main className="narrative-wrapper">

        {/* Chapter 1: The Hook (Hero) */}
        <section className="story-chapter chapter-hero">
          <div className="chapter-hero-bg" style={{ backgroundColor: 'rgba(225, 6, 0, 0.04)', pointerEvents: 'none' }}></div>
          <div className="container hero-content">
            <div className="hero-text-block">
              <span className="label-pill brand-accent-badge">CASE STUDY 03 //</span>
              <h1 className="gsap-split-header brand-hero-title">F1 TELEMETRY</h1>
              <p className="brand-hero-subtitle" style={{ maxWidth: '800px' }}>Formula 1 Interactive Telemetry &amp; Second-Screen Companion</p>
            </div>
            <div className="project-meta-bar">
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-val">Interactive Dashboard</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-val">5 Weeks</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
              <button className="scroll-indicator-arrow" aria-label="Scroll down" onClick={scrollToNarrative}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Chapter 2: Understanding F1 Telemetry */}
        <section className="story-chapter chapter-narrative">
          <div className="container narrative-grid">
            <div className="narrative-content-left">
              <div className="narrative-block">
                <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>01 / UNDERSTANDING TELEMETRY</span>
                <h2>Data Science at 300+ km/h</h2>
                <p>
                  Formula 1 is as much a data science competition as it is a physical sport. Every modern F1 car is equipped with <strong>over 300 physical sensors</strong> that collect and transmit data in real-time. This transmission from the moving car to the garage via radio waves is known as <strong>telemetry</strong>.
                </p>
                <p style={{ marginTop: '10px' }}>
                  This data streams driver inputs (throttle, brake, gear), car dynamics (speed, RPM, G-forces), and component health (tyre carcass temperatures, ERS state of charge) instantly.
                </p>
              </div>
              <div className="narrative-block" style={{ marginTop: 'var(--space-lg)' }}>
                <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>ROLE IN THE VIEWING EXPERIENCE</span>
                <h2>Deconstructing Driver Skill</h2>
                <p>
                  Today, telemetry has transitioned from a secretive engineering tool to a core component of how fans consume the sport. It allows viewers to deconstruct driver skill (comparing exit traction and late-braking thresholds), predict pit stop strategies by observing tyre degradation curves, and analyze lock-ups or mechanical incidents immediately.
                </p>
              </div>
            </div>
            <div className="narrative-content-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="brand-metric-card" style={{ width: '100%', padding: '0', overflow: 'hidden', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-md)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
                <img src="/Projects/F1 Dashboard/f1_race_action.jpg" alt="Formula 1 Racing Action" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Enhanced Fan Viewing Experience */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0', height: 'auto', display: 'block' }}>
          <div className="container">
            <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>02 / THE FAN VIEWING PARADIGM</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0' }}>Anatomy of a Race Moment</h2>
            <p style={{ color: 'var(--text-sub)', margin: '0 0 var(--space-lg) 0', fontSize: '0.95rem' }}>How telemetry data reveals the hidden physics of a Monaco GP battle that TV broadcasts miss.</p>
            
            <div className="compare-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', width: '100%', marginBottom: '24px' }}>
              {/* Left: TV Broadcast Card */}
              <div className="bento-card" style={{ margin: '0', backgroundColor: 'var(--brand-card-bg)', borderColor: 'var(--brand-border)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--space-md) var(--space-lg)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-text)', opacity: '0.85' }}>
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0' }}>Passive TV Broadcast</h3>
                  </div>
                  <div style={{ aspectRatio: '16/9', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-md)', overflow: 'hidden', position: 'relative' }}>
                    <img src="/Projects/F1 Dashboard/tv_broadcast_mockup.jpg" alt="TV Broadcast Feed" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ fontSize: '0.88rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 'bold', marginTop: '1px' }}>•</span>
                      <span><strong>Linear View:</strong> Displays only what the broadcast director chooses to show on screen. Midfield battles are completely bypassed.</span>
                    </li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 'bold', marginTop: '1px' }}>•</span>
                      <span><strong>Qualitative Commentary:</strong> Commentators speculate on tyre degradation, grip losses, or engine maps based on visual guesses.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Second-Screen Telemetry Card */}
              <div className="bento-card" style={{ margin: '0', backgroundColor: 'var(--brand-card-bg)', borderColor: 'rgba(225, 6, 0, 0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--space-md) var(--space-lg)', boxShadow: '0 10px 30px rgba(225, 6, 0, 0.02)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--space-md)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-accent)' }}>
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0' }}>Second-Screen Companion</h3>
                  </div>
                  <div style={{ aspectRatio: '16/9', border: '1px solid rgba(225, 6, 0, 0.15)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-md)', overflow: 'hidden', position: 'relative' }}>
                    <img src="/Projects/F1 Dashboard/dashboard_full.png" alt="Second-Screen Telemetry Dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <li style={{ fontSize: '0.88rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 'bold', marginTop: '1px' }}>•</span>
                      <span><strong>Global Live Map:</strong> Track the exact physical positions, gaps, and retired statuses of all 20 cars simultaneously.</span>
                    </li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 'bold', marginTop: '1px' }}>•</span>
                      <span><strong>Quantitative Physics:</strong> Inspect live tyre heat curves, braking thresholds, throttle traces, and ERS battery charge states.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scenario Case Study Box */}
            <div className="bento-card" style={{ margin: '0', padding: 'var(--space-md) var(--space-lg)', borderColor: 'var(--brand-border)', backgroundColor: 'var(--brand-card-bg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--brand-border)', paddingBottom: '12px', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="mono" style={{ fontSize: '0.75rem', background: 'rgba(9, 9, 11, 0.05)', color: 'var(--brand-text)', padding: '3px 8px', borderRadius: '4px', fontWeight: '700' }}>MONACO GP CASE SCENARIO</span>
                  <span className="clash-h3" style={{ color: 'var(--brand-text)' }}>Anatomy of a Lap 18 Defense</span>
                </div>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--brand-accent)', fontWeight: '700' }}>LECLERC vs. PIASTRI</span>
              </div>
              
              <div className="scenario-grid">
                <div className="scenario-divider"></div>
                
                <div className="scenario-col-left" style={{ paddingRight: 'var(--space-md)' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-text-sub)', display: 'block', marginBottom: '6px', letterSpacing: '0.05em', fontWeight: '700', textTransform: 'uppercase' }}>On the Television Feed</span>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                    The TV broadcast displays the live visual feed, timing graphics, and incident replays of Leclerc defending against Piastri into the harbour chicane, accompanied by race commentary analyzing the visual battle and tyre performance.
                  </p>
                </div>
                
                <div className="scenario-col-right" style={{ paddingLeft: 'var(--space-md)' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-accent)', display: 'block', marginBottom: '6px', letterSpacing: '0.05em', fontWeight: '700', textTransform: 'uppercase' }}>What the Telemetry Reveals</span>
                  <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                    The dashboard reveals the exact telemetry parameters measured on-track: speed (km/h), throttle percentage, brake pressure, active gear selection, and lap time gap deltas between the two drivers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Project Concept */}
        <section className="story-chapter" style={{ height: 'auto', padding: 'var(--space-xl) 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div className="narrative-header" style={{ maxWidth: '800px', marginBottom: 'var(--space-xs)' }}>
              <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>03 / PROJECT CONCEPT</span>
              <h2>The Customizable Telemetry Dashboard</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', color: 'var(--text-sub)', marginTop: 'var(--space-xs)' }}>
                Designed as a high-fidelity <strong>second-screen companion</strong>, this cockpit is built to run side-by-side with the live race broadcast. It feeds enthusiasts the granular G-force data, relative gap timings, and tyre degradation profiles that enrich the main video feed, turning any standard screen setup into an interactive engineering wall.
              </p>
            </div>
            
            <div className="concept-layout-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '48px', width: '100%', marginBottom: 'var(--space-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                {/* Card 1: Modular Grid Environment */}
                <div className="bento-card" style={{ margin: '0', backgroundColor: 'var(--brand-card-bg)', borderColor: 'var(--brand-border)', borderTop: '3px solid var(--brand-accent)', padding: '22px 24px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span className="mono" style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--brand-accent)', letterSpacing: '0.1em', background: 'rgba(225, 6, 0, 0.06)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(225, 6, 0, 0.15)' }}>SYS // GRID_ENGINE</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="3" y1="15" x2="21" y2="15"></line>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                      <line x1="15" y1="3" x2="15" y2="21"></line>
                    </svg>
                  </div>
                  <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 8px 0' }}>Modular Grid Environment</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', margin: '0' }}>Built on a strict 12-row by 8-column layout, users can drag, drop, and resize components dynamically.</p>
                </div>

                {/* Card 2: Strict Boundary Solver */}
                <div className="bento-card" style={{ margin: '0', backgroundColor: 'var(--brand-card-bg)', borderColor: 'var(--brand-border)', borderTop: '3px solid var(--brand-accent)', padding: '22px 24px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.03)', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span className="mono" style={{ fontSize: '0.68rem', fontWeight: '700', color: 'var(--brand-accent)', letterSpacing: '0.1em', background: 'rgba(225, 6, 0, 0.06)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(225, 6, 0, 0.15)' }}>ALG // BOUNDARY_SOLVER</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6"></path>
                      <path d="M9 21H3v-6"></path>
                      <path d="M21 3l-7 7"></path>
                      <path d="M3 21l7-7"></path>
                      <rect x="7" y="7" width="10" height="10" rx="1"></rect>
                    </svg>
                  </div>
                  <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 8px 0' }}>Strict Boundary Solver</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--brand-text-sub)', lineHeight: '1.5', margin: '0' }}>A custom packing algorithm keeps widgets strictly within the screen height and width, preventing scrollbars or layout overrides.</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <h4 className="clash-h4" style={{ color: 'var(--brand-text)', margin: '0 0 12px 0', textAlign: 'center' }}>Interactive Dynamic Grid Wireframe</h4>
                <div className="wireframe-iframe-wrapper">
                  <iframe src="/Projects/F1%20Dashboard/standalone%20grid.html" scrolling="no" title="Interactive Grid Wireframe"></iframe>
                </div>
              </div>
            </div>

            {/* Subsection: Data Pipeline & Synchronization */}
            <div style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--brand-border)', width: '100%' }}>
              <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>TECHNICAL ARCHITECTURE</span>
              <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 12px 0' }}>Data Pipeline &amp; Live Synchronization</h3>
              
              <p style={{ fontSize: '0.88rem', lineHeight: '1.55', color: 'var(--brand-text-sub)', marginBottom: 'var(--space-md)', maxWidth: '900px' }}>
                The dashboard pre-compiles real-world telemetry from the 2024 Monaco Grand Prix. The pipeline cleans timing outliers (like the 30-minute Perez/Magnussen red-flag stoppage on Lap 1), synthesizes fractional lap progression and cornering G-forces, and pipes the state into a global Zustand store for unified, low-latency UI rendering.
              </p>

              {/* Flowchart */}
              <div className="pipeline-flowchart" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px', width: '100%', marginTop: '24px', flexWrap: 'wrap' }}>
                <div className="flow-step" style={{ flex: '1', minWidth: '220px', background: 'rgba(225, 6, 0, 0.03)', border: '1.5px solid rgba(225, 6, 0, 0.1)', borderRadius: '16px', padding: '24px 20px', textAlign: 'center', boxSizing: 'border-box', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', minHeight: '150px' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-accent)', display: 'block', fontWeight: '700', letterSpacing: '0.08em' }}>STEP 01</span>
                  <h4 className="clash-h4" style={{ margin: '0', color: 'var(--brand-text)' }}>Raw F1 API</h4>
                  <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--brand-text-sub)', lineHeight: '1.45' }}>Jolpica/Ergast API timing and results metadata.</p>
                </div>
                
                <div className="flow-arrow" style={{ fontSize: '1.35rem', color: 'rgba(225, 6, 0, 0.4)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}>→</div>

                <div className="flow-step" style={{ flex: '1', minWidth: '220px', background: 'rgba(225, 6, 0, 0.03)', border: '1.5px solid rgba(225, 6, 0, 0.1)', borderRadius: '16px', padding: '24px 20px', textAlign: 'center', boxSizing: 'border-box', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', minHeight: '150px' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-accent)', display: 'block', fontWeight: '700', letterSpacing: '0.08em' }}>STEP 02</span>
                  <h4 className="clash-h4" style={{ margin: '0', color: 'var(--brand-text)' }}>Timeline Cleaning</h4>
                  <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--brand-text-sub)', lineHeight: '1.45' }}>Removes Lap 1 outliers and adds grid stagger offsets.</p>
                </div>

                <div className="flow-arrow" style={{ fontSize: '1.35rem', color: 'rgba(225, 6, 0, 0.4)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}>→</div>

                <div className="flow-step" style={{ flex: '1', minWidth: '220px', background: 'rgba(225, 6, 0, 0.03)', border: '1.5px solid rgba(225, 6, 0, 0.1)', borderRadius: '16px', padding: '24px 20px', textAlign: 'center', boxSizing: 'border-box', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', minHeight: '150px' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-accent)', display: 'block', fontWeight: '700', letterSpacing: '0.08em' }}>STEP 03</span>
                  <h4 className="clash-h4" style={{ margin: '0', color: 'var(--brand-text)' }}>Frame Synthesis</h4>
                  <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--brand-text-sub)', lineHeight: '1.45' }}>Generates 2 FPS telemetry (speed, brake, throttle).</p>
                </div>

                <div className="flow-arrow" style={{ fontSize: '1.35rem', color: 'rgba(225, 6, 0, 0.4)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}>→</div>

                <div className="flow-step" style={{ flex: '1', minWidth: '220px', background: 'rgba(225, 6, 0, 0.03)', border: '1.5px solid rgba(225, 6, 0, 0.1)', borderRadius: '16px', padding: '24px 20px', textAlign: 'center', boxSizing: 'border-box', backdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center', minHeight: '150px' }}>
                  <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--brand-accent)', display: 'block', fontWeight: '700', letterSpacing: '0.08em' }}>STEP 04</span>
                  <h4 className="clash-h4" style={{ margin: '0', color: 'var(--brand-text)' }}>Zustand Sync</h4>
                  <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--brand-text-sub)', lineHeight: '1.45' }}>Pipes unified frame state to active React widgets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Dashboard Modules (Side-by-side Card Deck) */}
        <section className="story-chapter chapter-deck-pin">
          <div className="container deck-grid-container">
            <div className="deck-info-panel">
              <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>04 / IMPLEMENTATION DETAILS</span>
              <h2>Dashboard Modules</h2>
              <p>
                The system relies on modular cockpit components designed to match professional motorsport analytical rigs, ensuring clear information architecture and enabling data-informed design.
              </p>
            </div>

            <div className="stacked-deck-wrapper">
              {/* Card 1: 3D Track Model & Replay Engine */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="f1-deck-card-content">
                  <div className="f1-deck-card-image-wrap">
                    <iframe src="/Projects/F1_Dashboard.html?widget=liveReplay" scrolling="no" title="3D Monaco Viewport"></iframe>
                  </div>
                  <div className="f1-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>01 / REPLAY ENGINE</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>3D Monaco Viewport</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-sub)', margin: '0' }}>
                      Features a WebGL-powered 3D visualization of the Monaco circuit centerline, elevation, and curves. Colored circular car dots trace coordinates down to the millisecond, synced to play, pause, speed multipliers (0.5x to 4.0x), and scrub timelines.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Card 2: Telemetry Gauges */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="f1-deck-card-content">
                  <div className="f1-deck-card-image-wrap">
                    <iframe src="/Projects/F1_Dashboard.html?widget=telemetry" scrolling="no" title="Cockpit Gauges"></iframe>
                  </div>
                  <div className="f1-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>02 / DIALS &amp; INPUTS</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Cockpit Gauges</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-sub)', margin: '0' }}>
                      A circular radial gauge charts live vehicle speed (km/h), complemented by an active tyre compound indicator, dynamic green throttle and red brake bar inputs, and a bold gear selection readout.
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Card 3: Comparisons and Battles */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="f1-deck-card-content">
                  <div className="f1-deck-card-image-wrap">
                    <iframe src="/Projects/F1_Dashboard.html?widget=driverHeadToHead" scrolling="no" title="Driver Battles"></iframe>
                  </div>
                  <div className="f1-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>03 / COMPARISONS</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Driver Battles</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-sub)', margin: '0' }}>
                      Displays real-time head-to-head comparison telemetry including current speed (km/h), throttle application, brake pressure, and gear selection across three adjacent drivers, synced with live track gaps and lap times.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4: F1 Graphics and Styling */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="f1-deck-card-content">
                  <div className="f1-deck-card-image-wrap" style={{ background: '#0b0b0f', border: '1px solid rgba(255, 255, 255, 0.08)', padding: '12px', boxSizing: 'border-box' }}>
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', boxSizing: 'border-box' }}>
                      {/* Top Box: F1 Logo */}
                      <div style={{ flex: '1.5', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '10px' }}>
                        <img src="/project-details/img/f1-logo.png" alt="F1 Logo" className="f1-moodboard-logo" style={{ maxHeight: '42px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(225,6,0,0.45))' }} />
                      </div>
                      
                      {/* Middle Row: Red, Black, White */}
                      <div style={{ flex: '1.2', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: '#e10600', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px 0' }}>
                          <span className="clash-h4" style={{ fontSize: '0.8rem', color: '#ffffff' }}>Red</span>
                          <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>#E10600</span>
                        </div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: '#030303', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px 0' }}>
                          <span className="clash-h4" style={{ fontSize: '0.8rem', color: '#ffffff' }}>Black</span>
                          <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>#09090B</span>
                        </div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.9)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4px 0' }}>
                          <span className="clash-h4" style={{ fontSize: '0.8rem', color: '#09090b' }}>White</span>
                          <span style={{ fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(9,9,11,0.65)', marginTop: '2px' }}>#FFFFFF</span>
                        </div>
                      </div>
                      
                      {/* Bottom Row: Team Graphics, Icons */}
                      <div style={{ flex: '2', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 6px', gap: '6px' }}>
                          <span className="clash-h4" style={{ fontSize: '0.8rem', color: '#ffffff' }}>Team Graphics</span>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', fontWeight: '600', color: '#DC2626', border: '1px solid rgba(220, 38, 38, 0.3)', padding: '3px 8px', borderRadius: '4px', background: 'rgba(220, 38, 38, 0.08)' }}>Ferrari</span>
                            <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', fontWeight: '600', color: '#F97316', border: '1px solid rgba(249, 115, 22, 0.3)', padding: '3px 8px', borderRadius: '4px', background: 'rgba(249, 115, 22, 0.08)' }}>McLaren</span>
                            <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', fontWeight: '600', color: '#06B6D4', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '3px 8px', borderRadius: '4px', background: 'rgba(6, 182, 212, 0.08)' }}>Mercedes</span>
                          </div>
                        </div>
                        <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 6px', gap: '8px' }}>
                          <span className="clash-h4" style={{ fontSize: '0.8rem', color: '#ffffff' }}>Icons</span>
                          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)' }}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" title="Gauge"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" title="Zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" title="Trophy"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a7.7 7.7 0 0 1 7.54 8H4.46A7.7 7.7 0 0 1 12 2z"></path></svg>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" title="Map"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f1-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>04 / AESTHETICS</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Graphics &amp; Styling</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--text-sub)', margin: '0' }}>
                      Inspired by Formula 1's visual identity, the dashboard uses its signature red, black, and white palette with team specific colours to reinforce race context. Clean icons keep information clear, consistent, and instantly recognizable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: Interactive Prototype */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0 var(--space-2xl) 0', height: 'auto', display: 'block' }}>
          <div className="container" style={{ maxWidth: '1400px', width: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              <div>
                <span className="mono brand-accent-color" style={{ display: 'block', marginBottom: '8px' }}>05 / Interactive Prototype</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0' }}>Telemetry Rig</h2>
              </div>
              <a href="/Projects/F1_Dashboard.html" onClick={handleF1Fullscreen} target="_blank" rel="noreferrer" className="btn-pop btn-pop-primary" style={{ backgroundColor: 'var(--brand-accent)', color: 'white', border: 'none', borderRadius: '50px' }}>Open Fullscreen ↗</a>
            </div>
            
            <div className="ipad-mockup-container" style={{ backgroundImage: "url('/Projects/F1 Dashboard/ipad screen for f1.png')" }}>
              <div className="ipad-viewport" data-target-width="1440" data-target-height="1000">
                <iframe src="/Projects/F1_Dashboard.html" title="F1 Telemetry Prototype"></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Full-Width Project Footer */}
      <Footer prevProject={{ label: 'RESTEASE', to: '/project-details/restease' }} nextProject={{ label: 'HONÉE', to: '/project-details/honee' }} />
    </>
  );
}
