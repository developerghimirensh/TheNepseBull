"use client";

import { stocks } from "@/data/stocks";

export default function MarketOverview() {
  const averageChange =
    stocks.reduce(
      (acc, stock) =>
        acc + stock.change,
      0
    ) / stocks.length;

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Market Overview
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Listed Stocks</span>
          <span>{stocks.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Average Change</span>

          <span
            className={
              averageChange >= 0
                ? "text-[#39FF14]"
                : "text-red-500"
            }
          >
            {averageChange.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}