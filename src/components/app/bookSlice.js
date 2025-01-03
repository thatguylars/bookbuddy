import { createSlice } from "@reduxjs/toolkit";
import { booksApi } from "./booksApi";
import { userApi } from "./userApi";

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: {
    books: [],
    book: null,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      booksApi.endpoints.getAllBooks.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          books: payload.books,
        };
      },
    );
    builder.addMatcher(
      booksApi.endpoints.getSingleBook.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          book: payload.book,
        };
      },
    );
    builder.addMatcher(
      booksApi.endpoints.updateBook.matchFulfilled,
      (state, { payload }) => {
        state.books = state.books.map((book) => {
          return book.id === payload.book.id
            ? { ...book, available: payload.book.available }
            : book;
        });
        return state;
      },
    );
    builder.addMatcher(
      userApi.endpoints.deleteBook.matchFulfilled,
      (state, { payload }) => {
        state.books = state.books.map((book) => {
          return book.id === payload.deletedReservation.bookid
            ? { ...book, available: true }
            : book;
        });
        return state;
      },
    );
  },
});

export default bookSlice.reducer;
