import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentMusic: null,
    tracks: [],
    isAuth: false,
  },
  reducers: {
    setMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setMusic, setTracks, setAuth } = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer,
});
