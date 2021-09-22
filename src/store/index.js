import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentMusic: null,
    tracks: [],
  },
  reducers: {
    setMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { setMusic, setTracks } = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer,
});
