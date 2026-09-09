import React from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";
import { useOrders } from "../context/OrdersContext";
import "./CartPage.scss";

const CartPage: React.FC = () => {
    const { items, clearCart } = useCart();
     const { addOrder } = useOrders();

  const checkout = () => {
    addOrder(items);
    alert("🎉 Заказ оформлен!");
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>🛒 Ваша корзина</h2>
      {items === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <p>Товаров в корзине: {items}</p>
          <div className="cart-page__actions">
            <Button variant="danger" onClick={clearCart}>Очистить</Button>
            <Button variant="primary" onClick={checkout}>Оформить заказ</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
