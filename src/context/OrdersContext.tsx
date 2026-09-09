import React, { createContext, useContext, useState } from "react";

type Order = {
  id: number;
  date: string;
  items: number;
};

type OrdersContextType = {
  orders: Order[];
  addOrder: (items: number) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (items: number) => {
    const newOrder: Order = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items,
    };
    setOrders((prev) => [...prev, newOrder]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used within OrdersProvider");
  return context;
};
