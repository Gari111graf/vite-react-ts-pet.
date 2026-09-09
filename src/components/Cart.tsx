import React, { useState } from "react";
import Button from "./Button";
import "./Cart.scss";

const Cart: React.FC = () => {
  const [items, setItems] = useState<number>(0);

  const addToCart = () => {
    setItems((prev) => prev + 1);
  };

  const clearCart = () => {
    setItems(0);
  };

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      <p>В корзине: {items} товаров</p>
      <div className="cart__actions">
        <Button variant="primary" onClick={addToCart}>
          Add to Cart
        </Button>
        <Button variant="danger" onClick={clearCart}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Cart;
