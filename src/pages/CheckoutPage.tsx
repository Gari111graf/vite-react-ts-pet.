import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";
import Button from "../components/Button";
import "./CheckoutPage.scss";

const CheckoutPage: React.FC = () => {
  const { items, clearCart } = useCart();
  const { addOrder } = useOrders();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      alert("⚠️ Заполните все поля!");
      return;
    }

    addOrder(items);
    alert(`🎉 Заказ оформлен!\nИмя: ${name}\nТелефон: ${phone}\nАдрес: ${address}`);
    clearCart();

    // очистим форму
    setName("");
    setPhone("");
    setAddress("");
  };

  return (
    <div className="checkout-page">
      <h2>📝 Оформление заказа</h2>
      {items === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-page__form">
          <label>
            Имя:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Телефон:
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <label>
            Адрес доставки:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </label>
          <Button variant="primary" type="submit">Оформить заказ</Button>
        </form>
      )}
    </div>
  );
};

export default CheckoutPage;
