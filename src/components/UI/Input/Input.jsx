import React from "react";
import "./Input.scss";

function Input({ placeholder, className, type }) {
  return (
    <input
      placeholder={placeholder}
      type={type ? type : "text"}
      className={
        "input " +
        (className ? className : "") +
        (type ? " input--" + type : "")
      }
    ></input>
  );
}

export default Input;
