import React from 'react';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  onBuy: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, onBuy }) => {
  const cardStyle: React.CSSProperties = {
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    maxWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const priceStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#059669',
    margin: '0'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <Heading text={title} level={3} />
      <p style={priceStyle}>{price}</p>
      <Button label="Add to Cart" onClick={onBuy} variant="primary" />
    </div>
  );
};

export default ProductCard;