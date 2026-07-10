import React from 'react';
import styles from './Link.module.css';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'inline' | 'standalone';
}

export const Link: React.FC<LinkProps> = ({ children, variant = 'inline', className = '', ...props }) => {
  return (
    <a className={`${styles.link} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
};