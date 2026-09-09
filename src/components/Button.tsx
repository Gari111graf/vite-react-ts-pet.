import React from "react";
import "./Button.scss"; // стили для кнопки

type ButtonProps = {
  children: React.ReactNode;       // текст или иконка внутри кнопки
  onClick?: () => void;            // обработчик клика
  type?: "button" | "submit";      // тип кнопки
  variant?: "primary" | "secondary" | "danger"; // стилизация
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button--${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
