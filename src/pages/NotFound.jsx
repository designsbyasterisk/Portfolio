import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      {/* Blueprint Grid Background Pattern */}
      <div className="pattern-bg"></div>

      {/* Floating Island Navbar */}
      <Navbar badgeLabel="404 ERROR" />

      {/* Main 404 Content */}
      <main style={{ paddingTop: '110px', paddingBottom: 'var(--space-xl)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
        <div className="container">
          <div className="bento-grid" style={{ alignItems: 'stretch' }}>
            
            {/* Left Card: Dynamic Centerpiece and primary action */}
            <div className="bento-card col-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(24px, 4vw, 48px)', minHeight: '480px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="mono" style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent-text, var(--color-blue))', letterSpacing: '0.1em', textTransform: 'uppercase', backgroundColor: 'var(--accent-glow, rgba(42, 101, 212, 0.08))', padding: '4px 10px', borderRadius: '6px' }}>
                    ERROR CODE 404
                  </span>
                </div>
                <h1 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: '1.05', margin: '0 0 var(--space-sm) 0', color: 'var(--text-main)' }}>
                  LOST IN THE GRID?
                </h1>
                <p className="text-lead" style={{ maxWidth: '520px', marginBottom: 'var(--space-md)', fontSize: '1.05rem', color: 'var(--text-sub)' }}>
                  The page or coordinates cluster you were looking for doesn't exist, has been moved, or collapsed into an undefined state.
                </p>
              </div>

              {/* Interactive SVG Centerpiece representing a disconnected geometric grid */}
              <div style={{ display: 'flex', justifyContent: 'center', margin: 'var(--space-md) 0', height: '140px', position: 'relative' }}>
                <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                  <style dangerouslySetInnerHTML={{ __html: `
                    @keyframes spin-deconstructed {
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                    }
                    @keyframes pulse-disconnected {
                      0%, 100% { opacity: 0.2; transform: scale(0.96); }
                      50% { opacity: 0.8; transform: scale(1.04); }
                    }
                    @keyframes float-grid {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      50% { transform: translateY(-4px) rotate(0.5deg); }
                    }
                    .svg-grid-bg {
                      animation: float-grid 6s ease-in-out infinite;
                      transform-origin: center;
                    }
                    .broken-spoke-1 {
                      animation: spin-deconstructed 20s linear infinite;
                      transform-origin: 50px 60px;
                    }
                    .broken-spoke-2 {
                      animation: spin-deconstructed 12s linear infinite reverse;
                      transform-origin: 170px 60px;
                    }
                    .pulse-glow {
                      animation: pulse-disconnected 3s ease-in-out infinite;
                      transform-origin: center;
                    }
                  ` }} />
                  
                  {/* Grid System Lines */}
                  <g className="svg-grid-bg" stroke="rgba(10, 17, 40, 0.08)" strokeWidth="1">
                    <line x1="10" y1="60" x2="210" y2="60" />
                    <line x1="50" y1="10" x2="50" y2="110" />
                    <line x1="170" y1="10" x2="170" y2="110" strokeDasharray="3,3" />
                    <line x1="110" y1="10" x2="110" y2="110" />
                    <circle cx="110" cy="60" r="40" stroke="rgba(10, 17, 40, 0.04)" />
                  </g>

                  {/* Broken Anchor Point 1 */}
                  <g className="broken-spoke-1">
                    <circle cx="50" cy="60" r="16" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4,2" fill="none" />
                    <circle cx="50" cy="60" r="4" fill="var(--accent)" />
                    <line x1="50" y1="60" x2="50" y2="35" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="50" y1="60" x2="70" y2="70" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />
                  </g>

                  {/* Intersecting connecting vector line - disconnected/dotted */}
                  <path d="M 50,60 Q 110,90 170,60" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5,4" className="pulse-glow" />

                  {/* Broken Anchor Point 2 */}
                  <g className="broken-spoke-2">
                    <circle cx="170" cy="60" r="22" stroke="var(--color-tangerine, #FD7903)" strokeWidth="1.5" strokeDasharray="3,3" fill="none" />
                    <circle cx="170" cy="60" r="4" fill="var(--color-tangerine, #FD7903)" />
                    <line x1="170" y1="60" x2="185" y2="45" stroke="var(--color-tangerine, #FD7903)" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="170" y1="60" x2="150" y2="70" stroke="var(--color-tangerine, #FD7903)" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                  
                  {/* Visual warning/error pulse */}
                  <circle cx="110" cy="72" r="6" fill="#ef4444" className="pulse-glow" />
                </svg>
              </div>

              <div>
                <Button to="/" variant="primary" className="magnetic" style={{ padding: '14px 28px', fontSize: '1rem' }}>
                  RETURN TO SAFETY
                </Button>
              </div>
            </div>

            {/* Right Card: Bento Recovery Paths Index */}
            <div className="bento-card col-5" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'clamp(24px, 4vw, 48px)' }}>
              <div>
                <span className="mono" style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-sub)', letterSpacing: '0.15em', display: 'block', marginBottom: 'var(--space-md)' }}>
                  RECOVERY INDEX
                </span>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: '01 // EMBERQUIT', path: '/project-details/emberquit', category: 'CASE STUDY' },
                    { label: '02 // RESTEASE', path: '/project-details/restease', category: 'CASE STUDY' },
                    { label: '03 // F1 TELEMETRY', path: '/project-details/f1_dashboard', category: 'CASE STUDY' },
                    { label: '04 // HONÉE', path: '/project-details/honee', category: 'CASE STUDY' },
                    { label: '05 // ABOUT & RESUME', path: '/resume', category: 'PROFILE' }
                  ].map((route, idx) => (
                    <Link
                      key={idx}
                      to={route.path}
                      className="recovery-link-row"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 20px',
                        backgroundColor: 'var(--bg-canvas)',
                        border: '1px solid var(--bento-border)',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span className="font-display" style={{ fontSize: '0.92rem', fontWeight: '600', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                          {route.label}
                        </span>
                        <span className="mono" style={{ fontSize: '0.62rem', color: 'var(--text-sub)', opacity: 0.8, letterSpacing: '0.05em' }}>
                          {route.category}
                        </span>
                      </div>
                      <span className="recovery-link-arrow" style={{ fontSize: '1rem', transition: 'transform 0.3s ease', transform: 'translateX(0)' }}>
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 'var(--space-md)', paddingTop: '16px', borderTop: '1px dashed var(--bento-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-sub)', fontWeight: '500' }}>
                  Need support?
                </span>
                <a href="mailto:designsbyasterisk@gmail.com" className="font-display" style={{ fontSize: '0.82rem', color: 'var(--accent)', textDecoration: 'none', fontWeight: '700', letterSpacing: '0.02em' }}>
                  REPORT ISSUE ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Styled components for hover transitions */}
      <style dangerouslySetInnerHTML={{ __html: `
        .recovery-link-row:hover {
          background-color: var(--accent-glow, rgba(42, 101, 212, 0.06)) !important;
          border-color: var(--accent) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10, 17, 40, 0.03);
        }
        .recovery-link-row:hover .recovery-link-arrow {
          transform: translateX(4px) !important;
          color: var(--accent);
        }
      ` }} />
    </>
  );
}
