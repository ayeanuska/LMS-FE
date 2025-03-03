import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["Mushroom"],
  sause: ["bbq", "tomato"],
  gluten: false,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    addTopppings: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },

    addSause: (state, action) => {
      state.sause = [...state.sause, action.payload];
    },

    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },

    clearToppingAndSause: (state) => {
      (state.sause = []), (state.toppings = []);
    },
  },
});

export const addTopppings = pizzaSlice.actions.addTopppings;
export const addSause = pizzaSlice.actions.addSause;
export const toggleGluten = pizzaSlice.actions.toggleGluten;
export const clearToppingAndSause = pizzaSlice.actions.clearToppingAndSause;

export default pizzaSlice.reducer;
