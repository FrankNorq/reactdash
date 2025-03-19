import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savings: 0,
  startAmount: 10000,
  monthlyDeposit: 1000,
  years: 5,
  savingsData: [],
  annualReturn: 7,
};

const calculateFutureValue = (
  startAmount,
  monthlyDeposit,
  years,
  annualReturn
) => {
  const r = annualReturn / 100 / 12;
  const n = years * 12;
  return (
    startAmount * Math.pow(1 + r, n) +
    monthlyDeposit * ((Math.pow(1 + r, n) - 1) / r)
  );
};

const calculateTotalDeposits = (startAmount, monthlyDeposit, years) => {
  return startAmount + monthlyDeposit * years * 12;
};

const indexSavingSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    updateSavingsParameters: (state, action) => {
      state.startAmount = action.payload.startAmount;
      state.monthlyDeposit = action.payload.monthlyDeposit;
      state.years = action.payload.years;
    },
    calculateSavings: (state) => {
      let savingsData = [];
      let calculatedSavings = 0;
      const { startAmount, monthlyDeposit, years, annualReturn } = state;

      for (let year = 0; year <= years; year++) {
        calculatedSavings = calculateFutureValue(
          startAmount,
          monthlyDeposit,
          year,
          annualReturn
        );
        const totalDeposits = calculateTotalDeposits(
          startAmount,
          monthlyDeposit,
          year
        );
        const interest = calculatedSavings - totalDeposits;

        savingsData.push({
          year: `Year ${year}`,
          deposits: Math.round(totalDeposits),
          interest: Math.round(interest),
        });
      }

      state.savings = Math.round(calculatedSavings);
      state.savingsData = savingsData;
    },
  },
});

export const { updateSavingsParameters, calculateSavings } =
  indexSavingSlice.actions;
export default indexSavingSlice.reducer;
