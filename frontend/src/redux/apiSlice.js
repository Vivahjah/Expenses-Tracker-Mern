import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
      providesTags : ['catogeries']
    }),
    getLabels: builder.query({
      query: () => "/label",
      providesTags : ['transactions']
    }),
    addTransaction: builder.mutation({
      query: (initialState) => ({
        url: "/transaction",
        method: "POST",
        body: initialState,
      }),
      invalidatesTags:['transactions']
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags:['transactions']
    }),
  }),
});

export default apiSlice;
