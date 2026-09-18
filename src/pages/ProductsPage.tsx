import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import "./ProductsPage.scss";
import Img1 from "../img/OIP.webp";
import Img2 from "../img/Game.webp";
import Img3 from "../img/R.webp";

const products = [
  { id: 1, name: "🎧 Наушники", price: 1200, image: Img3 },
  { id: 2, name: "📱 Игры", price: 8000, image: Img2 },
  { id: 3, name: "Кросовки", price: 25000, image: Img1 },
];

const ProductsPage: React.FC = () => {
  const { addItem } = useCart();

  return (
    <div className="products-page">
      <h2>🛍 Наши товары</h2>
      <ul className="products-page__list">
        {products.map((product) => (
          <li key={product.id} className="products-page__item">
            <img src={product.image} alt={product.name} className="products-page__img" />
            <span>{product.name} — {product.price} грн</span>
            <Button variant="primary" onClick={() => addItem(product)}>
              Add to Cart
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
