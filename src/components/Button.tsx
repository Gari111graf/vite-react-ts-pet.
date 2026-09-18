import React from "react";
import "./Button.scss"; 

type ButtonProps = {
  children: React.ReactNode;       
  onClick?: () => void;            
  type?: "button" | "submit";      
  variant?: "primary" | "secondary" | "danger"; 
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
