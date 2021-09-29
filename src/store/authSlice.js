import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {
      link: "",
      profile: null,
    },
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setImage: (state, action) => {
      state.user.profile.profileImage = action.payload;
    },
  },
});

export const { setAuth, setUser, setImage } = counterSlice.actions;

export default counterSlice.reducer;
