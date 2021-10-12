import React, { useState } from "react";
import PropTypes from "prop-types";
import ClassNames from "class-names";
import AreaMessage from "../../../UI/AreaMessage/AreaMessage";
import classNames from "class-names";
import ButtonIcon from "../../../UI/ButtonIcon/ButtonIcon";
import { PhotoIcon } from "../../../Icons";

function TextSenderWrapper({ sendMessage, className }) {
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  const sendMessageHandle = () => {
    sendMessage({ text });
  };

  return (
    <div className={classNames({ className })}>
      <AreaMessage
        onChange={changeText}
        value={text}
        placeholder="Новое сообщение"
        rightSide={
          <ButtonIcon>
            <PhotoIcon />
          </ButtonIcon>
        }
      />
      <ButtonIcon onClick={sendMessageHandle}>
        <PhotoIcon />
      </ButtonIcon>
    </div>
  );
}

TextSenderWrapper.propTypes = {
  sendMessage: PropTypes.func,
  className: PropTypes.string,
};

export default TextSenderWrapper;
