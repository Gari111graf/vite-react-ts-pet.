import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import Button from "./components/Button";
import OrdersPage from "./pages/OrdersPage";
import { OrdersProvider } from "./context/OrdersContext";

function Home() {
  const { addItem } = useCart();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Главная страница</h1>
      <Slider />
      <Button variant="primary" onClick={addItem}>
        Add to Cart
      </Button>
    </div>
  );
}

export default function App() {
    return (
      <OrdersProvider>      
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Router>
            </CartProvider>
        </OrdersProvider>
  );
}
