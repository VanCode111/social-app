import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tracks from "./tracksSlice";
import auth from "./authSlice";
import conversations from "./conversationsSlice";
import { setAuth, setUser } from "./authSlice";
import { setMusic, setTracks } from "./tracksSlice";
import {
  setConversations,
  addMessageToConversation,
} from "./conversationsSlice";

const rootReducer = combineReducers({
  tracks: tracks,
  auth: auth,
  conversations: conversations,
});

export default configureStore({
  reducer: rootReducer,
});

export { setAuth, setMusic, setTracks, setUser };
