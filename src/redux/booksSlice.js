import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateBookStatus: (state, action) => {
      const { id, status } = action.payload;
      const book = state.books.find(book => book.id === id);
      if (book) {
        book.status = status;
      }
    },
  },
});

export const { addBook, removeBook, updateBookStatus } = booksSlice.actions;
export default booksSlice.reducer;
