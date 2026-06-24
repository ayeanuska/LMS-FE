import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: true,
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

    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, resetUser, setMenu, setLoading } = userSlice.actions;

export default userSlice.reducer;
