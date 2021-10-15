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

function Messages({ conversationId, conversationUser, user, userId, socket }) {
  const name = conversationUser.name;
  const lastName = conversationUser.lastName;
  const scroll = useRef();
  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");
  const sendMessageHandler = async ({ text }) => {
    const message = {
      conversationUser: conversationUser.user,
      user: userId,
      text,
    };
    setMessages((prev) => [
      ...prev,
      {
        sender: userId,
        text,
      },
    ]);
    try {
      await sendMessage(message);
      socket?.emit("sendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const getMessage = (message) => {
      console.log(message);
      setMessages((prev) => [...prev, message]);
    };
    console.log(socket);
    socket.on("getMessage", getMessage);
    if (!conversationId) {
      return;
    }
    const getMessagesHandle = async () => {
      try {
        const res = await getMessages({ conversationId });
        setMessages(res);
      } catch (e) {}
    };
    getMessagesHandle();
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
            return (
              <div
                ref={scrollRef}
                className="messages__message"
                key={message._id}
              >
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
