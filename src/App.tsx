import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
export default function App() {
  return (
      <div className="App">
        <Navbar />
      <h1>Hello World</h1>
      <Button variant="primary" onClick={() => alert("Добавлено в корзину!")}>
        Add to Cart
          </Button>
        <Slider />
    </div>
  );
}

