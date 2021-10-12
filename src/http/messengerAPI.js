import { $host } from "./index";

const getConversations = async ({ userId }) => {
  const { data } = await $host.post("/getconversations", { userId });
  return data;
};

const getConversation = async ({ userId, conversationUser }) => {
  const { data } = await $host.post("/getconversation", {
    userId,
    conversationUser,
  });
  return data;
};

const getMessages = async ({ conversationId }) => {
  const { data } = await $host.post("/getmessages", {
    conversationId,
  });
  return data;
};

const sendMessage = async ({ conversationUser, text, user }) => {
  const { data } = await $host.post("/sendmessage", {
    conversationUser,
    text,
    user,
  });
  return data;
};

export { getConversations, getConversation, getMessages, sendMessage };
