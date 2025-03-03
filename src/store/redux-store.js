import { configureStore } from "@reduxjs/toolkit";
import pizzaReducers from "../slice/pizzaSlice";

export default configureStore({
  reducer: {
    pizza: pizzaReducers,
  },
});
