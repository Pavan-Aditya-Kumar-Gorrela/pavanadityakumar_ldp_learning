import React from 'react';

interface StoreLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ header, children, footer }) => {
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: 'system-ui, sans-serif',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: '16px 40px',
  };

  const mainStyle: React.CSSProperties = {
    flex: 1,
    padding: '40px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#1f2937',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    fontSize: '14px',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>{header}</header>
      <main style={mainStyle}>{children}</main>
      <footer style={footerStyle}>{footer}</footer>
    </div>
  );
};
 export default StoreLayout;