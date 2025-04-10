import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pubReviews: [],
  alllReviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setPubReviews: (state, { payload }) => {
      state.pubReviews = payload || [];
    },

    setAllReview: (state, { payload }) => {
      state.alllReviews = payload;
    },
    updateReviewStatus: (state, { payload }) => {
      const { _id, status } = payload;
      state.allReviews = state.allReviews.map((item) => {
        if (item._id == _id) {
          return { ...item, status };
        }
        return item;
      });
    },
  },
});

const { reducer, actions } = reviewSlice;
export const { setPubReviews, setAllReview, updateReviewStatus } = actions;
export default reducer;
