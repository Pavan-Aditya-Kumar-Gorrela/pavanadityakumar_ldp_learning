import React from 'react';
import Heading from '../atoms/Heading';
import ProductCard from '../molecules/ProductCard';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

interface ProductGridProps {
  sectionTitle: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ sectionTitle, products }) => {
  const sectionStyle: React.CSSProperties = {
    padding: '24px 0',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px',
    marginTop: '16px',
  };

  return (
    <section style={sectionStyle}>
      <Heading text={sectionTitle} level={2} />
      <div style={gridStyle}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onBuy={() => alert(`Added ${product.title} to your cart!`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;