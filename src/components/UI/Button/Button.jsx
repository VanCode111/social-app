import React from "react";
import "./Button.scss";

function Button({ className, onClick, text }) {
  return (
    <button
      onClick={onClick ? onClick : null}
      className={"button " + (className ? className : "")}
    >
      {text}
    </button>
  );
}

export default Button;