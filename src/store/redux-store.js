import { configureStore } from "@reduxjs/toolkit";
import pizzaReducers from "../slice/pizzaSlice";
import bookReducer from "../features/books/bookSlice";
import userReducer from "../features/users/userSlice";

export default configureStore({
  reducer: {
    pizza: pizzaReducers,
    bookInfo: bookReducer,
    userInfo: userReducer,
  },
});
