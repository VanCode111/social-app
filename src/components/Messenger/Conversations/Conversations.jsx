import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Conversations.scss";
import PropTypes from "prop-types";
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
  console.log(conversations);
  return (
    <div className="conversations">
      {conversations.map((conversation) => {
        return (
          <div>
            <UserRow
              img={conversation.conversationUser?.profileImage}
              name={
                conversation.conversationUser?.name +
                " " +
                conversation.conversationUser?.lastName
              }
            />
          </div>
        );
      })}
    </div>
  );
}

export default Conversations;
