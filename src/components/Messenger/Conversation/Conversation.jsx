import React from "react";
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../../Config/serverConsts";
import "./Conversation.scss";

function Conversation({ conversationUser, lastMessage }) {
  const pathConversation = `/messenger/${conversationUser.user}`;
  const avatar = conversationUser.profileImage;
  const fullName = `${conversationUser.name} ${conversationUser.lastName}`;
  return (
    <Link
      to={{
        pathname: pathConversation,
        state: { conversationUser: conversationUser },
      }}
      className="conversation"
    >
      <img
        src={SERVER_URL + "/" + avatar}
        alt="avatar"
        className="conversation__avatar"
      />
      <div className="conversation__right">
        <div className="conversation__right-top">
          <p className="conversation__name">{fullName}</p>
          {lastMessage && <p>{lastMessage}</p>}
        </div>
      </div>
    </Link>
  );
}

export default Conversation;
