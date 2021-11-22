import React, { useEffect, useState, useRef } from "react";
import "./Messenger.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Messages from "../../components/Messenger/Messages/Messages";
import Template from "../../components/Template/Template";
import Conversations from "../../components/Messenger/Conversations/Conversations";
import { getConversation } from "../../http/messengerAPI";
import { io } from "socket.io-client";

function Messenger() {
  const { user } = useSelector((state) => state.auth);
  const userId = user.profile?.user;
  const location = useLocation();
  const pathname = location.pathname;
  const pathNames = pathname.split("/");
  const conversationId = pathNames[2];
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [loading, setLoading] = useState(true);
  const conversationUser = location.state?.conversationUser;
  let conversationTitle;
  if (conversationUser) {
    conversationTitle = conversationUser.name + " " + conversationUser.lastName;
  }

  const socket = useRef();
  const [conversation, setConversation] = useState(null);
  useEffect(() => {
    socket.current = io("https://immense-shore-19135.herokuapp.com/");
    socket.current.emit("addUser", userId);
    socket.current.on("getMessage", (message) => {
      console.log(message);
    });
    return () => {
      socket.current.disconnect();
    };
  }, []);
  useEffect(async () => {
    document.title = "Сообщения";
    setLoadingMessages(true);
    if (pathNames.length < 3) {
      setLoading(false);
      return;
    }
    try {
      const res = await getConversationHandler({
        userId,
        conversationUser: conversationId,
      });
      setConversation(res && res);
    } catch (e) {
      console.log(e);
    }
    setLoadingMessages(false);
    setLoading(false);
  }, [location]);

  const getConversationHandler = async ({ userId, conversationUser }) => {
    const res = await getConversation({ userId, conversationUser });
    return res;
  };
  return (
    <div className="messenger">
      <Template
        mainPage={
          !loading &&
          (!conversation ? (
            <div className="messenger__empty">Напишите сообщение</div>
          ) : (
            <Messages
              loading={loadingMessages}
              conversationTitle={conversationTitle}
              socket={socket.current}
              {...conversation}
              conversationUser={
                conversationUser || conversation.conversationUser
              }
              user={user}
            />
          ))
        }
        otherCards={<Conversations />}
      />
    </div>
  );
}

export default Messenger;
