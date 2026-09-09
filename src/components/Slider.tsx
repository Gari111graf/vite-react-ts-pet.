import React, { useState } from "react";
import Button from "./Button";
import "./Slider.scss";

const slides = [
  { id: 1, title: "Product 1", description: "Описание товара 1" },
  { id: 2, title: "Product 2", description: "Описание товара 2" },
  { id: 3, title: "Product 3", description: "Описание товара 3" },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <h2>{slides[current].title}</h2>
      <p>{slides[current].description}</p>
      <div className="slider__actions">
        <Button variant="secondary" onClick={prevSlide}>
          Prev
        </Button>
        <Button variant="primary" onClick={nextSlide}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Slider;
