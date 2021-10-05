import React from "react";
import "./TextArea.scss";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";

function TextArea({ onChange, placeholder, value }) {
  return (
    <TextareaAutosize
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      className="text-area"
    />
  );
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default TextArea;
