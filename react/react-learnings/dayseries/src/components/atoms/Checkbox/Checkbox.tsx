import React from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className={`${styles.container} ${className}`}>
        <input type="checkbox" ref={ref} className={styles.checkbox} {...props} />
        <span className={styles.checkmark} />
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';