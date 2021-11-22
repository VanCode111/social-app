import React, { useRef, useEffect, useState } from "react";
import "./Messages.scss";
import Message from "../Message/Message";
import TextSenderWrapper from "../wrappers/TextSenderWrapper/TextSenderWrapper";
import { getMessages, sendMessage } from "../../../http/messengerAPI";
import PropTypes from "prop-types";
import SyncLoader from "react-spinners/MoonLoader";

function Messages({
  conversationId,
  conversationUser,
  user,
  socket,
  conversationTitle,
}) {
  const userId = user.profile.user;
  const name = conversationUser.name;
  const lastName = conversationUser.lastName;
  const scroll = useRef();
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();
  const [skip, setSkip] = useState(0);
  const [messages, setMessages] = useState([]);
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
      console.log(socket);
      socket?.emit("sendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  const renderMessages = () => {
    if (loading) {
      return (
        <div className="post-loader">
          <SyncLoader color="#00acff" loading={loading} size={25} />
        </div>
      );
    }
    if (messages.length < 1) {
      return <p className="messages__no-message">Нет сообщений</p>;
    }
    return (
      <div ref={scroll} className="messages__items">
        {loading ? (
          <div className="post-loader">
            <SyncLoader color="#00acff" loading={loading} size={25} />
          </div>
        ) : (
          messages.map((message) => {
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
                  authorImage={
                    message.sender == userId
                      ? user.profile.profileImage
                      : conversationUser.profileImage
                  }
                  text={message.text}
                />{" "}
              </div>
            );
          })
        )}
      </div>
    );
  };

  useEffect(() => {
    if (!scroll.current) {
      return;
    }
    const scrollEvent = (e) => {
      if (scroll.current.scrollTop < 1) {
        setSkip((prev) => ++prev);
      }
    };
    scroll.current.addEventListener("scroll", scrollEvent);
  }, [scroll]);
  useEffect(() => {
    if (skip < 1) {
      return;
    }
    const getMessagesHandle = async () => {
      try {
        const res = await getMessages({ conversationId, limit: 15, skip });
        console.log(res);
        if (res.length > 0) {
          setMessages((prev) => [...res, ...prev]);
        }
      } catch (e) {}
    };
    getMessagesHandle();
  }, [skip]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages]);

  useEffect(() => {
    setLoading(true);
    setSkip(0);
    const getMessagesHandle = async () => {
      try {
        const res = await getMessages({ conversationId, limit: 15, skip: 0 });
        if (res.length > 0) {
          setMessages(res);
        }
      } catch (e) {}
      setLoading(false);
    };
    getMessagesHandle();
    const getMessage = (message) => {
      setMessages((prev) => [...prev, message]);
    };
    socket.on("getMessage", getMessage);
    if (!conversationId) {
      return;
    }
  }, [conversationUser]);
  return (
    <div className="messages">
      <div className="messages__top">
        <div className="messages__top-inner">
          <h5 className="messages__title">
            {conversationTitle || name + " " + lastName}
          </h5>
        </div>
      </div>

      {renderMessages()}

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
