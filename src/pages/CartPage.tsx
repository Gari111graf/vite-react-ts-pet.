import { useNavigate } from "react-router-dom";
import React from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import Button from "../components/Button";
import "./CartPage.scss";

const CartPage: React.FC = () => {
  const { items, clearCart } = useCart();
  const { addOrder } = useOrders();
  const navigate = useNavigate();

  const checkout = () => {
    addOrder(items);
    navigate("/checkout"); // редирект на страницу Checkout
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