import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  books: [],
  pubBooks: [],
  selectedBook: {},
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setPubBooks: (state, action) => {
      state.pubBooks = action.payload;
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

export const { setBooks, setSelectedBook, addBooks, setPubBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
