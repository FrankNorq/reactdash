import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savings: 0,
  startAmount: 10000,
  monthlyDeposit: 1000,
  years: 1,
};

const BitcoinSavingSlice = createSlice({
  name: "bitcoinSavings",
  initialState,
  reducers: {
    bitcoinGrowth: (state, action) => {
      state.savings = action.payload;
    },
    updateBitcoinSavingsParameters: (state, action) => {
      state.startAmount = action.payload.startAmount;
      state.monthlyDeposit = action.payload.monthlyDeposit;
      state.years = action.payload.years;
    },
  },
});

export const { bitcoinGrowth, updateBitcoinSavingsParameters } =
  BitcoinSavingSlice.actions;
export default BitcoinSavingSlice.reducer;
