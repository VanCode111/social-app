import { io } from "socket.io-client";
import store from "./store/index";
import {
  setConversations,
  addMessageToConversation,
} from "./store/conversationsSlice";

const socket = io("http://localhost:7000");
const connectToSocket = (userId: string) => {
  socket.emit("addUser", userId);
  getMessagesSocket();
};

const sendMessages = (message: {
  user: string;
  conversationUser: string;
  text: string;
}) => {
  console.log(socket);
  if (!socket) {
    return;
  }
  socket.emit("sendMessage", message);
};

const getMessagesSocket = () => {
  socket.on(
    "getMessage",
    ({ message, sender }: { message: string; sender: string }) => {
      store.dispatch(
        addMessageToConversation({ conversationId: sender, text: message })
      );
    }
  );
};

export { connectToSocket, sendMessages, getMessagesSocket };
