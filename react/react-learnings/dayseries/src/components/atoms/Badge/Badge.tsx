import React from 'react';
import './Badge.css';

export type BadgeVariant = 'default' | 'success' | 'danger' | 'warning' | 'info';


interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size: 'small' | 'medium' | 'large';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  size = 'medium', 
  className = '' 
}) => {
  return (
    <span className={`ui-badge badge-${variant} badge-${size} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;