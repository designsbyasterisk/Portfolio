import React from 'react';

export default function BentoCard({ children, className = '', style = {} }) {
  return (
    <div className={`bento-card ${className}`} style={style}>
      {children}
    </div>
  );
}
