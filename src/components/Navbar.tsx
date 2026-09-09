import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const { items } = useCart(); // количество товаров из контекста

  return (
    <nav className="navbar">
      <div className="navbar__logo">MyShop</div>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/cart">Cart ({items})</Link></li>
      </ul>
      <div className="navbar__actions">
        <Link to="/cart">
          <Button variant="primary">
            🛒 Корзина ({items})
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
