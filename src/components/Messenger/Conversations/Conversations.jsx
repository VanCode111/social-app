import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Conversations.scss";
import Conversation from "../Conversation/Conversation";
import { getConversations } from "../../../http/messengerAPI";
import { MessageIcon } from "../../Icons";
import ConversationFilter from "./ConversationFilter/ConversationFilter";
import UserRow from "../../UserRow/UserRow";
import SearchIcon from "../../Icons/SearchIcon";

function Conversations() {
  const { user } = useSelector((state) => state.auth);
  const userId = user.profile.user;
  const [filterConversations, setFilterConversations] = useState("");
  const [conversations, setConversations] = useState([]);
  const filterConversationsHandle = () => {
    if (!filterConversations) {
      return conversations;
    }
    const filtered = conversations.filter((item) => {
      const conversationUser = item.conversationUser;
      const lastName = conversationUser.lastName.toLowerCase();
      const name = conversationUser.name.toLowerCase();
      const filter = filterConversations.trim().toLowerCase().split(" ");
      if (filter.length < 2) {
        if (lastName.includes(filter[0]) || name.includes(filter[0])) {
          return true;
        } else {
          return false;
        }
      }
      if (
        (lastName.includes(filter[0]) && name.includes(filter[1])) ||
        (lastName.includes(filter[1]) && name.includes(filter[0]))
      ) {
        return true;
      }
      return false;
    });
    return filtered;
  };
  let filteredConversations = filterConversationsHandle();

  useEffect(async () => {
    try {
      const res = await getConversations({ userId });
      setConversations(res);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="conversations">
      <div className="filter-container">
        <ConversationFilter
          className={"conversations__filter"}
          placeholder="Поиск"
          leftIcon={<SearchIcon />}
          onChange={(text) => {
            setFilterConversations(text);
          }}
        />
      </div>

      {filteredConversations.map((conversation) => {
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
