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

const BitcoinChart = () => {
  const { savingsData } = useSelector((state) => state.bitcoinSavings);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 my-16! bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-semibold text-center mb-4">
        Bitcoin Savings
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={savingsData.filter((entry) => entry.year !== "Year 0")}>
          <XAxis
            dataKey="year"
            interval={2}
            tickFormatter={(value, index) =>
              index === 0 ? value : value.replace("Year ", "")
            }
          />
          <YAxis
            tickFormatter={(value) => {
              if (value >= 1_000_000) {
                return `$${(value / 1_000_000).toFixed(1)}M`;
              } else if (value >= 1_000) {
                return `$${(value / 1_000).toFixed(0)}k`;
              }
              return `$${value.toLocaleString()}`;
            }}
          />
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

export default BitcoinChart;
