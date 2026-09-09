import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import "./ProductsPage.scss";

const products = [
  { id: 1, name: "🎧 Наушники", price: 1200 },
  { id: 2, name: "📱 Смартфон", price: 8000 },
  { id: 3, name: "💻 Ноутбук", price: 25000 },
];

const ProductsPage: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="products-page">
      <h2>🛍 Наши товары</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="products-page__item">
            <span>{product.name} — {product.price} грн</span>
            <Button variant="primary" onClick={addItem}>
              Add to Cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
