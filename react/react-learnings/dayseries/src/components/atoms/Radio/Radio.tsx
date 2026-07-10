import React from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className={`${styles.container} ${className}`}>
        <input type="radio" ref={ref} className={styles.radio} {...props} />
        <span className={styles.outerCircle} />
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    );
  }
);
Radio.displayName = 'Radio';