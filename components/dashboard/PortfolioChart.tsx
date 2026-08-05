"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTrading } from "@/context/TradingContext";

export default function PortfolioChart() {
  const { holdings } = useTrading();

  const data = holdings.map((holding) => ({
    name: holding.symbol,
    value:
      holding.quantity *
      holding.currentPrice,
  }));

  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800 p-6">
        No holdings available
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 p-6 h-[400px]">
      <h2 className="mb-4 text-2xl font-bold">
        Portfolio Allocation
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={[
                  "#39FF14",
                  "#00E5FF",
                  "#FFB800",
                  "#FF4D6D",
                  "#8B5CF6",
                ][index % 5]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}