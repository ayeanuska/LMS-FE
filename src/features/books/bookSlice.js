import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;``
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload;
    },
    addBooks: (state, action) => {
      // state.books = [...state.books, action.payload];
      state.books = action.payload;
    },
  },
});

export const { setBooks, setSelectedBook, addBooks } = bookSlice.actions;

export default bookSlice.reducer;
