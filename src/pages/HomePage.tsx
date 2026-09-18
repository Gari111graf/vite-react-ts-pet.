import React from "react";
import Slider from "../components/Slider";
import "./HomePage.scss";
const HomePage: React.FC = () => {
  return (
      <div className="home-page">
        <h1>Добро пожаловать</h1>
        
      <p>Здесь вы можете найти лучшие товары и музыку!</p>
      <Slider />
      </div>
  );
}
export default HomePage;