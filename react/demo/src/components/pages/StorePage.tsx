import React from 'react';
import StoreLayout from '../templates/StoreLayout';
import Heading from '../atoms/Heading';
import ProductGrid from '../organisms/ProductGrid';
import hero from '../../assets/hero.png';


const MOCK_PRODUCTS = [
  { id: 1, title: 'Wireless Headphones', price: '₹4,999', image: hero },
  { id: 2, title: 'Smart Watch Series X', price: '₹8,499', image: hero },
  { id: 3, title: 'Mechanical Keyboard', price: '₹3,200', image: hero },
];

export const StorePage: React.FC = () => {
  
  const headerContent = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Heading text="TechGadget Co." level={2} />
      <nav style={{ display: 'flex', gap: '20px', color: '#4b5563', fontWeight: '500' }}>
        <span>Home</span>
        <span>Shop</span>
        <span>Cart</span>
      </nav>
    </div>
  );


  const footerContent = (
    <p>© {new Date().getFullYear()} TechGadget Marketplace. Built with React + TS.</p>
  );

  return (
    <StoreLayout header={headerContent} footer={footerContent}>
      
      <Heading text="Explore Our Collections" level={1} />
      <p style={{ color: '#6b7280', marginBottom: '32px' }}>
        Premium hardware tools and devices built for execution.
      </p>

      
      <ProductGrid sectionTitle="Trending Products" products={MOCK_PRODUCTS} />
    </StoreLayout>
  );
};
