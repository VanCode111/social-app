import React from "react";
import { Link } from "react-router-dom";
import "./Conversation.scss";

function Conversation({ conversationUser }) {
  const pathConversation = `/messenger/${conversationUser.user}`;
  const avatar = conversationUser.profileImage;
  const fullName = `${conversationUser.name} ${conversationUser.lastName}`;
  return (
    <Link to={pathConversation} className="conversation">
      <img src={avatar} alt="avatar" className="conversation__avatar" />
      <div className="conversation__right">
        <div className="conversation__right-top">
          <p className="conversation__name">{fullName}</p>
        </div>
      </div>
    </Link>
  );
}

export default Conversation;
