import React from "react";
import { useOrders } from "../context/OrdersContext";
import "./OrdersPage.scss";

const OrdersPage: React.FC = () => {
  const { orders } = useOrders();

  return (
    <div className="orders-page">
      <h2>📦 История заказов</h2>
      {orders.length === 0 ? (
        <p>Заказов пока нет</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Дата:</strong> {order.date} — <strong>Товаров:</strong> {order.items}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
