import React from 'react';
import styles from './Typography.module.css';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant = 'body', children, className = '' }) => {
  const Component = variant === 'body' || variant === 'caption' ? 'p' : variant;
  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};