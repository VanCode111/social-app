import React from "react";
import "./InputFile.scss";
import PropTypes from "prop-types";

function InputFile({ children, selectFile }) {
  return (
    <div>
      <input onChange={selectFile} type="file" className="file-upload" id="1" />
      <label htmlFor="1" className="file-upload__content">
        {children}
      </label>
    </div>
  );
}

InputFile.propTypes = {
  selectFile: PropTypes.func,
};

export default InputFile;
