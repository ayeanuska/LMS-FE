import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
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

export default userSlice.reducer;
