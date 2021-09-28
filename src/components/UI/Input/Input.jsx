import React from "react";
import "./Input.scss";

function Input({ placeholder, className, type, onChange, value }) {
  return (
    <input
      onChange={onChange}
      value={value}
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
