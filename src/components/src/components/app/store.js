import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import { booksApi } from "./booksApi";
import userSlice from "./userSlice";
import { userApi } from "./userApi";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    bookSlice,
    [userApi.reducerPath]: userApi.reducer,
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, userApi.middleware),
});
