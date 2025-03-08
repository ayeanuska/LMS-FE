import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = ccreateSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },

    resetUser: (state) => {
      state.user = {};
    },
  },
});

export const { setuser } = userSlice.actions;
