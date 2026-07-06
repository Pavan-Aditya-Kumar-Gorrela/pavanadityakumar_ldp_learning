import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', variant = 'primary' }) => {
  const styles: React.CSSProperties = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: variant === 'primary' ? '#0070f3' : '#e5e7eb',
    color: variant === 'primary' ? '#ffffff' : '#374151',
  };

  return <button type={type} onClick={onClick} style={styles}>{label}</button>;
};

export default Button;