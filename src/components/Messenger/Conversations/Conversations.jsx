import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Conversations.scss";
import Conversation from "../Conversation/Conversation";
import { getConversations } from "../../../http/messengerAPI";
import UserRow from "../../UserRow/UserRow";

function Conversations() {
  const { user } = useSelector((state) => state.auth);
  const userId = user.profile.user;
  const [conversations, setConversations] = useState([]);
  useEffect(async () => {
    try {
      const res = await getConversations({ userId });
      setConversations(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="conversations">
      {conversations.map((conversation) => {
        return (
          <div>
            <Conversation conversationUser={conversation.conversationUser} />
          </div>
        );
      })}
    </div>
  );
}

export default Conversations;
