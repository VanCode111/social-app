import React, { useEffect, useState } from "react";
import "./Messenger.scss";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Messages from "../../components/Messenger/Messages/Messages";
import Template from "../../components/Template/Template";
import Conversations from "../../components/Messenger/Conversations/Conversations";
import { getConversation } from "../../http/messengerAPI";

function Messenger() {
  const { user } = useSelector((state) => state.auth);
  const userId = user.profile?.user;
  const location = useLocation();
  const pathname = location.pathname;
  const pathNames = pathname.split("/");
  const conversationId = pathNames[2];
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState(null);
  useEffect(async () => {
    document.title = "Сообщения";
    if (pathNames.length < 3) {
      return;
    }
    setLoading(true);
    try {
      const res = await getConversationHandler({
        userId,
        conversationUser: conversationId,
      });
      console.log(res, "agsagasgsagsaga");
      setConversation(res && res);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }, []);
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
            <Messages {...conversation} userId={userId} />
          ))
        }
        otherCards={<Conversations />}
      />
    </div>
  );
}

export default Messenger;
