import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "conversations",
  initialState: {
    conversations: [],
    notReaded: 0,
  },
  reducers: {
    setConversations: (state, action) => {
      state.conversations = [...action.payload];
    },
    addMessageToConversation: (state, action) => {
      const conversationId = action.payload.conversationId;

      const conversation = state.conversations.find((item) => {
        console.log(
          item.conversationUser.user,
          " ",
          action.payload.conversationId
        );
        return item.conversationUser.user === action.payload.conversationId;
      });
      if (!conversation) {
        state.notReaded++;
        return;
      }
      if (!conversation.notReaded) {
        conversation.notReaded = true;
        state.notReaded++;
      }

      conversation.lastMessage = action.payload.text;
      state.conversations = state.conversations.filter((item) => {
        return item.conversationUser.user !== action.payload.conversationId;
      });
      state.conversations = [conversation, ...state.conversations];
    },
  },
});

export const { setConversations, addMessageToConversation } =
  counterSlice.actions;

export default counterSlice.reducer;
