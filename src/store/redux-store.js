import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../features/books/bookSlice";
import userReducer from "../features/users/userSlice";
import borrowReducer from "../features/borrows/borrowSlice";

export default configureStore({
  reducer: {
    bookInfo: bookReducer,
    userInfo: userReducer,
    borrowInfo: borrowReducer,
  },
});
