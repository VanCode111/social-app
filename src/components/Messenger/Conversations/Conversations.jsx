import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Conversations.scss";
import Conversation from "../Conversation/Conversation";
import { getConversations } from "../../../http/messengerAPI";
import ConversationFilter from "./ConversationFilter/ConversationFilter";
import SearchIcon from "../../Icons/SearchIcon";
import SyncLoader from "react-spinners/MoonLoader";
//import { setConversations } from "../../../store/index";
import { setConversations } from "../../../store/conversationsSlice";

function Conversations() {
  const { user } = useSelector((state) => state.auth);
  const { conversations } = useSelector((state) => state.conversations);
  const userId = user.profile.user;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [filterConversations, setFilterConversations] = useState("");
  //const [conversations, setConversations] = useState([]);
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
    setLoading(true);
    try {
      const res = await getConversations({ userId });
      dispatch(setConversations(res));
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
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
      {loading ? (
        <div className="conversations__loader">
          <SyncLoader
            color="#00acff"
            loading={true}
            size={20}
            style={{ zIndex: 10 }}
          />
        </div>
      ) : (
        filteredConversations.map((conversation) => {
          return (
            <div>
              <Conversation
                lastMessage={conversation.lastMessage}
                conversationUser={conversation.conversationUser}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Conversations;
