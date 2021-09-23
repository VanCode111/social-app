import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "tracks",
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

export default counterSlice.reducer;
