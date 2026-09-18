import React, { useState } from "react";
import Button from "./Button";
import "./Slider.scss";

import Img1 from "../img/OIP.webp";
import Img2 from "../img/Game.webp";
import Img3 from "../img/R.webp";

const slides = [
  { id: 1, title: "Product 1", description: "Описание товара 1", image: Img1 },
  { id: 2, title: "Product 2", description: "Описание товара 2", image: Img2 },
  { id: 3, title: "Product 3", description: "Описание товара 3", image: Img3 },
  { id: 4, title: "Product 4", description: "Описание товара 1", image: Img1 },
  { id: 5, title: "Product 5", description: "Описание товара 2", image: Img2 },
  { id: 6, title: "Product 6", description: "Описание товара 3", image: Img3 },
  { id: 7, title: "Product 7", description: "Описание товара 1", image: Img1 },
  { id: 8, title: "Product 8", description: "Описание товара 2", image: Img2 },
  { id: 9, title: "Product 9", description: "Описание товара 3", image: Img3 },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="slider">
      <div className="slider__track">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="slider__actions">
        <Button variant="secondary" onClick={prevSlide}>Prev</Button>
        <Button variant="primary" onClick={nextSlide}>Next</Button>
      </div>
    </div>
  );
};

export default Slider;
