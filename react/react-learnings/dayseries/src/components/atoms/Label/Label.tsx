import React from 'react';
import styles from './Label.module.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ children, required, className = '', ...props }) => {
  return (
    <label className={`${styles.label} ${className}`} {...props}>
      {children}
      {required && <span className={styles.required}> *</span>}
    </label>
  );
};