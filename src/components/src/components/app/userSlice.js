import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import { booksApi } from "./booksApi";

/*Requires authentication via token to be passed through the api*/
const userSlice = createSlice({
  name: "useSlice",
  initialState: {
    user: null,
    token: null,
    reservations: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        return { ...state, token: payload.token };
      },
    );
    builder.addMatcher(
      userApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        return { ...state, token: payload.token };
      },
    );
    builder.addMatcher(
      userApi.endpoints.getUser.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          user: payload,
        };
      },
    );
    builder.addMatcher(
      booksApi.endpoints.updateBook.matchFulfilled,
      (state, { payload }) => {
        state.user.books.push(payload.book);
        return state;
      },
    );
    builder.addMatcher(
      userApi.endpoints.reserveBook.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          reservations: payload.reservation,
        };
      },
    );
    builder.addMatcher(
      userApi.endpoints.deleteBook.matchFulfilled,
      (state, { payload }) => {
        state.user.books = state.user.books.filter(
          (book) => book.id !== payload.deletedReservation.id,
        );
        return state;
      },
    );
  },
});

export const { setToken } = userSlice.actions;
export default userSlice.reducer;
