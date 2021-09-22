import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentMusic: null,
  },
  reducers: {
    setMusic: (state, action) => {
      state.currentMusic = action.payload;
    },
  },
});

export const { setMusic } = counterSlice.actions;

export default configureStore({
  reducer: counterSlice.reducer,
});
