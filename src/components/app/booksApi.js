import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
  }),
  endpoints: (builder) => ({
    /*Returns a list of all books in the database*/
    getAllBooks: builder.query({
      query: () => "/books",
    }),
    /*Returns the details of a single book object*/
    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    /*Any registered user can update (checkout or return) a book. 
    You must pass a valid token with this request, or it will be rejected.*/
    updateBook: builder.mutation({
      query: ({ id, body, token }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetSingleBookQuery,
  useUpdateBookMutation,
} = booksApi;
