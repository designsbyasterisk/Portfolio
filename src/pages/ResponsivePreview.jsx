import React, { useState } from 'react';

const DEVICE_PRESETS = [
  { id: 'desktop', name: '🖥️ Desktop Widescreen', width: 1440, height: 900, scale: 0.75 },
  { id: 'ipad-landscape', name: '💻 iPad Landscape', width: 1024, height: 768, scale: 0.85 },
  { id: 'ipad-portrait', name: '📱 iPad Portrait', width: 768, height: 1024, scale: 0.7 },
  { id: 'mobile', name: '📲 Mobile Portrait', width: 375, height: 812, scale: 0.85 },
];

const PAGES = [
  { label: 'Home (Portfolio)', path: '/' },
  { label: 'About Me (Resume)', path: '/resume' },
  { label: 'Emberquit Case Study', path: '/project-details/emberquit' },
  { label: 'Restease Case Study', path: '/project-details/restease' },
  { label: 'F1 Telemetry Dashboard', path: '/project-details/f1_dashboard' },
  { label: 'Honée Case Study', path: '/project-details/honee' },
];

export default function ResponsivePreview() {
  const [selectedDevice, setSelectedDevice] = useState(DEVICE_PRESETS[0]);
  const [selectedPage, setSelectedPage] = useState(PAGES[0].path);
  const [customScale, setCustomScale] = useState(1);

  const effectiveScale = selectedDevice.scale * customScale;

  return (
    <div style={{ minHeight: '100vh', background: '#0a0d14', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Controls Bar */}
      <header style={{ background: '#141a26', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', zIndex: 100 }}>
        
        {/* Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8' }}>⚡ Dev Viewport Simulator</span>
          <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: 'rgba(56,189,248,0.15)', color: '#38bdf8', fontWeight: 600 }}>LOCAL DEV ONLY</span>
        </div>

        {/* Page Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>PAGE:</label>
          <select 
            value={selectedPage} 
            onChange={(e) => setSelectedPage(e.target.value)}
            style={{ background: '#0f172a', color: '#f8fafc', border: '1px solid #334155', borderRadius: '6px', padding: '6px 12px', fontSize: '0.85rem', cursor: 'pointer', outline: 'none' }}
          >
            {PAGES.map((p) => (
              <option key={p.path} value={p.path}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Device Switcher Buttons */}
        <div style={{ display: 'flex', gap: '6px', background: '#0f172a', padding: '4px', borderRadius: '8px', border: '1px solid #334155' }}>
          {DEVICE_PRESETS.map((dev) => (
            <button
              key={dev.id}
              onClick={() => setSelectedDevice(dev)}
              style={{
                background: selectedDevice.id === dev.id ? '#38bdf8' : 'transparent',
                color: selectedDevice.id === dev.id ? '#0f172a' : '#94a3b8',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {dev.name}
            </button>
          ))}
        </div>

        {/* Zoom Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>ZOOM:</label>
          <button 
            onClick={() => setCustomScale((s) => Math.max(0.4, s - 0.1))} 
            style={{ background: '#334155', color: '#fff', border: 'none', borderRadius: '4px', width: '28px', height: '28px', cursor: 'pointer', fontWeight: 700 }}
          >-</button>
          <span style={{ fontSize: '0.85rem', color: '#cbd5e1', width: '45px', textAlign: 'center' }}>{Math.round(customScale * 100)}%</span>
          <button 
            onClick={() => setCustomScale((s) => Math.min(1.5, s + 0.1))} 
            style={{ background: '#334155', color: '#fff', border: 'none', borderRadius: '4px', width: '28px', height: '28px', cursor: 'pointer', fontWeight: 700 }}
          >+</button>
          <button 
            onClick={() => setCustomScale(1)} 
            style={{ background: '#334155', color: '#94a3b8', border: 'none', borderRadius: '4px', padding: '4px 8px', fontSize: '0.75rem', cursor: 'pointer' }}
          >Reset</button>
        </div>

      </header>

      {/* Main Viewport Container */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px 20px', overflow: 'auto' }}>
        
        {/* Device Frame Outer Shell */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          
          {/* Frame Dimension Label */}
          <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'monospace' }}>
            {selectedDevice.name} — {selectedDevice.width}px × {selectedDevice.height}px (Rendered at {Math.round(effectiveScale * 100)}% scale)
          </div>

          {/* Device Screen Frame */}
          <div style={{
            width: `${selectedDevice.width * effectiveScale}px`,
            height: `${selectedDevice.height * effectiveScale}px`,
            borderRadius: selectedDevice.id === 'desktop' ? '12px' : '28px',
            border: '12px solid #1e293b',
            boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
            background: '#ffffff',
            overflow: 'hidden',
            position: 'relative',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <iframe
              src={selectedPage}
              title={`Preview ${selectedDevice.name}`}
              style={{
                width: `${selectedDevice.width}px`,
                height: `${selectedDevice.height}px`,
                transform: `scale(${effectiveScale})`,
                transformOrigin: '0 0',
                border: 'none'
              }}
            />
          </div>

        </div>

      </main>

    </div>
  );
}
