import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tracks from "./tracksSlice";
import auth from "./authSlice";
import { setAuth } from "./authSlice";
import { setMusic, setTracks } from "./tracksSlice";

const rootReducer = combineReducers({
  tracks: tracks,
  auth: auth,
});

export default configureStore({
  reducer: rootReducer,
});

export { setAuth, setMusic, setTracks };
