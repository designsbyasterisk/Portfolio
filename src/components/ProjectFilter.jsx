import React from 'react';

export default function ProjectFilter({ categories, activeCategory, onSelectCategory, searchQuery, onSearchChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className="magnetic"
            style={{
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid rgba(10, 17, 40, 0.12)',
              backgroundColor: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
              color: activeCategory === cat ? 'var(--accent-contrast)' : 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: '360px' }}>
        <input
          type="text"
          placeholder="Search projects by keyword..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid rgba(10, 17, 40, 0.15)',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-main)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            outline: 'none'
          }}
        />
      </div>
    </div>
  );
}
