import { io } from "socket.io-client";
import store from "./store/index";
import {
  setConversations,
  addMessageToConversation,
} from "./store/conversationsSlice";

const socket = io("https://immense-shore-19135.herokuapp.com/");
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

const getMessagesSocket = (
  getMessage?: (message: { text: string; sender: string }) => void
) => {
  socket.on(
    "getMessage",
    ({ message, sender }: { message: string; sender: string }) => {
      store.dispatch(
        addMessageToConversation({ conversationId: sender, text: message })
      );
      if (!getMessage) {
        return;
      }
      getMessage({ text: message, sender });
    }
  );
};

export { connectToSocket, sendMessages, getMessagesSocket };
