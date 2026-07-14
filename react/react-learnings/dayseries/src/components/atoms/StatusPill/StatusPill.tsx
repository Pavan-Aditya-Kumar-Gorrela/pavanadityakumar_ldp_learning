import React from 'react';
import styles from './StatusPill.module.css';

export interface StatusPillProps {
  status: 'success' | 'warning' | 'error' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status = 'neutral', children, className = '' }) => {
  return (
    <span className={`${styles.pill} ${styles[status]} ${className}`}>
      {children}
    </span>
  );
};