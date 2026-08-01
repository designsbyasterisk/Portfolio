import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ badgeLabel, className = '', style = {} }) {
  const location = useLocation();

  const isResume = location.pathname.startsWith('/resume');
  const isHome = location.pathname === '/' || location.pathname === '/index.html';

  // Determine left label and right link target based on route
  let leftLabel = badgeLabel;
  let rightLinkText = 'PORTFOLIO';
  let rightLinkTarget = '/';

  if (!leftLabel) {
    if (isResume) {
      leftLabel = 'ABOUT ME';
      rightLinkText = 'PORTFOLIO';
      rightLinkTarget = '/';
    } else if (isHome) {
      leftLabel = 'PORTFOLIO';
      rightLinkText = 'ABOUT ME';
      rightLinkTarget = '/resume';
    } else if (location.pathname.includes('emberquit')) {
      leftLabel = 'EMBERQUIT';
      rightLinkText = 'PORTFOLIO';
      rightLinkTarget = '/';
    } else if (location.pathname.includes('restease')) {
      leftLabel = 'RESTEASE';
      rightLinkText = 'PORTFOLIO';
      rightLinkTarget = '/';
    } else if (location.pathname.includes('f1_dashboard')) {
      leftLabel = 'F1 DASHBOARD';
      rightLinkText = 'PORTFOLIO';
      rightLinkTarget = '/';
    } else if (location.pathname.includes('honee')) {
      leftLabel = 'HONÉE';
      rightLinkText = 'PORTFOLIO';
      rightLinkTarget = '/';
    } else {
      leftLabel = 'PORTFOLIO';
      rightLinkText = 'ABOUT ME';
      rightLinkTarget = '/resume';
    }
  }

  const DARK_COLOR = '#0A1128';

  const textStyle = {
    fontSize: '0.82rem',
    fontWeight: 500,
    color: DARK_COLOR,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    transform: 'translateY(1px)' // Optical center adjustment for cap-height
  };

  return (
    <header
      className={`floating-header no-print ${className}`.trim()}
      style={{
        height: '50px',
        maxHeight: '50px',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        border: '1px solid rgba(10, 17, 40, 0.08)',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(10, 17, 40, 0.05)',
        display: 'flex',
        alignItems: 'center',
        padding: 0,
        margin: 0,
        ...style
      }}
    >
      <div
        className="container nav-wrapper"
        style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: '0 24px',
          boxSizing: 'border-box',
          margin: '0 auto'
        }}
      >
        {/* Left Side: Solid Dark Asterisk Logo + Current Page Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '100%' }}>
          <Link
            to="/"
            className="logo"
            aria-label="Home"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              width: '24px',
              height: '24px',
              lineHeight: 0
            }}
          >
            <svg width="24" height="24" viewBox="0 0 1514 1287" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible', display: 'block' }}>
              <style>{`
                @keyframes kf_Frame_8_transform_0 {
                  0% { transform: translate(757px, 643.5px) rotate(6.283rad) translate(-757px, -643.5px); }
                  100% { transform: translate(757px, 643.5px) rotate(-6.283rad) translate(-757px, -643.5px); }
                }
                .asterisk-spin-group, #Frame_8 {
                  transform-origin: 0 0;
                  animation: kf_Frame_8_transform_0 1.074s linear infinite;
                  animation-play-state: paused !important;
                }
                .logo:hover .asterisk-spin-group,
                .logo:hover #Frame_8,
                a:hover .asterisk-spin-group,
                svg:hover .asterisk-spin-group {
                  animation-play-state: running !important;
                }
              `}</style>
              <g className="asterisk-spin-group" id="Frame_8" fill={DARK_COLOR}>
                <path d="M559.56 757.221C564.269 748.959 558.296 738.691 548.786 738.7L4.99175 739.189C3.07642 739.191 1.88359 737.112 2.85193 735.459L114.747 544.504C115.192 543.746 116.004 543.279 116.883 543.279L676.027 542.775C679.584 542.772 682.866 540.862 684.628 537.772L989.929 2.06869C990.369 1.29605 991.19 0.818692 992.079 0.817891L1208.75 0.622788C1210.64 0.621087 1211.83 2.64816 1210.92 4.30033L923.126 524.155C918.552 532.416 924.532 542.551 933.975 542.543L1508.13 542.026C1510.05 542.024 1511.24 544.122 1510.26 545.774L1396.16 736.732C1395.72 737.48 1394.91 737.938 1394.04 737.939L810.314 738.464C806.713 738.468 803.397 740.424 801.653 743.575L503.544 1282.07C503.108 1282.85 502.279 1283.34 501.378 1283.34L263.863 1283.56C261.961 1283.56 260.767 1281.5 261.709 1279.85L559.56 757.221Z" fill={DARK_COLOR} fillOpacity="1" style={{ fill: DARK_COLOR, fillOpacity: 1 }} />
                <path d="M673.578 180.373C673.862 180.786 674.014 181.274 674.015 181.775L674.325 526.123C674.327 528.565 669.797 529.537 669.797 527.516L314.603 4.19047C313.487 2.54628 314.664 0.323334 316.651 0.321545L548.26 0.11299C549.076 0.112255 549.84 0.513721 550.303 1.18629L673.578 180.373Z" fill={DARK_COLOR} fillOpacity="1" style={{ fill: DARK_COLOR, fillOpacity: 1 }} />
                <path d="M815.897 1106C815.613 1105.59 815.461 1105.1 815.46 1104.6L815.15 760.248C815.148 757.806 818.307 756.834 819.678 758.854L1174.87 1282.18C1175.99 1283.82 1174.81 1286.05 1172.82 1286.05L941.215 1286.26C940.399 1286.26 939.635 1285.86 939.172 1285.18L815.897 1106Z" fill={DARK_COLOR} fillOpacity="1" style={{ fill: DARK_COLOR, fillOpacity: 1 }} />
              </g>
            </svg>
          </Link>
          <span className="font-display" style={textStyle}>
            {leftLabel}
          </span>
        </div>

        {/* Right Side: Navigation Link */}
        <nav style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Link to={rightLinkTarget} className="font-display" style={textStyle}>
            {rightLinkText}
          </Link>
        </nav>

      </div>
    </header>
  );
}
