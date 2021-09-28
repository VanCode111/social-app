import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {
      link: "",
    },
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user.link = action.payload.link;
    },
  },
});

export const { setAuth, setUser } = counterSlice.actions;

export default counterSlice.reducer;
