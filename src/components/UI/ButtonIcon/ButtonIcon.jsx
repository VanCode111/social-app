import React from "react";
import PropTypes from "prop-types";

function ButtonIcon({ className, children, onClick, width, height }) {
  return (
    <button
      className={className ? className : ""}
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
