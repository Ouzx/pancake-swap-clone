import React from "react";
import "./Button.scss";
const Button = ({ text, style }) => {
  return (
    <button style={style} className="general-button">
      {text}
    </button>
  );
};

export default Button;
