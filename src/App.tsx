import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { CartProvider} from "./context/CartContext";
import OrdersPage from "./pages/OrdersPage";
import { OrdersProvider } from "./context/OrdersContext";
import ProductsPage from "./pages/ProductsPage";
import MusicPage from "./pages/MusicPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <OrdersProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </OrdersProvider>
  );
}