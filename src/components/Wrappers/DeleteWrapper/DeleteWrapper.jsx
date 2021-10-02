import React from "react";
import PropTypes from "prop-types";
import "./DeleteWrapper.scss";
import DeleteIcon from "../../Icons/DeleteIcon";

function DeleteWrapper({ clickDelete, children }) {
  return (
    <div className="delete-wrapper">
      <button onClick={clickDelete} className="delete-wrapper__btn">
        <DeleteIcon />
      </button>
      {children}
    </div>
  );
}

DeleteWrapper.propTypes = {
  clickDelete: PropTypes.func,
};

export default DeleteWrapper;
