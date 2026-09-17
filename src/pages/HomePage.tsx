import React from "react";
import Slider from "../components/Slider";
import "./HomePage.scss";
const HomePage: React.FC = () => {
  return (
      <div className="home-page">
        <h1>Добро пожаловать</h1>
        <Slider />
        <p>Здесь вы можете найти лучшие товары и музыку!</p>
      </div>
  );
}
export default HomePage;