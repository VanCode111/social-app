import React from "react";
import PropTypes from "prop-types";
import "./ButtonIcon.scss";

function ButtonIcon({ className, children, onClick, width, height }) {
  return (
    <button
      className={"button-icon " + (className ? className : "")}
      style={{ width: width && width, height: height && height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ButtonIcon;
