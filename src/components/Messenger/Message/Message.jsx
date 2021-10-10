import React from "react";
import "./Message.scss";
import PropTypes from "prop-types";

function Message({ text, authorImage, datePublish, orientation }) {
  return (
    <div className={"message " + (orientation === "right" ? "right" : "left")}>
      <img src={authorImage} alt="author" className="message avatar" />
      <div className="message__content">
        <p className="message__text">{text}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  orientation: PropTypes.string.isRequired,
  text: PropTypes.string,
  authorImage: PropTypes.string.isRequired,
  datePublish: PropTypes.string,
};

export default Message;
