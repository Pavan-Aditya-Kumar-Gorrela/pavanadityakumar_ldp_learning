import React from 'react';
import styles from './TableCell.module.css';

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  isHeader?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const TableCell: React.FC<TableCellProps> = ({
  isHeader = false,
  align = 'left',
  children,
  className = '',
  ...props
}) => {
  const Component = isHeader ? 'th' : 'td';
  return (
    <Component
      className={`${styles.cell} ${styles[align]} ${isHeader ? styles.header : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};