export default function Products() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
  ];

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          data-testid="product-card"
        >
          {product.name}
        </div>
      ))}
    </>
  );
}