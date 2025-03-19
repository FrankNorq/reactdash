import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savings: 0,
  startAmount: 10000,
  monthlyDeposit: 1000,
  years: 1,
};

const indexSavingSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    indexGrowth: (state, action) => {
      state.savings = action.payload;
    },
    updateSavingsParameters: (state, action) => {
      state.startAmount = action.payload.startAmount;
      state.monthlyDeposit = action.payload.monthlyDeposit;
      state.years = action.payload.years;
    },
  },
});

export const { indexGrowth, updateSavingsParameters } =
  indexSavingSlice.actions;
export default indexSavingSlice.reducer;
