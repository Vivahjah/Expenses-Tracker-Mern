import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cateories: [],
  transaction: [],
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    getTransaction: (state) => {
      //get the code
    },
  },
});

export const { getTransaction } = expenseSlice.actions;
export default expenseSlice.reducer;
