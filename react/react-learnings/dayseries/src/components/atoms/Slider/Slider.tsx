import React from 'react';
import styles from './Slider.module.css';

export type SliderProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        type="range"
        ref={ref}
        className={`${styles.slider} ${className}`}
        {...props}
      />
    );
  }
);
Slider.displayName = 'Slider';