import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: true,
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = counterSlice.actions;

export default counterSlice.reducer;
