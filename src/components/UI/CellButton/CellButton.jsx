import React from "react";
import "./CellButton.scss";
import PropTypes from "prop-types";

function CellButton({ children, onClick }) {
  return (
    <div onClick={onClick} className="cell-button">
      {children}
    </div>
  );
}

CellButton.propTypes = {
  onClick: PropTypes.func,
};

export default CellButton;
