import React from "react";
import Button from "./Button";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyShop</div>
      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Music</a></li>
      </ul>
      <div className="navbar__actions">
        <Button variant="primary" onClick={() => alert("Корзина открыта!")}>
          Cart
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
