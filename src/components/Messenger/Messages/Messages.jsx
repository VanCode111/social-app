import React from "react";
import "./Messages.scss";
import Message from "../Message/Message";
import ImagePerson from "../../../assets/img/PersonIcon.png";

function Messages() {
  return (
    <div className="messages">
      <Message
        text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
        authorImage={ImagePerson}
        orientation="left"
      />
      <Message
        text="Это мое сообщение Это мое сообщение Это мое сообщение Это мое сообщение"
        authorImage={ImagePerson}
        orientation="right"
      />
    </div>
  );
}

export default Messages;
