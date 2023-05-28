import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/category",
      providesTags : ['catogery']
    }),
    getLabels: builder.query({
      query: () => "/label",
      providesTags : ['label']
    }),
    addTransaction: builder.mutation({
      query: (inistialState) => ({
        url: "/transaction",
        method: "POST",
        body: inistialState,
      }),
      invalidatesTags:['transaction']
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags:['transaction']
    }),
  }),
});

export default apiSlice;
