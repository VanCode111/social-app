import React, { useRef, useEffect, useState } from "react";
import "./Messages.scss";
import Message from "../Message/Message";
import ImagePerson from "../../../assets/img/PersonIcon.png";
import AreaMessage from "../../UI/AreaMessage/AreaMessage";
import ButtonIcon from "../../UI/ButtonIcon/ButtonIcon";
import { PhotoIcon } from "../../Icons";
import TextSenderWrapper from "../wrappers/TextSenderWrapper/TextSenderWrapper";
import { getMessages, sendMessage } from "../../../http/messengerAPI";
import PropTypes from "prop-types";

function Messages({ conversationId, conversationUser, user, userId }) {
  console.log(userId);
  const name = conversationUser.name;
  const lastName = conversationUser.lastName;
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const sendMessageHandler = async ({ text }) => {
    try {
      console.log("send message");
      const res = await sendMessage({
        conversationUser: conversationUser.user,
        user: userId,
        text,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(async () => {
    if (!conversationId) {
      return;
    }
    try {
      const res = await getMessages({ conversationId });
      console.log(res);
      setMessages(res);
    } catch (e) {}
  }, []);
  const changeHeight = () => {
    if (!scroll.current) {
      return;
    }
    if (
      scroll.current.scrollHeight -
        scroll.current.clientHeight -
        scroll.current.scrollTop <
      16
    ) {
      scroll.current.scrollTop = scroll.current.scrollHeight;
    }
  };
  return (
    <div className="messages">
      <div className="messages__top">
        <div className="messages__top-inner">
          <h5 className="messages__title">{name + " " + lastName}</h5>
        </div>
      </div>

      {!conversationId ? (
        <p className="messages__no-message">Нет сообщений</p>
      ) : (
        <div ref={scroll} className="messages__items">
          {messages.map((message) => {
            console.log(message.sender == userId);
            return (
              <div className="messages__message" key={message._id}>
                <Message
                  orientation={message.sender == userId ? "right" : "left"}
                  color={message.sender !== userId && "gray"}
                  className=""
                  text={message.text}
                />{" "}
              </div>
            );
          })}
        </div>
      )}

      <div className="messages__bottom">
        <TextSenderWrapper sendMessage={sendMessageHandler} />
      </div>
    </div>
  );
}

Messages.propTypes = {
  conversationId: PropTypes.string.isRequired,
};

export default Messages;
