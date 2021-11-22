import React from "react";
import "./AreaMessage.scss";
import TextArea from "react-textarea-autosize";
import PropTypes from "prop-types";

function AreaMessage({
  onClick,
  value,
  onHeightChange,
  placeholder,
  leftSide,
  rightSide,
  onChange,
}) {
  return (
    <div className="area-message">
      {leftSide && leftSide}
      <TextArea
        value={value}
        onChange={onChange}
        onHeightChange={onHeightChange}
        className="area-message__text-area"
        placeholder={placeholder}
        maxRows="4"
      />
      <div className="area-message__others">{rightSide && rightSide}</div>
    </div>
  );
}

AreaMessage.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  leftSide: PropTypes.node,
  rightSide: PropTypes.node,
};

export default AreaMessage;
