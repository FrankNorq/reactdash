import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const IndexChart = () => {
  const { startAmount, monthlyDeposit, years } = useSelector(
    (state) => state.savings
  );
  const annualReturn = 7;

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

  // Funktion för att beräkna summan av alla insättningar
  const calculateTotalDeposits = (startAmount, monthlyDeposit, years) => {
    const totalMonthlyDeposits = monthlyDeposit * years * 12;
    return startAmount + totalMonthlyDeposits;
  };

  // Skapa data för grafen
  const data = [];
  for (let year = 0; year <= years; year++) {
    const totalSavings = calculateFutureValue(
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
    const interest = totalSavings - totalDeposits;

    data.push({
      year: `Year ${year}`,
      deposits: Math.round(totalDeposits),
      interest: Math.round(interest),
    });
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold text-center mb-4">Index Savings</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
          <Tooltip
            formatter={(value) => [`$${value.toLocaleString()}`, "Amount"]}
            labelFormatter={(label) => `📅 ${label}`}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ marginTop: 10 }}
          />
          <Bar dataKey="deposits" stackId="a" fill="#1E40AF" />
          <Bar dataKey="interest" stackId="a" fill="#15803D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IndexChart;
