import React from "react";
import PropTypes from "prop-types";
import ClickOutside from "../../ClickOutside/ClickOutside";
import "./DropDown.scss";

function DropDown({ headElement, isOpen, clickOutSide, children }) {
  return (
    <div className="drop-down">
      <ClickOutside clickHandle={clickOutSide}>
        {headElement}
        <div className={"drop-down__list " + (isOpen ? "open" : "")}>
          {children}
        </div>
      </ClickOutside>
    </div>
  );
}

DropDown.propTypes = {
  headElement: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  clickOutSide: PropTypes.func,
};

export default DropDown;
