import { configureStore } from "@reduxjs/toolkit";
import pizzaReducers from "../slice/pizzaSlice";
import bookReducer from "../slice/bookSlice";

export default configureStore({
  reducer: {
    pizza: pizzaReducers,
    bookInfo: bookReducer,
  },
});
