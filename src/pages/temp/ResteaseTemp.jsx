import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ResteaseTemp() {
  // Brand Theme Lifecycle Mount Hook
  useEffect(() => {
    document.body.className = 'theme-brand';
    document.body.style.setProperty('--brand-bg', '#ffffff');
    document.body.style.setProperty('--brand-text', '#24361e');
    document.body.style.setProperty('--brand-text-sub', '#4b5e43');
    document.body.style.setProperty('--brand-accent', '#ff4f00');
    document.body.style.setProperty('--brand-card-bg', '#f4f6f3');
    document.body.style.setProperty('--brand-border', 'rgba(36, 54, 30, 0.1)');
    document.body.style.setProperty('--brand-grid-color', 'rgba(36, 54, 30, 0.08)');
    document.body.style.setProperty('--brand-nav-bg', 'rgba(255, 255, 255, 0.9)');
    document.body.style.setProperty('--brand-nav-border', 'rgba(36, 54, 30, 0.1)');
    document.body.style.setProperty('--brand-sketch-fill', '#f4f6f3');
    document.body.style.setProperty('--brand-sketch-text-color', '#4b5e43');
    document.body.style.setProperty('--brand-moodboard-bg', '#f4f6f3');
    document.body.style.setProperty('--brand-moodboard-border', 'rgba(36, 54, 30, 0.1)');

    window.scrollTo(0, 0);

    return () => {
      document.body.className = '';
      document.body.removeAttribute('style');
    };
  }, []);

  // Smooth Scroll Navigation Helper
  const scrollToNarrative = () => {
    const el = document.querySelector('.chapter-narrative');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Chapter 6: Interactive Bento Tile States
  const [nfcPaired, setNfcPaired] = useState(false);

  const [diagIndex, setDiagIndex] = useState(0);
  const diagStates = [
    { unit: 'RE-01', batt: '95%', battColor: '#24361e', battWidth: '95%', battFillColor: '#00e676', caption: 'Unit Battery scan.' },
    { unit: 'RE-03', batt: '46%', battColor: '#ff9800', battWidth: '46%', battFillColor: '#ff9800', caption: 'Unit Battery scan.' },
    { unit: 'RE-06', batt: '12%', battColor: '#ef4444', battWidth: '12%', battFillColor: '#ef4444', caption: 'Unit Battery scan.' }
  ];
  const currentDiag = diagStates[diagIndex];

  const [regIndex, setRegIndex] = useState(0);
  const regStates = [
    { num: 'RE-01', tag: 'CH-16', caption: 'RE01 - command unit - online', offline: false },
    { num: 'RE-02', tag: 'CH-08', caption: 'RE02 - medical unit - online', offline: false },
    { num: 'RE-03', tag: 'CH-12', caption: 'RE03 - valley unit - offline', offline: true }
  ];
  const currentReg = regStates[regIndex];

  const [maintIndex, setMaintIndex] = useState(0);
  const maintStates = ['CLEARED', 'SERVICE REQ', 'OFFLINE'];

  // Elevation Profile Graph & Interactive Waypoints
  const [activeWpt, setActiveWpt] = useState(0);
  const waypoints = [
    { label: 'WPT1', alt: '890m', slope: '10°', risk: 'SAFE', riskClass: 'safe', markerX: '29%', markerY: '19%' },
    { label: 'WPT2', alt: '820m', slope: '38°', risk: 'STEEP INCLINE', riskClass: 'high', markerX: '42%', markerY: '30%' },
    { label: 'WPT3', alt: '740m', slope: '24°', risk: 'MODERATE', riskClass: 'moderate', markerX: '54%', markerY: '39%' },
    { label: 'WPT4', alt: '690m', slope: '45°', risk: 'SLIP ALERT', riskClass: 'critical', markerX: '54%', markerY: '45%' },
    { label: 'WPT5', alt: '580m', slope: '42°', risk: 'SLIP ALERT', riskClass: 'critical', markerX: '54%', markerY: '52%' },
    { label: 'WPT6', alt: '420m', slope: '20°', risk: 'MODERATE', riskClass: 'moderate', markerX: '54%', markerY: '58%' }
  ];
  const currentWpt = waypoints[activeWpt];

  // Active Stretcher Callout Item (Chapter 4)
  const [activeCallout, setActiveCallout] = useState(0);

  // Chart.js Canvas Integration (Chapter 2)
  const chartCanvasRef = useRef(null);

  useEffect(() => {
    let rainChart;
    if (chartCanvasRef.current && window.Chart) {
      rainChart = new window.Chart(chartCanvasRef.current, {
        type: 'bar',
        data: {
          labels: ['1h', '2h', '3h', '4h', '5h', '6h', '12h', '24h'],
          datasets: [
            {
              label: 'Rainfall (mm)',
              data: [15, 32, 54, 82, 115, 140, 195, 270],
              backgroundColor: 'rgba(36, 54, 30, 0.15)',
              borderColor: '#24361e',
              borderWidth: 1.5,
              yAxisID: 'yRain',
              order: 2
            },
            {
              label: 'Landslide Risk (%)',
              data: [12, 18, 28, 42, 68, 85, 96, 99],
              type: 'line',
              borderColor: '#ff4f00',
              borderWidth: 3,
              pointBackgroundColor: '#ff4f00',
              pointBorderColor: '#ffffff',
              pointRadius: 4,
              pointHoverRadius: 6,
              fill: false,
              yAxisID: 'yRisk',
              order: 1
            },
            {
              label: 'Safety Limit',
              data: Array(8).fill(120),
              type: 'line',
              borderColor: 'rgba(255, 79, 0, 0.8)',
              borderWidth: 1.5,
              borderDash: [5, 5],
              pointRadius: 0,
              fill: false,
              yAxisID: 'yRain',
              order: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { color: 'rgba(15,23,42,0.04)' },
              ticks: { color: '#475569', font: { family: "'Montserrat', sans-serif", size: 10 } }
            },
            yRain: {
              type: 'linear',
              position: 'left',
              grid: { color: 'rgba(15,23,42,0.06)' },
              ticks: { color: '#24361e', font: { family: "'Montserrat', sans-serif", size: 9 }, callback: (v) => v + 'mm' }
            },
            yRisk: {
              type: 'linear',
              position: 'right',
              grid: { drawOnChartArea: false },
              ticks: { color: '#c63d00', font: { family: "'Montserrat', sans-serif", size: 9 }, callback: (v) => v + '%' }
            }
          }
        }
      });
    }
    return () => {
      if (rainChart) rainChart.destroy();
    };
  }, []);

  const handleOpenFullscreen = (e) => {
    e.preventDefault();
    window.open('/Projects/restease.html', '_blank', 'noreferrer');
  };

  return (
    <div className="project-detail-wrapper" style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Blueprint Grid Background Pattern */}
      <div className="pattern-bg"></div>

      {/* Header navigation (Floating Island Navbar) */}
      <header className="floating-header" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: 'calc(100% - 40px)', maxWidth: '640px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '52px', backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(36, 54, 30, 0.12)', borderRadius: '50px', padding: '0 24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center', width: '30px', height: '30px', justifyContent: 'center' }}>
            <svg width="26" height="26" viewBox="0 0 1514 1287" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible", display: "block" }}>
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes kf_Frame_8_transform_0 {
                  0% {
                    transform: translate(757px, 643.5px) rotate(0deg) translate(-757px, -643.5px);
                  }
                  100% {
                    transform: translate(757px, 643.5px) rotate(360deg) translate(-757px, -643.5px);
                  }
                }
                .asterisk-spin-group {
                  transform-origin: 0 0;
                  animation: kf_Frame_8_transform_0 1.2s linear infinite;
                  animation-play-state: paused !important;
                }
                .logo:hover .asterisk-spin-group,
                a:hover .asterisk-spin-group,
                svg:hover .asterisk-spin-group {
                  animation-play-state: running !important;
                }
              ` }} />
              <g className="asterisk-spin-group" fill="#24361e">
                <path d="M559.56 757.221C564.269 748.959 558.296 738.691 548.786 738.7L4.99175 739.189C3.07642 739.191 1.88359 737.112 2.85193 735.459L114.747 544.504C115.192 543.746 116.004 543.279 116.883 543.279L676.027 542.775C679.584 542.772 682.866 540.862 684.628 537.772L989.929 2.06869C990.369 1.29605 991.19 0.818692 992.079 0.817891L1208.75 0.622788C1210.64 0.621087 1211.83 2.64816 1210.92 4.30033L923.126 524.155C918.552 532.416 924.532 542.551 933.975 542.543L1508.13 542.026C1510.05 542.024 1511.24 544.122 1510.26 545.774L1396.16 736.732C1395.72 737.48 1394.91 737.938 1394.04 737.939L810.314 738.464C806.713 738.468 803.397 740.424 801.653 743.575L503.544 1282.07C503.108 1282.85 502.279 1283.34 501.378 1283.34L263.863 1283.56C261.961 1283.56 260.767 1281.5 261.709 1279.85L559.56 757.221Z" fill="#24361e" fillOpacity="1" />
                <path d="M673.578 180.373C673.862 180.786 674.014 181.274 674.015 181.775L674.325 526.123C674.327 528.565 669.797 527.516L314.603 4.19047C313.487 2.54628 314.664 0.323334 316.651 0.321545L548.26 0.11299C549.076 0.112255 549.84 0.513721 550.303 1.18629L673.578 180.373Z" fill="#24361e" fillOpacity="1" />
                <path d="M815.897 1106C815.613 1105.59 815.461 1105.1 815.46 1104.6L815.15 760.248C815.148 757.806 818.307 756.834 819.678 758.854L1174.87 1282.18C1175.99 1283.82 1174.81 1286.05 1172.82 1286.05L941.215 1286.26C940.399 1286.26 939.635 1285.86 939.172 1285.18L815.897 1106Z" fill="#24361e" fillOpacity="1" />
              </g>
            </svg>
          </Link>
          <span style={{ fontSize: '0.65rem', padding: '3px 9px', margin: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '22px', backgroundColor: '#24361e', color: '#ffffff', fontWeight: '700', letterSpacing: '0.08em', borderRadius: '5px', textTransform: 'uppercase' }}>RESTEASE</span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/resume" style={{ fontSize: '0.82rem', fontFamily: 'var(--font-display)', fontWeight: '700', letterSpacing: '0.06em', color: '#24361e', textDecoration: 'none', textTransform: 'uppercase' }}>ABOUT ME</Link>
        </nav>
      </header>

      {/* Main Scroll Narrative */}
      <main className="narrative-wrapper">

        {/* Chapter 1: The Hook (Hero) */}
        <section className="story-chapter chapter-hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '120px 20px 60px 20px', boxSizing: 'border-box' }}>
          {/* Ambient Glow Background */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 50% 38%, rgba(255, 120, 60, 0.12) 0%, rgba(255, 255, 255, 0) 65%)', pointerEvents: 'none', zIndex: 0 }}></div>
          
          <div className="container hero-content" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            
            {/* Case Study Badge Pill */}
            <div style={{ display: 'inline-block', border: '1.5px solid #ff4f00', borderRadius: '6px', padding: '5px 16px', marginBottom: '24px', backgroundColor: 'transparent' }}>
              <span style={{ color: '#ff4f00', fontFamily: 'var(--font-mono)', fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>CASE STUDY 02 //</span>
            </div>

            {/* Main Title RESTEASE */}
            <h1 className="brand-hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.8rem, 8.5vw, 6.2rem)', fontWeight: '800', color: '#24361e', letterSpacing: '-0.02em', lineHeight: 1.0, margin: '0 0 18px 0', textTransform: 'uppercase' }}>
              RESTEASE
            </h1>

            {/* Subtitle */}
            <p className="brand-hero-subtitle" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)', color: '#5a6b54', fontWeight: '400', lineHeight: 1.5, maxWidth: '580px', margin: '0 auto 42px auto', textAlign: 'center' }}>
              A phygital disaster response system for<br />
              <span style={{ whiteSpace: 'nowrap' }}>Debris Flow Landslides.</span>
            </p>

            {/* Project Meta Bar */}
            <div className="project-meta-bar" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.6fr', width: '100%', maxWidth: '700px', borderTop: '1px solid rgba(36, 54, 30, 0.12)', borderBottom: '1px solid rgba(36, 54, 30, 0.12)', padding: '18px 0', margin: '0 auto', gap: 0 }}>
              <div className="meta-item" style={{ borderRight: '1px solid rgba(36, 54, 30, 0.12)', padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="meta-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#5a6b54', letterSpacing: '0.1em', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>CATEGORY</span>
                <span className="meta-val" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#24361e', textAlign: 'center' }}>Disaster UI/UX &amp; Systems</span>
              </div>
              <div className="meta-item" style={{ borderRight: '1px solid rgba(36, 54, 30, 0.12)', padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="meta-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#5a6b54', letterSpacing: '0.1em', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>DURATION</span>
                <span className="meta-val" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#24361e', textAlign: 'center' }}>3 Weeks</span>
              </div>
              <div className="meta-item" style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span className="meta-label" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#5a6b54', letterSpacing: '0.1em', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>TEAM</span>
                <span className="meta-val" style={{ fontSize: '0.85rem', fontWeight: '700', color: '#24361e', textAlign: 'center', lineHeight: 1.3 }}>Jetin Krishna, Siddharth Jadhav, Shreya Kulkarni</span>
              </div>
            </div>

            {/* Scroll Indicator Arrow Button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
              <button 
                aria-label="Scroll down" 
                onClick={scrollToNarrative}
                style={{ width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(36, 54, 30, 0.15)', backgroundColor: 'rgba(36, 54, 30, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#24361e', transition: 'all 0.2s ease', padding: 0 }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(36, 54, 30, 0.1)'; e.currentTarget.style.transform = 'translateY(2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(36, 54, 30, 0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>

          </div>
        </section>

        {/* Chapter 2: The Context & Problem Statement */}
        <section className="story-chapter chapter-narrative">
          <div className="container narrative-grid">
            <div className="narrative-content-left">
              <div className="narrative-block">
                <span className="mono brand-accent-color">01 / GEOGRAPHICAL VULNERABILITY</span>
                <h2>Kerala Landslide Crisis</h2>
                <p>
                  Wayanad, Idukki, and Malappuram districts in the Western Ghats of Kerala are highly vulnerable to sudden, catastrophic landslides. Heavy monsoon precipitation, coupled with extensive deforestation and human soil interventions, destabilizes steep hillsides and amplifies soil erosion, triggering rapid slope failures.
                </p>
              </div>
              <div className="narrative-block" style={{ marginTop: 'var(--space-lg)' }}>
                <span className="mono brand-accent-color">02 / INFRASTRUCTURE COLLAPSE</span>
                <h2>Communication Blackout</h2>
                <p>
                  When a major landslide hits, power lines, access roads, and cellular towers are destroyed in seconds. Rescue teams are plunged into complete communication blackouts, forcing squads to operate offline-first to coordinate life-saving search and recovery efforts.
                </p>
              </div>
            </div>
            <div className="narrative-content-right" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {/* Precipitation vs. Risk Chart Card */}
              <div className="bento-card no-tilt" style={{ margin: 0, padding: 'var(--space-md)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: '#f8fafc', fontSize: '0.9rem', marginTop: 0, marginBottom: '4px' }}>Rainfall vs. Landslide Risk Threshold</h4>
                <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-sub)' }}>Wayanad Monsoon Danger Zones</span>
                <div className="chart-card-wrapper" style={{ height: '180px', marginTop: '10px' }}>
                  <canvas ref={chartCanvasRef}></canvas>
                </div>
              </div>
              <div className="brand-metric-card" style={{ padding: 'var(--space-md)', marginTop: '5px' }}>
                <div className="metric-number" style={{ fontSize: '3.8rem', textShadow: '0 0 32px rgba(255, 79, 0, 0.25)' }}>73%</div>
                <p className="metric-label" style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--text-sub)' }}>Of landslides in Wayanad occur during the peak monsoon season (July–Sept). High risk mandates offline location tracking and automatic GPS sharing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Ground Operations & Field UX */}
        <section className="story-chapter chapter-stationary-section" id="field-operations-pin" style={{ padding: 'var(--space-xl) 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'transparent', position: 'relative', zIndex: 4, boxSizing: 'border-box' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: 'var(--space-lg)' }}>
              <span className="mono brand-accent-color">03 / FIELD LEVEL UX</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-text)', marginTop: '8px', marginBottom: '12px' }}>Ground level response</h2>
              <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>
                Field responders face physical drain and communication blackouts under severe monsoons. System constraints require a new kind of physical hardware and digital telemetry network.
              </p>
            </div>
            
            <div className="stationary-cards-grid restease-cards-grid">
              {/* Card 1 */}
              <div className="deck-card" style={{ margin: 0, backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', transition: 'none', transform: 'none', position: 'relative', opacity: 1 }}>
                <div className="slide-image-wrapper" style={{ padding: 0, backgroundColor: '#030213', height: '320px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-sm)' }}>
                  <img src="/project-details/img/restease_current_stretcher.jpg" alt="Current Landslide Stretcher Scenario" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-info" style={{ margin: 0, padding: 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--brand-text)', marginTop: 0, marginBottom: '8px' }}>Challenging Casualty Evacuation</h3>
                  <p style={{ color: 'var(--brand-text-sub)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>Current stretchers require 10 to 12 rescuers to carry a single casualty across mud-clogged slopes exceeding 30°. The unstable terrain and uneven weight distribution quickly exhaust rescue teams, increasing the risk of slips.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="deck-card" style={{ margin: 0, backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', transition: 'none', transform: 'none', position: 'relative', opacity: 1 }}>
                <div className="slide-image-wrapper" style={{ padding: 0, backgroundColor: '#030213', height: '320px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-sm)' }}>
                  <img src="/project-details/img/restease_collapsed_tower.jpg" alt="Collapsed Communication Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-info" style={{ margin: 0, padding: 0 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--brand-text)', marginTop: 0, marginBottom: '8px' }}>Connectivity Loss in Disaster Zones</h3>
                  <p style={{ color: 'var(--brand-text-sub)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>Collapsed terrain frequently damages cellular towers and power lines, cutting off communication between field teams, command centers, and stranded survivors. Rescue efforts become slower and more difficult to coordinate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: The Two-Part Approach & Physical Solution */}
        <section className="story-chapter chapter-physical-solution">
          <div className="persona-fullscreen-wrap" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', padding: 'var(--space-xl) 0', position: 'relative' }}>
            <div className="container solution-persona-container" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ width: '100%' }}>
                <span className="mono brand-accent-color">04 / THE TWO-PART APPROACH</span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-text)', marginTop: '8px', marginBottom: 0 }}>Physical Hardware: The Rescuer Stretcher</h2>
              </div>

              <div className="restease-split-grid">
                {/* Left: Rajesh Persona */}
                <div className="persona-card-animate" style={{ height: '100%' }}>
                  <div className="persona-card persona-card-interactive" style={{ margin: 0, padding: 'var(--space-xl) !important', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', boxSizing: 'border-box', gap: 'var(--space-lg)' }}>
                    <div className="persona-top" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', margin: 0, padding: 0, borderBottom: 'none', width: '100%' }}>
                      <div className="persona-avatar-wrap-interactive" style={{ border: '2px solid var(--brand-border)', margin: '0 auto' }}>
                        <img src="/project-details/img/persona_avatar.jpg" alt="Rajesh K. Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="persona-main-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                        <span className="persona-name" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--brand-text)', fontWeight: '700', lineHeight: '1.2' }}>Rajesh K.</span>
                        <span className="persona-age" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--brand-text-sub)', lineHeight: '1.3' }}>38 yrs, NDRF Team Lead // Stretcher Operator</span>
                        <span className="persona-quote" style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--brand-text)', marginTop: '8px', lineHeight: '1.5', display: 'block', maxWidth: '90%' }}>
                          “With the self-leveling stretcher, we can carry casualties down steep muddy slopes without losing balance, and coordinates sync automatically without us touching screens.”
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                      <span className="persona-tag" style={{ fontSize: '0.8rem', padding: '5px 12px', margin: 0 }}>Terrain Rescue</span>
                      <span className="persona-tag" style={{ fontSize: '0.8rem', padding: '5px 12px', margin: 0 }}>Offline-First</span>
                    </div>

                    <div className="persona-story-section" style={{ borderTop: 'none !important', paddingTop: '0 !important', margin: 0, textAlign: 'center', width: '100%' }}>
                      <h4 className="section-title" style={{ color: '#c63d00 !important', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: 'var(--space-xs)', textAlign: 'center' }}>FIELD ROLE &amp; SCENARIO</h4>
                      <p className="story-text" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--brand-text-sub)', margin: 0, textAlign: 'center' }}>
                        Rajesh leads a 12-member squad in landslide zones. The steep hillsides are prone to continuous slides, cellular signals are non-existent, and physical exhaustion drains the squad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Field Pain Points */}
                <div className="pain-points-animate" style={{ padding: '10px' }}>
                  <span className="mono brand-accent-color" style={{ color: '#c63d00 !important', fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '2px' }}>FIELD PAIN POINTS &amp; DESIGN DIRECTIONS</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.95rem', color: 'var(--brand-text)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>Optimized for Heavy-Duty Field Usage</h3>
                  <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.6', fontSize: '0.95rem', margin: '0 0 var(--space-md) 0' }}>
                    Based on field observations and interviews with rescue personnel, the physical stretcher was designed to address the most critical challenges encountered during landslide evacuations.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                    <div className="pain-point-item-interactive">
                      <div className="pain-point-bullet"></div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--brand-text)', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Carrier Fatigue &amp; Slips</h4>
                        <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', marginBottom: '8px' }}>
                          <span style={{ color: '#c63d00', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '2px', letterSpacing: '0.5px' }}>PAIN POINT</span>
                          Manual evacuation over steep, debris-covered slopes places excessive physical strain on rescuers, increasing fatigue and reducing stability.
                        </div>
                        <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)' }}>
                          <span style={{ color: 'var(--brand-text)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>DESIGN DIRECTIONS</span>
                          <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'square' }}>
                            <li style={{ marginBottom: '2px' }}>Self-leveling pivot hinge for stable patient transport.</li>
                            <li style={{ marginBottom: 0 }}>Torso harness for ergonomic load redistribution.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="pain-point-item-interactive">
                      <div className="pain-point-bullet"></div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--brand-text)', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Communication Blackouts</h4>
                        <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', marginBottom: '8px' }}>
                          <span style={{ color: '#c63d00', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '2px', letterSpacing: '0.5px' }}>PAIN POINT</span>
                          Damaged communication infrastructure isolates rescue teams, making it difficult to coordinate operations and locate field units.
                        </div>
                        <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)' }}>
                          <span style={{ color: 'var(--brand-text)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>DESIGN DIRECTIONS</span>
                          <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'square' }}>
                            <li style={{ marginBottom: '2px' }}>Offline rescue teams location tracking.</li>
                            <li style={{ marginBottom: 0 }}>Route logging and safest path recommendations.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hardware Video Section */}
            <div className="stretcher-fullscreen-wrap" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', padding: 'var(--space-xl) 0', background: 'transparent', position: 'relative' }}>
              <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div className="stretcher-header-animate">
                  <span className="mono brand-accent-color">THE HARDWARE INTERFACE</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--brand-text)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>Rescuer Stretcher Engineering</h3>
                  <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.7', maxWidth: '850px', fontSize: '0.95rem', margin: 0 }}>
                    To solve the landslide rescue bottleneck, the RestEase physical stretcher is designed to reduce the physical toll on carriers and transmit vital telemetry automatically, requiring zero direct touchscreen interaction from field rescuers in harsh monsoon rains.
                  </p>
                </div>

                <div className="physical-grid">
                  <div className="physical-right" style={{ position: 'relative', aspectRatio: '16 / 9', height: 'auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: '#08080f', border: '1px solid rgba(255,255,255,0.05)', width: '100%' }}>
                    <div className="tech-hud-frame" style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <div className="hud-grid-overlay"></div>
                      <div className="hud-corner tl"></div>
                      <div className="hud-corner tr"></div>
                      <div className="hud-corner bl"></div>
                      <div className="hud-corner br"></div>
                      <span className="hud-label">CAM 01 // STRETCHER_PIVOT_TRACK</span>
                      <div className="hud-telemetry">
                        <span>ALT: 890m</span>
                        <span>PITCH: 42°</span>
                        <span>BATTERY: 88%</span>
                      </div>
                      <video className="slide-video" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                        <source src="/Projects/Restease/tkh rest ease with sos.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="physical-left">
                    <div className="stretcher-callouts-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                      {[
                        { title: 'Self-Leveling Pivot Hinge', desc: 'Compensates for steep >30° slopes, automatically keeping the casualty stable and preventing slips.' },
                        { title: 'Weight Distribution Torso Harness', desc: "Shifts carrying load from hands to chest/hips, leaving rescuers' hands free for terrain balance." },
                        { title: 'Embedded IoT GPS & SOS Transceiver', desc: 'Automatically logs stretcher location and SOS alerts via off-grid radio/satellite ping loops.' }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`stretcher-callout-item-interactive ${activeCallout === idx ? 'active-callout' : ''}`}
                          onClick={() => setActiveCallout(idx)}
                        >
                          <div className="callout-content">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Command Center Systems */}
        <section className="story-chapter chapter-command-persona" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', padding: 'var(--space-xl) 0', position: 'relative', background: 'transparent' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div style={{ width: '100%' }}>
              <span className="mono brand-accent-color">05 / COMMAND CENTER SYSTEMS</span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--brand-text)', marginTop: '8px', marginBottom: 0 }}>The Mission Control</h2>
            </div>

            <div className="restease-split-grid">
              {/* Left: Anjali Persona */}
              <div style={{ height: '100%' }}>
                <div className="persona-card persona-card-interactive" style={{ margin: 0, padding: 'var(--space-xl) !important', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', boxSizing: 'border-box', gap: 'var(--space-lg)' }}>
                  <div className="persona-top" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', margin: 0, padding: 0, borderBottom: 'none', width: '100%' }}>
                    <div className="persona-avatar-wrap-interactive" style={{ border: '2px solid var(--brand-border)', margin: '0 auto' }}>
                      <img src="/project-details/img/monitor_avatar.jpg" alt="Dr. Anjali Sen Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="persona-main-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                      <span className="persona-name" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--brand-text)', fontWeight: '700', lineHeight: '1.2' }}>Dr. Anjali Sen</span>
                      <span className="persona-age" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--brand-text-sub)', lineHeight: '1.3' }}>42 yrs, District Disaster Coordinator // Mission Commander</span>
                      <span className="persona-quote" style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--brand-text)', marginTop: '8px', lineHeight: '1.5', display: 'block', maxWidth: '90%' }}>
                        “Every rescue begins at Base Camp. I manage rescue units, equipment, and emergency responses to keep field operations moving safely and efficiently.”
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '10px', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                    <span className="persona-tag" style={{ fontSize: '0.8rem', padding: '5px 12px', margin: 0 }}>Command Operations</span>
                    <span className="persona-tag" style={{ fontSize: '0.8rem', padding: '5px 12px', margin: 0 }}>Resource Management</span>
                  </div>

                  <div className="persona-story-section" style={{ borderTop: 'none !important', paddingTop: '0 !important', margin: 0, textAlign: 'center', width: '100%' }}>
                    <h4 className="section-title" style={{ color: '#c63d00 !important', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: 'var(--space-xs)', textAlign: 'center', textTransform: 'uppercase' }}>Mission Command and Scenario</h4>
                    <p className="story-text" style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'var(--brand-text-sub)', margin: 0, textAlign: 'center' }}>
                      As Mission Commander, Anjali leads all rescue operations from Base Camp. She supervises rescue fleet readiness, dispatches teams in response to SOS alerts, oversees equipment allocation and maintenance, and coordinates logistics to support ongoing field missions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Command Pain Points */}
              <div style={{ padding: '10px', height: '100%' }}>
                <span className="mono brand-accent-color" style={{ color: '#c63d00 !important', fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>COMMAND PAIN POINTS &amp; DESIGN DIRECTIONS</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.95rem', color: 'var(--brand-text)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>Optimized for Base Camp Operations</h3>
                <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.6', fontSize: '0.95rem', margin: '0 0 var(--space-md) 0' }}>
                  Based on observations of command center workflows and emergency logistics, the RestEase app was designed to address the operational challenges faced by mission commanders during landslide rescue operations.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
                  <div className="pain-point-item-interactive">
                    <div className="pain-point-bullet"></div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 8px 0', color: 'var(--brand-text)', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Limited Visibility of Field Teams</h4>
                      <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', marginBottom: '8px' }}>
                        <span style={{ color: '#c63d00', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '2px', letterSpacing: '0.5px' }}>PAIN POINT</span>
                        Once rescue units are dispatched, Base Camp has limited visibility into their location and status. If a team becomes stranded or requires assistance, coordinating support becomes slow and uncertain.
                      </div>
                      <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'square' }}>
                          <li style={{ marginBottom: '2px' }}>Live GPS tracking of dispatched rescue units.</li>
                          <li style={{ marginBottom: 0 }}>Automated SOS alerts with precise location sharing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="pain-point-item-interactive">
                    <div className="pain-point-bullet"></div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 8px 0', color: 'var(--brand-text)', fontSize: '1rem', fontFamily: 'var(--font-display)' }}>Inventory &amp; Fleet Management</h4>
                      <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', marginBottom: '8px' }}>
                        <span style={{ color: '#c63d00', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '2px', letterSpacing: '0.5px' }}>PAIN POINT</span>
                        Managing rescue stretchers and critical equipment across multiple missions is difficult in high-stress environments, leading to misplaced assets, delayed deployment, and inefficient resource allocation.
                      </div>
                      <div style={{ fontSize: '0.82rem', lineHeight: '1.5', color: 'var(--brand-text-sub)' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: 'bold', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', display: 'block', marginBottom: '4px', letterSpacing: '0.5px' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '15px', listStyleType: 'square' }}>
                          <li style={{ marginBottom: '2px' }}>Live inventory tracking and equipment assignment.</li>
                          <li style={{ marginBottom: 0 }}>Fleet dashboard with stretcher availability and deployment status.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6: System Overview / Telemetry Cards */}
        <section className="story-chapter chapter-gallery-pin-temp" id="district-command-pin">
          <div className="gallery-pin-header">
            <div className="container">
              <span className="mono brand-accent-color">06 / SYSTEM OVERVIEW</span>
              <h2>How the System works</h2>
              <p>The RestEase App applies systems thinking to enable the Rescue Base Camp to monitor rescue teams by automatically receiving GPS coordinates from each stretcher. It also records evacuation routes, helping identify and recommend safer paths for future rescue missions based on previously traversed terrain and rescue outcomes.</p>
            </div>
          </div>
          
          <div className="gallery-horizontal-container">
            <div className="gallery-horizontal-track">
              {/* Slide 1: Route Profile & Elevation */}
              <div className="gallery-slide-card wide-card">
                <div className="slide-image-wrapper wide-wrapper" style={{ position: 'relative' }}>
                  <div className="topo-widget-container">
                    {/* Map Display */}
                    <div className="topo-map-display" style={{ position: 'relative', width: '100%', height: '100%', minHeight: '100%', backgroundImage: 'url("/project-details/img/landslide_isometric.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundColor: '#ffffff' }}>
                      <div className="map-grid-blueprint" style={{ opacity: 0.5, pointerEvents: 'none' }}></div>
                      
                      <svg className="topo-route-svg" viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, pointerEvents: 'none' }}>
                        <path className="glowing-route-path" d="M 216,232 L 216,156 L 100,64" stroke="#00e676" fill="none" strokeWidth="3.5" strokeDasharray="6,4"></path>
                      </svg>
                      
                      <div className="hazard-zone-pulse" style={{ left: '54%', top: '58%' }}></div>
                      
                      <div className="topo-marker marker-base" style={{ top: '16%', left: '25%' }}>
                        <div className="marker-dot green"></div>
                        <div className="marker-tooltip">Base DEOC</div>
                      </div>
                      <div className="topo-marker marker-unit active" style={{ top: currentWpt.markerY, left: currentWpt.markerX, transition: 'all 0.35s ease-out' }}>
                        <div className="marker-dot orange"></div>
                        <div className="marker-tooltip">Rescue Unit 01</div>
                      </div>
                      <div className="topo-marker marker-casualty" style={{ top: '58%', left: '54%' }}>
                        <div className="marker-dot red"></div>
                        <div className="marker-tooltip">Casualty Site</div>
                      </div>
                    </div>

                    {/* Elevation Profile Card */}
                    <div className="elevation-profile-card">
                      <div className="telemetry-header" style={{ marginBottom: 'var(--space-md)' }}>
                        <span className="mono accent-blue">ROUTE PROFILE</span>
                      </div>
                      
                      <div className="graph-axes-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)', marginTop: 'var(--space-sm)' }}>
                        <div className="graph-row" style={{ display: 'flex', gap: 'var(--space-xs)', alignItems: 'stretch', height: '180px' }}>
                          <div className="y-axis-labels" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: '8px', paddingBottom: '12px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--brand-text-sub)', width: '42px', boxSizing: 'border-box' }}>
                            <span>900m</span>
                            <span>700m</span>
                            <span>500m</span>
                            <span>300m</span>
                          </div>
                          
                          <div className="profile-bars-container" style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: 'var(--space-xs) 12px', borderLeft: '2px solid var(--brand-text-sub)', borderBottom: '2px solid var(--brand-text-sub)', background: 'rgba(36, 54, 30, 0.015)', boxSizing: 'border-box', marginBottom: '12px' }}>
                            {waypoints.map((wpt, idx) => (
                              <div
                                key={wpt.label}
                                className={`profile-bar-column ${activeWpt === idx ? 'active' : ''}`}
                                onClick={() => setActiveWpt(idx)}
                                onMouseEnter={() => setActiveWpt(idx)}
                                style={{ position: 'relative', cursor: 'pointer' }}
                              >
                                <div className={`bar-fill ${idx === 0 ? 'bar-safe' : idx === 1 ? 'bar-steep' : idx === 2 || idx === 5 ? 'bar-moderate' : 'bar-danger'}`} style={{ height: idx === 0 ? '90%' : idx === 1 ? '80%' : idx === 2 ? '70%' : idx === 3 ? '62%' : idx === 4 ? '50%' : '35%' }}></div>
                                <span className="bar-label" style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>{wpt.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="x-axis-label" style={{ textAlign: 'center', marginLeft: '42px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--brand-text-sub)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600, marginTop: '28px' }}>
                          GPS WAYPOINTS
                        </div>
                      </div>
                      
                      <div className="elevation-readout-display" style={{ marginTop: 'var(--space-md)' }}>
                        <div className="readout-item">
                          <span className="readout-label">Altitude</span>
                          <span className="readout-val">{currentWpt.alt}</span>
                        </div>
                        <div className="readout-item">
                          <span className="readout-label">Incline</span>
                          <span className="readout-val">{currentWpt.slope}</span>
                        </div>
                        <div className="readout-item">
                          <span className="readout-label">Status</span>
                          <span className={`readout-val status-badge ${currentWpt.riskClass}`}>{currentWpt.risk}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-info">
                    <h3>01 / Route Mapping &amp; Elevation Profiling</h3>
                    <p>Tracks every evacuation route as a sequence of GPS waypoints (WPTs). Each waypoint records latitude, longitude, and altitude, enabling the system to generate an elevation profile that helps Base Camp monitor terrain gradients, mission progress, and potential hazard zones.</p>
                  </div>
                </div>

                {/* Slide 2: Bento Telemetry Grid */}
                <div className="gallery-slide-card wide-card">
                  <div className="slide-image-wrapper wide-wrapper" style={{ position: 'relative' }}>
                    <div className="sector-telemetry-container" style={{ padding: '16px 20px', gap: '10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                      <div className="telemetry-top-bar" style={{ marginBottom: '2px', paddingBottom: '2px', flexShrink: 0 }}>
                        <span className="mono accent-orange" style={{ fontSize: '0.72rem', letterSpacing: '1px' }}>CONNECTED STRETCHER INVENTORY</span>
                      </div>
                      
                      <div className="bento-telemetry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '12px', width: '100%', height: 'calc(100% - 28px)', boxSizing: 'border-box', flexGrow: 1 }}>
                        {/* Card 1: NFC */}
                        <div
                          className={`bento-tile tile-stretchers ${nfcPaired ? 'paired' : ''}`}
                          onClick={() => setNfcPaired(!nfcPaired)}
                          style={{ padding: '18px 20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '12px', cursor: 'pointer', position: 'relative', height: '100%' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                            <span className="tile-label">NFC Registration</span>
                            <div className="tile-numeric" style={{ margin: '6px 0' }}>{nfcPaired ? '12' : '11'}<span className="sub">/12 paired</span></div>
                            <span className="tile-caption">Unique tag links stretcher identity.</span>
                          </div>
                          
                          <div className="nfc-scanner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '68px', height: '68px', position: 'relative', overflow: 'visible', flexShrink: 0, alignSelf: 'center' }}>
                            <div className="nfc-ghost" style={{ position: 'absolute', width: '60px', height: '60px', borderRadius: '11px', border: '1.2px dashed rgba(255, 79, 0, 0.25)', boxSizing: 'border-box', transition: 'all 0.4s ease-in-out', opacity: nfcPaired ? 0 : 1 }}></div>
                            <div className="nfc-diamond" style={{ position: 'absolute', width: '50px', height: '50px', borderRadius: nfcPaired ? '12px' : '9px', border: nfcPaired ? '2px solid #00e676' : '2px dashed var(--brand-accent)', background: nfcPaired ? 'rgba(0, 230, 118, 0.08)' : 'rgba(255, 79, 0, 0.08)', boxSizing: 'border-box', transition: 'all 0.4s ease-in-out' }}></div>
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}>
                              {!nfcPaired ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--brand-accent)' }}>
                                  <rect x="6" y="2" width="12" height="20" rx="2.5"></rect>
                                  <circle cx="12" cy="6" r="1" fill="currentColor" strokeWidth="0"></circle>
                                  <path d="M 8 20 A 3 3 0 0 1 11 17"></path>
                                  <path d="M 8 20 A 6 6 0 0 1 14 14"></path>
                                  <path d="M 8 20 A 9 9 0 0 1 17 11"></path>
                                </svg>
                              ) : (
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Card 2: Diagnostics */}
                        <div
                          className="bento-tile tile-power"
                          onClick={() => setDiagIndex((diagIndex + 1) % diagStates.length)}
                          style={{ padding: '18px 20px', boxSizing: 'border-box', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '12px', height: '100%' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                            <span className="tile-label">Unit Diagnostics // {currentDiag.unit}</span>
                            <div className="tile-numeric" style={{ margin: '6px 0' }}>
                              <span style={{ color: currentDiag.battColor }}>{currentDiag.batt}</span><span className="sub"> batt</span>
                            </div>
                            <span className="tile-caption">{currentDiag.caption}</span>
                          </div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '68px', flexShrink: 0, alignSelf: 'center' }}>
                            <div className="battery-icon-wrap" style={{ margin: 0, position: 'relative' }}>
                              <div className="battery-body" style={{ width: '48px', height: '18px', border: '1.5px solid #64748b', borderRadius: '3px', padding: '1.5px', boxSizing: 'border-box' }}>
                                <div style={{ width: currentDiag.battWidth, backgroundColor: currentDiag.battFillColor, height: '100%', borderRadius: '1px', transition: 'all 0.4s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Card 3: Radio Loop */}
                        <div
                          className="bento-tile tile-radio"
                          onClick={() => setRegIndex((regIndex + 1) % regStates.length)}
                          style={{ padding: '18px 20px', boxSizing: 'border-box', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '12px', height: '100%' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                            <span className="tile-label">Radio Loop // {currentReg.tag}</span>
                            <div className="tile-numeric" style={{ margin: '6px 0' }}>
                              {currentReg.num}<span className="sub">{currentReg.offline ? ' offline' : ' online'}</span>
                            </div>
                            <span className="tile-caption">{currentReg.caption}</span>
                          </div>
                        </div>
                        
                        {/* Card 4: Maintenance */}
                        <div
                          className="bento-tile tile-service"
                          onClick={() => setMaintIndex((maintIndex + 1) % maintStates.length)}
                          style={{ padding: '18px 20px', boxSizing: 'border-box', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '12px', height: '100%' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                            <span className="tile-label">Maintenance Log</span>
                            <div className="tile-numeric" style={{ margin: '6px 0' }}>{maintStates[maintIndex]}</div>
                            <span className="tile-caption">Stretcher structural integrity.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slide-info">
                    <h3>02 / Fleet Inventory &amp; Diagnostics</h3>
                    <p>Enables Base Camp to pair new stretchers via NFC tags, check live battery diagnostics, track offline mesh network signal strength, and record structural maintenance logs across all dispatched rescue equipment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 7: Interactive Prototype Simulator */}
        <section className="story-chapter chapter-mockup-pin">
          <div className="container mockup-reveal-grid">
            <div className="mockup-reveal-info">
              <span className="mono brand-accent-color">07 / INTERACTIVE PROTOTYPE</span>
              <h2>District Control Operations</h2>
              <p>
                Interact with the live, working rescue telemetry dashboard. Check the GPS satellites, respond to SOS alerts, and simulate off-grid connection drops.
              </p>
              <div className="cta-row desktop-only-btn" style={{ marginTop: 'var(--space-md)' }}>
                <a href="/Projects/restease.html" target="_blank" rel="noopener noreferrer" className="btn-pop btn-pop-primary">Open Fullscreen ↗</a>
              </div>
            </div>
            <div className="mockup-reveal-viewport-container">
              <div className="revealed-device-wrapper">
                <div className="iphone13-mockup-wrapper zoomed-mockup restease-zoomed">
                  <img className="iphone13-frame-img" src="/project-details/img/restease_phone_mockup.png" alt="iPhone 13 Green Mockup Frame" />
                  <div className="phone-viewport">
                    <iframe className="zoomed-iframe" src="/Projects/restease.html?embed=true&amp;v=1.0.7" title="Restease Live Prototype" width="100%" height="100%"></iframe>
                    <div className="viewport-mask"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cta-row portrait-only-btn-wrapper">
              <a href="/Projects/restease.html" target="_blank" rel="noopener noreferrer" className="btn-pop btn-pop-primary">Open Fullscreen ↗</a>
            </div>
          </div>
        </section>

      </main>

      {/* Full-Width Project Footer (Matching Resume Page) */}
      <footer className="no-print project-site-footer">
        <div className="container has-projects-nav">
          <div className="footer-left">
            <Link to="/project-details/emberquit" className="font-display footer-link-prev">← EMBERQUIT</Link>
          </div>
          <div className="footer-center">
            <span className="mono footer-copyright">© 2026 SHREYA KULKARNI. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="footer-right">
            <Link to="/project-details/f1_dashboard" className="font-display footer-link-next">F1 DASHBOARD →</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
