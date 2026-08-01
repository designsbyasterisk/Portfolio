import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'pop-primary' | 'pop-secondary'
  to,
  href,
  onClick,
  target,
  rel,
  className = '',
  style = {},
  magnetic = true,
  ...props
}) {
  let baseClass = 'btn-pop';
  if (variant === 'primary' || variant === 'pop-primary') {
    baseClass += ' btn-pop-primary';
  } else if (variant === 'secondary' || variant === 'pop-secondary') {
    baseClass += ' btn-pop-secondary';
  }

  if (magnetic) {
    baseClass += ' magnetic';
  }

  const combinedClassName = `${baseClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={combinedClassName} style={style} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} style={style} onClick={onClick} target={target} rel={rel} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} style={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
