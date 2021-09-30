import React from "react";
import "./IconText.scss";
import PropTypes from "prop-types";

function IconText({ icon, text }) {
  return (
    <div className="icon-text">
      {icon}
      <div className="icon-text__text">{text}</div>
    </div>
  );
}

IconText.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default IconText;
