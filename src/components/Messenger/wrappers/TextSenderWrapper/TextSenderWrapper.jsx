import React, { useState } from "react";
import PropTypes from "prop-types";
import ClassNames from "class-names";
import AreaMessage from "../../../UI/AreaMessage/AreaMessage";
import classNames from "class-names";
import ButtonIcon from "../../../UI/ButtonIcon/ButtonIcon";
import { MessageIcon, PhotoIcon } from "../../../Icons";
import "./TextSenderWrapper.scss";

function TextSenderWrapper({ sendMessage, className }) {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  const sendMessageHandle = () => {
    sendMessage({ text });
  };

  return (
    <div className={"text-sender-wrapper " + classNames({ className })}>
      <div className="text-sender-wrapper__text">
        <AreaMessage
          onChange={changeText}
          value={text}
          placeholder="Напишите сообщение"
          className="text-sender-warapper__text"
          rightSide={
            <ButtonIcon>
              <PhotoIcon />
            </ButtonIcon>
          }
        />
      </div>

      <ButtonIcon onClick={sendMessageHandle}>
        <MessageIcon />
      </ButtonIcon>
    </div>
  );
}

TextSenderWrapper.propTypes = {
  sendMessage: PropTypes.func,
  className: PropTypes.string,
};

export default TextSenderWrapper;
