import React from "react";
import PropTypes from "prop-types";
import ClickOutside from "../../ClickOutside/ClickOutside";
import "./DropDown.scss";
import MouseOverHandler from "../../MouseOverHandler/MouseOverHandler";

function DropDown({ headElement, isOpen, clickOutSide, children }) {
  return (
    <div className="drop-down">
      <MouseOverHandler outDelay={200} mouseOverHandle={clickOutSide}>
        <ClickOutside clickHandle={clickOutSide}>
          {headElement}
          <div className={"drop-down__list " + (isOpen ? "open" : "")}>
            {children}
          </div>
        </ClickOutside>
      </MouseOverHandler>
    </div>
  );
}

DropDown.propTypes = {
  headElement: PropTypes.node,
  isOpen: PropTypes.bool.isRequired,
  clickOutSide: PropTypes.func,
};

export default DropDown;
