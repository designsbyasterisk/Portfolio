import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ResteaseHtml() {
  // Brand Theme Lifecycle Mount Hook
  useEffect(() => {
    document.body.className = 'theme-brand temp-page';
    document.body.style.setProperty('--brand-bg', '#ffffff');
    document.body.style.setProperty('--brand-text', '#24361e');
    document.body.style.setProperty('--brand-text-sub', '#4b5e43');
    document.body.style.setProperty('--brand-accent', '#ff4f00');
    document.body.style.setProperty('--brand-card-bg', '#f4f6f3');
    document.body.style.setProperty('--brand-border', 'rgba(36, 54, 30, 0.1)');
    document.body.style.setProperty('--brand-grid-color', 'rgba(36, 54, 30, 0.08)');
    document.body.style.setProperty('--brand-sketch-fill', '#f4f6f3');
    document.body.style.setProperty('--brand-sketch-text-color', '#4b5e43');
    document.body.style.setProperty('--brand-moodboard-bg', '#f4f6f3');
    document.body.style.setProperty('--brand-moodboard-border', 'rgba(36, 54, 30, 0.1)');

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

  // Interactive Bento Tile States (Chapter 6)
  const [nfcPaired, setNfcPaired] = useState(false);

  const [diagIndex, setDiagIndex] = useState(0);
  const diagStates = [
    { unit: 'RE-01', batt: '95%', battColor: '#24361e', battWidth: '95%', battFillColor: '#00e676', border: '#64748b', tip: '#64748b', caption: 'Unit Battery scan.' },
    { unit: 'RE-03', batt: '46%', battColor: '#ff9800', battWidth: '46%', battFillColor: '#ff9800', border: '#ff9800', tip: '#ff9800', caption: 'Unit Battery scan.' },
    { unit: 'RE-06', batt: '12%', battColor: '#ef4444', battWidth: '12%', battFillColor: '#ef4444', border: '#ef4444', tip: '#ef4444', caption: 'Unit Battery scan.' }
  ];
  const currentDiag = diagStates[diagIndex];

  const [regIndex, setRegIndex] = useState(0);
  const regStates = [
    { num: 'RE-01', tag: 'CH-16', caption: 'RE01 - command unit - online', offline: false, bars: [true, true, true, true, true] },
    { num: 'RE-02', tag: 'CH-08', caption: 'RE02 - medical unit - online', offline: false, bars: [true, true, true, false, false] },
    { num: 'RE-03', tag: 'CH-12', caption: 'RE03 - valley unit - offline', offline: true, bars: [false, false, false, false, false] }
  ];
  const currentReg = regStates[regIndex];

  const [maintIndex, setMaintIndex] = useState(0);

  // Elevation Profile Graph & Interactive Waypoints (Chapter 6)
  const [activeWpt, setActiveWpt] = useState(0);
  const waypoints = [
    { label: 'WPT1', alt: '890m', slope: '10°', risk: 'SAFE', riskClass: 'safe', markerX: '29%', markerY: '19%' },
    { label: 'WPT2', alt: '820m', slope: '38°', risk: 'STEEP INCLINE', riskClass: 'warning', markerX: '42%', markerY: '30%' },
    { label: 'WPT3', alt: '740m', slope: '24°', risk: 'MODERATE', riskClass: 'caution', markerX: '54%', markerY: '39%' },
    { label: 'WPT4', alt: '690m', slope: '45°', risk: 'SLIP ALERT', riskClass: 'critical', markerX: '54%', markerY: '45%' },
    { label: 'WPT5', alt: '580m', slope: '42°', risk: 'SLIP ALERT', riskClass: 'critical', markerX: '54%', markerY: '52%' },
    { label: 'WPT6', alt: '420m', slope: '20°', risk: 'MODERATE', riskClass: 'caution', markerX: '54%', markerY: '58%' }
  ];
  const currentWpt = waypoints[activeWpt];

  // Active Stretcher Callout Item (Chapter 4)
  const [activeCallout, setActiveCallout] = useState(null);

  // Chart.js Canvas Integration (Chapter 2)
  const chartCanvasRef = useRef(null);

  useEffect(() => {
    let rainChart;

    const renderChart = () => {
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
                grid: { color: 'rgba(36, 54, 30, 0.05)' },
                ticks: { color: '#4b5e43', font: { family: "'Montserrat', sans-serif", size: 10 } }
              },
              yRain: {
                type: 'linear',
                position: 'left',
                grid: { color: 'rgba(36, 54, 30, 0.05)' },
                ticks: { color: '#4b5e43', font: { family: "'Montserrat', sans-serif", size: 9 }, callback: (v) => v + 'mm' }
              },
              yRisk: {
                type: 'linear',
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: { color: '#ff4f00', font: { family: "'Montserrat', sans-serif", size: 9 }, callback: (v) => v + '%' }
              }
            }
          }
        });
      }
    };

    if (window.Chart) {
      renderChart();
    } else {
      const scriptId = 'chartjs-cdn-script';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        script.async = true;
        document.body.appendChild(script);
      }
      const handleScriptLoad = () => renderChart();
      script.addEventListener('load', handleScriptLoad);
      
      return () => {
        if (script) {
          script.removeEventListener('load', handleScriptLoad);
        }
        if (rainChart) {
          rainChart.destroy();
        }
      };
    }

    return () => {
      if (rainChart) rainChart.destroy();
    };
  }, []);

  return (
    <div className="project-detail-wrapper" style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      {/* Blueprint Grid Background Pattern */}
      <div className="pattern-bg"></div>

      <Navbar />

      {/* Main Scroll Narrative */}
      <main className="narrative-wrapper">

        {/* Chapter 1: The Hook (Hero) */}
        <section className="story-chapter chapter-hero">
          <div className="chapter-hero-bg" style={{ background: 'linear-gradient(135deg, rgba(255, 79, 0, 0.08) 0%, rgba(19, 19, 19, 0.03) 100%)' }}></div>
          <div className="container hero-content">
            <div className="hero-text-block">
              <span className="label-pill brand-accent-badge">CASE STUDY 02 //</span>
              <h1 className="gsap-split-header brand-hero-title">RESTEASE</h1>
              <p className="brand-hero-subtitle">A phygital disaster response system for <span style={{ whiteSpace: 'nowrap' }}>Debris Flow Landslides</span>.</p>
            </div>
            <div className="project-meta-bar">
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-val">UX Research, Systems Design</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-val">3 Weeks</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Team</span>
                <span className="meta-val">Jetin Krishna, Siddharth Jadhav, Shreya Kulkarni</span>
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
              <div className="bento-card no-tilt" style={{ margin: 0, padding: '24px', borderRadius: '32px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', boxShadow: 'none' }}>
                <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 4px 0' }}>Rainfall vs. Landslide Risk Threshold</h3>
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--brand-text-sub)' }}>Wayanad Monsoon Danger Zones</span>
                <div className="chart-card-wrapper" style={{ height: '180px', marginTop: '14px' }}>
                  <canvas ref={chartCanvasRef}></canvas>
                </div>
              </div>
              <div className="brand-metric-card" style={{ margin: 0, padding: '24px', borderRadius: '32px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="metric-number clash-h1" style={{ fontSize: '4.8rem', color: 'var(--brand-accent)', lineHeight: '1', textShadow: '0 0 32px rgba(255, 79, 0, 0.12)' }}>73%</div>
                <p className="metric-label" style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', textAlign: 'center', margin: '14px 0 0 0', fontWeight: '500', fontFamily: 'var(--font-body)' }}>Of landslides in Wayanad occur during the peak monsoon season (July–Sept). High risk mandates offline location tracking and automatic GPS sharing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Ground Operations & Field UX */}
        <section className="story-chapter chapter-stationary-section" id="field-operations-pin" style={{ padding: 'var(--space-xl) 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'transparent', position: 'relative', zIndex: 4, boxSizing: 'border-box' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', marginBottom: 'var(--space-lg)' }}>
              <span className="mono brand-accent-color">03 / FIELD LEVEL UX</span>
              <h2 className="clash-h2" style={{ color: 'var(--brand-text)', marginTop: '8px', marginBottom: '12px' }}>Ground level response</h2>
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
                  <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 8px 0' }}>Challenging Casualty Evacuation</h3>
                  <p style={{ color: 'var(--brand-text-sub)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>Current stretchers require 10 to 12 rescuers to carry a single casualty across mud-clogged slopes exceeding 30°. The unstable terrain and uneven weight distribution quickly exhaust rescue teams, increasing the risk of slips.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="deck-card" style={{ margin: 0, backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', transition: 'none', transform: 'none', position: 'relative', opacity: 1 }}>
                <div className="slide-image-wrapper" style={{ padding: 0, backgroundColor: '#030213', height: '320px', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-sm)' }}>
                  <img src="/project-details/img/restease_collapsed_tower.jpg" alt="Collapsed Communication Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-info" style={{ margin: 0, padding: 0 }}>
                  <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 8px 0' }}>Connectivity Loss in Disaster Zones</h3>
                  <p style={{ color: 'var(--brand-text-sub)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>Collapsed terrain frequently damages cellular towers and power lines, cutting off communication between field teams, command centers, and stranded survivors. Rescue efforts become slower and more difficult to coordinate.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: The Two-Part Approach & Physical Solution */}
        <section className="story-chapter chapter-physical-solution" style={{ height: 'auto', minHeight: '100vh', overflow: 'visible', padding: '120px 0 80px 0' }}>
          <div className="persona-fullscreen-wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', position: 'relative', width: '100%' }}>
            <div className="container solution-persona-container" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ width: '100%' }}>
                <span className="mono brand-accent-color" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>04 / THE TWO-PART APPROACH</span>
                <h2 className="clash-h2" style={{ color: 'var(--brand-text)', marginTop: '8px', marginBottom: 0 }}>Physical Hardware: The Rescuer Stretcher</h2>
              </div>

              <div className="restease-split-grid">
                {/* Left: Rajesh Persona */}
                <div className="persona-card-animate" style={{ height: '100%', padding: '10px', boxSizing: 'border-box' }}>
                  <div className="persona-card persona-card-interactive" style={{ margin: 0, padding: '32px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', boxSizing: 'border-box', boxShadow: 'none', height: '100%' }}>
                    <div className="persona-top" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', margin: 0, padding: 0, borderBottom: 'none', width: '100%' }}>
                      <div className="persona-avatar-wrap-interactive" style={{ border: '2.5px solid #ffffff', borderRadius: '50%', width: '120px', height: '120px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(10, 17, 40, 0.08)', margin: '0 auto' }}>
                        <img src="/project-details/img/persona_avatar.jpg" alt="Rajesh K. Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="persona-main-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                        <span className="persona-name clash-h3" style={{ fontSize: '1.45rem', color: 'var(--brand-text)', lineHeight: '1.2' }}>Rajesh K.</span>
                        <span className="persona-age" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--brand-text-sub)', opacity: 0.85, fontWeight: '500' }}>38 yrs, NDRF Team Lead // Stretcher Operator</span>
                        <span className="persona-quote" style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--brand-text)', marginTop: '12px', lineHeight: '1.55', display: 'block', maxWidth: '100%', textAlign: 'center', fontWeight: '500' }}>
                          “With the self-leveling stretcher, we can carry casualties down steep muddy slopes without losing balance, and coordinates sync automatically without us touching screens.”
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                      <span className="persona-tag" style={{ fontSize: '0.72rem', fontWeight: '700', padding: '6px 14px', margin: 0, borderRadius: '30px', backgroundColor: 'rgba(255, 79, 0, 0.08)', color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none' }}>Terrain Rescue</span>
                      <span className="persona-tag" style={{ fontSize: '0.72rem', fontWeight: '700', padding: '6px 14px', margin: 0, borderRadius: '30px', backgroundColor: 'rgba(255, 79, 0, 0.08)', color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none' }}>Offline-First</span>
                    </div>

                    <div className="persona-story-section" style={{ borderTop: 'none', paddingTop: '0', margin: 0, textAlign: 'center', width: '100%' }}>
                      <h4 className="section-title" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '8px', textAlign: 'center', textTransform: 'uppercase' }}>FIELD ROLE &amp; SCENARIO</h4>
                      <p className="story-text" style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, textAlign: 'center', fontWeight: '400' }}>
                        Rajesh leads a 12-member squad in landslide zones. The steep hillsides are prone to continuous slides, cellular signals are non-existent, and physical exhaustion drains the squad.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Field Pain Points */}
                <div className="pain-points-animate" style={{ padding: '10px' }}>
                  <span className="mono brand-accent-color" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>FIELD PAIN POINTS &amp; DESIGN DIRECTIONS</span>
                  <h3 className="clash-h3" style={{ fontSize: '1.95rem', color: 'var(--brand-text)', marginTop: '6px', marginBottom: '12px' }}>Optimized for Heavy-Duty Field Usage</h3>
                  <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.65', fontSize: '0.88rem', margin: '0 0 24px 0', fontWeight: '400' }}>
                    Based on field observations and interviews with rescue personnel, the physical stretcher was designed to address the most critical challenges encountered during landslide evacuations.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Card 1 */}
                    <div className="pain-point-item-interactive" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '24px', boxShadow: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="pain-point-bullet" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)', margin: 0 }}></div>
                        <h4 className="clash-h3" style={{ margin: 0, color: 'var(--brand-text)', fontSize: '1.1rem' }}>Carrier Fatigue &amp; Slips</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ color: 'var(--brand-accent)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAIN POINT</span>
                        <p style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, fontWeight: '400' }}>
                          Manual evacuation over steep, debris-covered slopes places excessive physical strain on rescuers, increasing fatigue and reducing stability.
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Self-leveling pivot hinge for stable patient transport.</li>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Torso harness for ergonomic load redistribution.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="pain-point-item-interactive" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '24px', boxShadow: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="pain-point-bullet" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)', margin: 0 }}></div>
                        <h4 className="clash-h3" style={{ margin: 0, color: 'var(--brand-text)', fontSize: '1.1rem' }}>Communication Blackouts</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ color: 'var(--brand-accent)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAIN POINT</span>
                        <p style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, fontWeight: '400' }}>
                          Damaged communication infrastructure isolates rescue teams, making it difficult to coordinate operations and locate field units.
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Offline rescue teams location tracking.</li>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Route logging and safest path recommendations.</li>
                        </ul>
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
                  <h3 className="clash-h3" style={{ fontSize: '1.75rem', color: 'var(--brand-text)', marginTop: 'var(--space-xs)', marginBottom: 'var(--space-sm)' }}>Rescuer Stretcher Engineering</h3>
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
                          onClick={() => setActiveCallout(activeCallout === idx ? null : idx)}
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
        <section className="story-chapter chapter-command-persona" style={{ height: 'auto', minHeight: '100vh', overflow: 'visible', padding: '120px 0 80px 0' }}>
          <div className="persona-fullscreen-wrap" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', position: 'relative', width: '100%' }}>
            <div className="container solution-persona-container" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              <div style={{ width: '100%' }}>
                <span className="mono brand-accent-color" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>05 / COMMAND CENTER SYSTEMS</span>
                <h2 className="clash-h2" style={{ color: 'var(--brand-text)', marginTop: '8px', marginBottom: 0 }}>The Mission Control</h2>
              </div>

              <div className="restease-split-grid">
                {/* Left: Anjali Persona */}
                <div className="persona-card-animate" style={{ height: '100%', padding: '10px', boxSizing: 'border-box' }}>
                  <div className="persona-card persona-card-interactive" style={{ margin: 0, padding: '32px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', boxSizing: 'border-box', boxShadow: 'none', height: '100%' }}>
                    <div className="persona-top" style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center', margin: 0, padding: 0, borderBottom: 'none', width: '100%' }}>
                      <div className="persona-avatar-wrap-interactive" style={{ border: '2.5px solid #ffffff', borderRadius: '50%', width: '120px', height: '120px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(10, 17, 40, 0.08)', margin: '0 auto' }}>
                        <img src="/project-details/img/monitor_avatar.jpg" alt="Dr. Anjali Sen Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div className="persona-main-details" style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                        <span className="persona-name clash-h3" style={{ fontSize: '1.45rem', color: 'var(--brand-text)', lineHeight: '1.2' }}>Dr. Anjali Sen</span>
                        <span className="persona-age" style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--brand-text-sub)', opacity: 0.85, fontWeight: '500' }}>42 yrs, District Disaster Coordinator // Mission Commander</span>
                        <span className="persona-quote" style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--brand-text)', marginTop: '12px', lineHeight: '1.55', display: 'block', maxWidth: '100%', textAlign: 'center', fontWeight: '500' }}>
                          “Every rescue begins at Base Camp. I manage rescue units, equipment, and emergency responses to keep field operations moving safely and efficiently.”
                        </span>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '10px', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                      <span className="persona-tag" style={{ fontSize: '0.72rem', fontWeight: '700', padding: '6px 14px', margin: 0, borderRadius: '30px', backgroundColor: 'rgba(255, 79, 0, 0.08)', color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none' }}>Command Operations</span>
                      <span className="persona-tag" style={{ fontSize: '0.72rem', fontWeight: '700', padding: '6px 14px', margin: 0, borderRadius: '30px', backgroundColor: 'rgba(255, 79, 0, 0.08)', color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none' }}>Resource Management</span>
                    </div>

                    <div className="persona-story-section" style={{ borderTop: 'none', paddingTop: '0', margin: 0, textAlign: 'center', width: '100%' }}>
                      <h4 className="section-title" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '8px', textAlign: 'center', textTransform: 'uppercase' }}>MISSION COMMAND &amp; SCENARIO</h4>
                      <p className="story-text" style={{ fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, textAlign: 'center', fontWeight: '400' }}>
                        As Mission Commander, Anjali leads all rescue operations from Base Camp. She supervises rescue fleet readiness, dispatches teams in response to SOS alerts, oversees equipment allocation and maintenance, and coordinates logistics to support ongoing field missions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Command Pain Points */}
                <div className="pain-points-animate" style={{ padding: '10px' }}>
                  <span className="mono brand-accent-color" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>COMMAND PAIN POINTS &amp; DESIGN DIRECTIONS</span>
                  <h3 className="clash-h3" style={{ fontSize: '1.95rem', color: 'var(--brand-text)', marginTop: '6px', marginBottom: '12px' }}>Optimized for Base Camp Operations</h3>
                  <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.65', fontSize: '0.88rem', margin: '0 0 24px 0', fontWeight: '400' }}>
                    Based on observations of command center workflows and emergency logistics, the RestEase app was designed to address the operational challenges faced by mission commanders during landslide rescue operations.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Card 1 */}
                    <div className="pain-point-item-interactive" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '24px', boxShadow: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="pain-point-bullet" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)', margin: 0 }}></div>
                        <h4 className="clash-h3" style={{ margin: 0, color: 'var(--brand-text)', fontSize: '1.1rem' }}>Limited Visibility of Field Teams</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ color: 'var(--brand-accent)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAIN POINT</span>
                        <p style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, fontWeight: '400' }}>
                          Once rescue units are dispatched, Base Camp has limited visibility into their location and status. If a team becomes stranded or requires assistance, coordinating support becomes slow and uncertain.
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Live GPS tracking of dispatched rescue units.</li>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Automated SOS alerts with precise location sharing.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="pain-point-item-interactive" style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px', backgroundColor: 'var(--brand-card-bg)', border: '1px solid var(--brand-border)', borderRadius: '24px', boxShadow: 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div className="pain-point-bullet" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)', margin: 0 }}></div>
                        <h4 className="clash-h3" style={{ margin: 0, color: 'var(--brand-text)', fontSize: '1.1rem' }}>Inventory &amp; Fleet Management</h4>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ color: 'var(--brand-accent)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PAIN POINT</span>
                        <p style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'var(--brand-text-sub)', margin: 0, fontWeight: '400' }}>
                          Managing rescue stretchers and critical equipment across multiple missions is difficult in high-stress environments, leading to misplaced assets, delayed deployment, and inefficient resource allocation.
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <span style={{ color: 'var(--brand-text)', fontWeight: '700', fontFamily: 'var(--font-body)', fontSize: '0.72rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>DESIGN DIRECTIONS</span>
                        <ul style={{ margin: 0, paddingLeft: '16px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Live inventory tracking and equipment assignment.</li>
                          <li style={{ fontSize: '0.84rem', color: 'var(--brand-text-sub)', lineHeight: '1.5' }}>Fleet dashboard with stretcher availability and deployment status.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-chapter chapter-gallery-pin" id="district-command-pin" style={{ background: 'transparent' }}>
          <div className="container gallery-pin-header" style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', boxSizing: 'border-box', padding: '80px var(--space-md) 0 var(--space-md)' }}>
            <span className="mono brand-accent-color" style={{ color: 'var(--brand-accent)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase' }}>06 / SYSTEM OVERVIEW</span>
            <h2 className="clash-h2" style={{ color: 'var(--brand-text)', marginTop: '8px', marginBottom: '12px' }}>How the System works</h2>
            <p style={{ color: 'var(--brand-text-sub)', lineHeight: '1.65', fontSize: '0.92rem', margin: 0, maxWidth: '900px' }}>
              The RestEase App applies systems thinking to enable the Rescue Base Camp to monitor rescue teams by automatically receiving GPS coordinates from each stretcher. It also records evacuation routes, helping identify and recommend safer paths for future rescue missions based on previously traversed terrain and rescue outcomes.
            </p>
          </div>

          <div className="gallery-horizontal-container" style={{ width: '100%', flexGrow: 1, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="gallery-horizontal-track">
              {/* Card 1: Route Mapping & Elevation Profiling */}
              <div className="restease-scroll-card">
                {/* Top Widget Container */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--brand-border)', borderRadius: '20px', padding: '16px', display: 'flex', gap: '16px', flex: 1, boxSizing: 'border-box', alignItems: 'stretch', minHeight: 0 }}>
                  {/* Left: 3D Terrain Illustration */}
                  <div style={{ height: '100%', aspectRatio: '1 / 1', position: 'relative', borderRadius: '14px', overflow: 'hidden', flexShrink: 0 }}>
                    <img src="/project-details/img/landslide_isometric.jpg" alt="3D Terrain Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    
                    {/* SVG dashed route path overlay */}
                    <svg viewBox="0 0 400 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                      <path d="M 216,232 L 216,156 L 100,64" stroke="#00e676" fill="none" strokeWidth="3.5" strokeDasharray="6,4" />
                    </svg>

                    {/* Base DEOC Marker (Green) */}
                    <div style={{ position: 'absolute', top: '16%', left: '25%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00e676', boxShadow: '0 0 8px #00e676' }}></div>
                      <div style={{ background: '#ffffff', color: 'var(--brand-text)', fontSize: '0.62rem', fontWeight: 'bold', padding: '3px 8px', borderRadius: '6px', marginTop: '4px', boxShadow: '0 4px 12px rgba(10, 17, 40, 0.08)', border: '1.5px solid var(--brand-border)', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)' }}>Base DEOC</div>
                    </div>

                    {/* Rescue Unit 01 Marker (Orange - Dynamic!) */}
                    <div style={{ position: 'absolute', top: currentWpt.markerY, left: currentWpt.markerX, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff4f00', animation: 'pulseDot 1.5s infinite' }}></div>
                      <div style={{ background: '#ffffff', color: 'var(--brand-text)', fontSize: '0.62rem', fontWeight: 'bold', padding: '3px 8px', borderRadius: '6px', marginTop: '4px', boxShadow: '0 4px 12px rgba(10, 17, 40, 0.08)', border: '1.5px solid var(--brand-border)', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)' }}>Rescue Unit 01</div>
                    </div>

                    {/* Casualty Site Marker (Red) */}
                    <div style={{ position: 'absolute', top: '58%', left: '54%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff1744', boxShadow: '0 0 8px #ff1744' }}></div>
                      <div style={{ background: '#ffffff', color: 'var(--brand-text)', fontSize: '0.62rem', fontWeight: 'bold', padding: '3px 8px', borderRadius: '6px', marginTop: '4px', boxShadow: '0 4px 12px rgba(10, 17, 40, 0.08)', border: '1.5px solid var(--brand-border)', whiteSpace: 'nowrap', fontFamily: 'var(--font-body)' }}>Casualty Site</div>
                    </div>
                  </div>

                  {/* Right: Elevation Profile Graph */}
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '8px' }}>
                    <div>
                      <span style={{ color: '#00b4d8', fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>ROUTE PROFILE</span>
                      
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'stretch', height: '180px', position: 'relative' }}>
                        {/* Y Axis Labels */}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', paddingRight: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--brand-text-sub)', width: '32px', boxSizing: 'border-box' }}>
                          <span>900m</span>
                          <span>700m</span>
                          <span>500m</span>
                          <span>300m</span>
                        </div>

                        {/* Bars Container */}
                        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '8px 12px 0 12px', borderLeft: '1.5px solid var(--brand-border)', borderBottom: '1.5px solid var(--brand-border)', boxSizing: 'border-box', overflow: 'visible' }}>
                          {waypoints.map((wpt, idx) => {
                            const safetyColors = {
                              safe: {
                                primary: '#00e676', // Green
                                grad: 'linear-gradient(180deg, #00e676 0%, rgba(0, 230, 118, 0.15) 100%)',
                                glow: 'rgba(0, 230, 118, 0.35)',
                                bg: 'rgba(0, 230, 118, 0.08)',
                                border: 'rgba(0, 230, 118, 0.25)'
                              },
                              caution: {
                                primary: '#ffd600', // Yellow
                                grad: 'linear-gradient(180deg, #ffd600 0%, rgba(255, 214, 0, 0.15) 100%)',
                                glow: 'rgba(255, 214, 0, 0.35)',
                                bg: 'rgba(255, 214, 0, 0.08)',
                                border: 'rgba(255, 214, 0, 0.25)'
                              },
                              warning: {
                                primary: '#ff9100', // Orange
                                grad: 'linear-gradient(180deg, #ff9100 0%, rgba(255, 145, 0, 0.15) 100%)',
                                glow: 'rgba(255, 145, 0, 0.35)',
                                bg: 'rgba(255, 145, 0, 0.08)',
                                border: 'rgba(255, 145, 0, 0.25)'
                              },
                              critical: {
                                primary: '#ff1744', // Red
                                grad: 'linear-gradient(180deg, #ff1744 0%, rgba(255, 23, 68, 0.15) 100%)',
                                glow: 'rgba(255, 23, 68, 0.35)',
                                bg: 'rgba(255, 23, 68, 0.08)',
                                border: 'rgba(255, 23, 68, 0.25)'
                              }
                            };
                            const config = safetyColors[wpt.riskClass] || safetyColors.safe;
                            return (
                              <div
                                key={idx}
                                onClick={() => setActiveWpt(idx)}
                                onMouseEnter={() => setActiveWpt(idx)}
                                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', cursor: 'pointer' }}
                              >
                                <div style={{
                                  width: '12px',
                                  height: idx === 0 ? '90%' : idx === 1 ? '80%' : idx === 2 ? '70%' : idx === 3 ? '62%' : idx === 4 ? '50%' : '35%',
                                  background: config.grad,
                                  borderRadius: '12px 12px 0 0',
                                  opacity: activeWpt === idx ? 1 : 0.6,
                                  transform: activeWpt === idx ? 'scale(1.2)' : 'none',
                                  boxShadow: activeWpt === idx ? `0 0 12px ${config.glow}` : 'none',
                                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                                }}></div>
                                <span style={{ fontSize: '0.55rem', color: activeWpt === idx ? 'var(--brand-text)' : 'var(--brand-text-sub)', fontFamily: 'var(--font-mono)', marginTop: '4px', fontWeight: activeWpt === idx ? 'bold' : 'normal' }}>{wpt.label}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div style={{ textAlign: 'center', fontSize: '0.58rem', color: 'var(--brand-text-sub)', fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', marginTop: '8px', fontWeight: 600 }}>GPS WAYPOINTS</div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px' }}>
                      <div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ALTITUDE</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-text)' }}>{currentWpt.alt}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>INCLINE</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-text)' }}>{currentWpt.slope}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>STATUS</span>
                        {(() => {
                          const safetyColors = {
                            safe: { primary: '#00e676', bg: 'rgba(0, 230, 118, 0.08)', border: 'rgba(0, 230, 118, 0.25)' },
                            caution: { primary: '#ffd600', bg: 'rgba(255, 214, 0, 0.08)', border: 'rgba(255, 214, 0, 0.25)' },
                            warning: { primary: '#ff9100', bg: 'rgba(255, 145, 0, 0.08)', border: 'rgba(255, 145, 0, 0.25)' },
                            critical: { primary: '#ff1744', bg: 'rgba(255, 23, 68, 0.08)', border: 'rgba(255, 23, 68, 0.25)' }
                          };
                          const currentConfig = safetyColors[currentWpt.riskClass] || safetyColors.safe;
                          return (
                            <span style={{
                              fontSize: '0.65rem',
                              fontWeight: 700,
                              color: currentConfig.primary,
                              backgroundColor: currentConfig.bg,
                              border: `1px solid ${currentConfig.border}`,
                              padding: '3px 12px',
                              borderRadius: '6px',
                              textTransform: 'uppercase',
                              display: 'inline-block'
                            }}>{currentWpt.risk}</span>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Text Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="clash-h3" style={{ margin: '0', color: 'var(--brand-text)' }}>01 / Route Mapping &amp; Elevation Profiling</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--brand-text-sub)' }}>
                    Tracks every evacuation route as a sequence of GPS waypoints (WPTs). Each waypoint records latitude, longitude, and altitude, enabling the system to generate an elevation profile that helps Base Camp monitor terrain gradients, mission progress, and potential hazard zones.
                  </p>
                </div>
              </div>

              {/* Card 2: Fleet Inventory System */}
              <div className="restease-scroll-card">
                {/* Top Widget Container */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--brand-border)', borderRadius: '20px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1, boxSizing: 'border-box', minHeight: 0 }}>
                  <span style={{ color: 'var(--brand-accent)', fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>CONNECTED STRETCHER INVENTORY</span>
                  
                  <div className="restease-inventory-grid">
                    
                    {/* Tile 1: NFC Registration */}
                    <div className={`bento-tile tile-stretchers ${nfcPaired ? 'paired' : ''}`} onClick={() => setNfcPaired(!nfcPaired)} style={{ padding: '12px', borderRadius: '16px', background: 'var(--brand-card-bg)', border: '1.5px solid var(--brand-border)', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--brand-text-sub)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>NFC Registration</span>
                        <div className="clash-h3" style={{ margin: '4px 0', color: 'var(--brand-text)' }}>
                          <span>{nfcPaired ? '12' : '11'}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--brand-text-sub)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>/12 paired</span>
                        </div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', lineHeight: '1.2' }}>Unique tag links stretcher identity.</span>
                      </div>
                      
                      <div className="nfc-scanner-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', position: 'relative', overflow: 'visible', flexShrink: 0, alignSelf: 'center' }}>
                        <div className="nfc-ghost" style={{ position: 'absolute', width: '46px', height: '46px', borderRadius: '9px', border: '1.2px dashed rgba(255, 79, 0, 0.25)', boxSizing: 'border-box', transition: 'all 0.4s ease-in-out', opacity: nfcPaired ? 0 : 1 }}></div>
                        <div className="nfc-diamond" style={{ position: 'absolute', width: nfcPaired ? '42px' : '36px', height: nfcPaired ? '42px' : '36px', borderRadius: nfcPaired ? '10px' : '8px', border: nfcPaired ? '2px solid #00e676' : '2px dashed var(--brand-accent)', background: nfcPaired ? 'rgba(0, 230, 118, 0.08)' : 'rgba(255, 79, 0, 0.08)', boxSizing: 'border-box', transition: 'all 0.4s ease-in-out' }}></div>
                        
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px' }}>
                          {!nfcPaired ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-accent)' }}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <rect x="6" y="2" width="12" height="20" rx="2.5"></rect>
                                <circle cx="12" cy="6" r="1" fill="currentColor" strokeWidth="0"></circle>
                                <path d="M 8 20 A 3 3 0 0 1 11 17"></path>
                              </svg>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00e676' }}>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tile 2: Unit Diagnostics */}
                    <div className="bento-tile tile-power" onClick={() => setDiagIndex((diagIndex + 1) % diagStates.length)} style={{ padding: '12px', borderRadius: '16px', background: 'var(--brand-card-bg)', border: '1.5px solid var(--brand-border)', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--brand-text-sub)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Unit Diagnostics // {currentDiag.unit}</span>
                        <div className="clash-h3" style={{ margin: '4px 0', color: currentDiag.battColor || 'var(--brand-text)' }}>
                          <span>{currentDiag.batt}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--brand-text-sub)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}> batt</span>
                        </div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', lineHeight: '1.2' }}>{currentDiag.caption}</span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '52px', flexShrink: 0, alignSelf: 'center' }}>
                        <div className="battery-icon-wrap" style={{ margin: 0, position: 'relative' }}>
                          <div className="battery-body" style={{ width: '40px', height: '15px', border: `1.5px solid ${currentDiag.border}`, borderRadius: '3px', padding: '1px', boxSizing: 'border-box', transition: 'border-color 0.4s' }}>
                            <div className="battery-level-fill diag-battery" style={{ width: currentDiag.battWidth, backgroundColor: currentDiag.battFillColor, height: '100%', borderRadius: '1px', transition: 'width 0.4s, background-color 0.4s' }}></div>
                          </div>
                          <div className="battery-tip" style={{ backgroundColor: currentDiag.tip, transition: 'background-color 0.4s', width: '2px', height: '6px', top: '4px', right: '-3px' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Tile 3: Fleet Registry */}
                    <div className="bento-tile tile-satellite" onClick={() => setRegIndex((regIndex + 1) % regStates.length)} style={{ padding: '12px', borderRadius: '16px', background: 'var(--brand-card-bg)', border: '1.5px solid var(--brand-border)', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--brand-text-sub)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Fleet Registry</span>
                        <div className="clash-h3" style={{ margin: '4px 0', color: 'var(--brand-text)' }}>{currentReg.num}</div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', lineHeight: '1.2' }}>{currentReg.caption}</span>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', width: '52px', flexShrink: 0, alignSelf: 'center' }}>
                        <div className="reg-chan-tag" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: currentReg.offline ? '#f87171' : '#ff4f00', background: currentReg.offline ? 'rgba(248, 113, 113, 0.08)' : 'rgba(255, 79, 0, 0.08)', padding: '2px 4px', borderRadius: '4px', border: `1px solid ${currentReg.offline ? 'rgba(248, 113, 113, 0.2)' : 'rgba(255, 79, 0, 0.15)'}`, fontWeight: 'bold', transition: 'all 0.3s' }}>{currentReg.tag}</div>
                        
                        <div className="reg-signal-wrapper" style={{ height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '32px' }}>
                          <div className="signal-bars reg-signal-bars" style={{ margin: 0, display: 'flex', gap: '2px', alignItems: 'flex-end', height: '12px', width: '100%' }}>
                            {currentReg.bars.map((active, bIdx) => (
                              <div key={bIdx} className={`sig-bar bar-${bIdx + 1} ${active ? 'active' : ''}`} style={{ width: '4px', borderRadius: '1px', backgroundColor: !active ? 'transparent' : (bIdx === 4 && currentReg.tag === 'CH-16') ? '#00e676' : 'var(--brand-text)' }}></div>
                            ))}
                          </div>
                          {currentReg.offline && (
                            <svg className="reg-no-signal-slash" width="32" height="12" viewBox="0 0 32 12" fill="none" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
                              <line x1="2" y1="10" x2="30" y2="2" stroke="#f87171" strokeWidth="2" strokeLinecap="round"></line>
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Tile 4: Maintenance Log */}
                    <div className="bento-tile tile-troops" onClick={() => setMaintIndex((maintIndex + 1) % 3)} style={{ padding: '12px', borderRadius: '16px', background: 'var(--brand-card-bg)', border: '1.5px solid var(--brand-border)', cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'stretch', gap: '10px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', flexGrow: 1 }}>
                        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--brand-text-sub)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Maintenance Log</span>
                        <div className="clash-h3" style={{ margin: '4px 0', color: 'var(--brand-text)' }}>
                          <span className="maint-num" style={{ color: maintIndex === 1 ? '#f87171' : maintIndex === 2 ? '#ef4444' : '' }}>{maintIndex === 0 ? '0' : '2'}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--brand-text-sub)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{maintIndex === 0 ? ' pending' : maintIndex === 1 ? ' flagged' : ' active'}</span>
                        </div>
                        <span style={{ fontSize: '0.58rem', color: 'var(--brand-text-sub)', lineHeight: '1.2' }}>{maintIndex === 0 ? 'Logs inspection and repair history.' : maintIndex === 1 ? 'Click to view active flag details.' : 'Click to clear pending logs.'}</span>
                      </div>
                      
                      <div className="maint-visual-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: '4px', width: '80px', flexShrink: 0, textAlign: 'right', alignSelf: 'center' }}>
                        {maintIndex === 0 ? (
                          <>
                            <div className="maint-cert-badge" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#00e676', background: 'rgba(0, 230, 118, 0.08)', padding: '2px 4px', borderRadius: '4px', border: '1px solid rgba(0, 230, 118, 0.15)', fontWeight: 'bold', marginBottom: '4px' }}>VERIFIED</div>
                            <div className="personnel-dot-matrix maint-dot-matrix" style={{ margin: 0, display: 'flex', gap: '3px' }}>
                              <div className="troop-dot active maint-dot" style={{ backgroundColor: '#00e676', width: '6px', height: '6px' }}></div>
                              <div className="troop-dot active maint-dot" style={{ backgroundColor: '#00e676', width: '6px', height: '6px' }}></div>
                              <div className="troop-dot active maint-dot" style={{ backgroundColor: '#00e676', width: '6px', height: '6px' }}></div>
                              <div className="troop-dot active maint-dot" style={{ backgroundColor: '#00e676', width: '6px', height: '6px' }}></div>
                            </div>
                          </>
                        ) : maintIndex === 1 ? (
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '100%', lineHeight: '1.2' }}>
                            <div style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                              <span>⚠️</span> <span>2 Flagged</span>
                            </div>
                            <div style={{ color: '#00e676', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                              <span>✓</span> <span>17 Resolved</span>
                            </div>
                          </div>
                        ) : (
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '100%', lineHeight: '1.2' }}>
                            <div style={{ textAlign: 'right' }}>
                              <div style={{ color: 'var(--brand-text)', fontWeight: 700, fontSize: '0.65rem' }}>RE-04</div>
                              <div style={{ color: '#f87171', fontWeight: 500, fontSize: '0.58rem' }}>Battery replaced</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Text Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 className="clash-h3" style={{ margin: '0', color: 'var(--brand-text)' }}>02 / Fleet Inventory System</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--brand-text-sub)' }}>
                    Every RestEase stretcher is assigned a unique NFC-linked digital identity. The system tracks equipment health, communication status, assigned personnel, radio channels, and maintenance history, enabling Base Camp to monitor fleet readiness and deploy assets efficiently during rescue operations.
                  </p>
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

      {/* Full-Width Project Footer */}
      <Footer prevProject={{ label: 'EMBERQUIT', to: '/project-details/emberquit' }} nextProject={{ label: 'F1 DASHBOARD', to: '/project-details/f1_dashboard' }} />
    </div>
  );
}
