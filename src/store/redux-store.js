import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../features/books/bookSlice";
import userReducer from "../features/users/userSlice";
import borrowReducer from "../features/borrows/borrowSlice";
import reviewReducer from "../features/reviews/reviewSlice";

export default configureStore({
  reducer: {
    bookInfo: bookReducer,
    userInfo: userReducer,
    borrowInfo: borrowReducer,
    reviewInfo: reviewReducer,
  },
});
