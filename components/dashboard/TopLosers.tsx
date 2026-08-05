"use client";

import { stocks } from "@/data/stocks";

export default function TopLosers() {
  const losers = [...stocks]
    .sort(
      (a, b) =>
        a.change - b.change
    )
    .slice(0, 3);

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Top Losers
      </h2>

      <div className="space-y-4">
        {losers.map((stock) => (
          <div
            key={stock.symbol}
            className="flex justify-between"
          >
            <span>
              {stock.symbol}
            </span>

            <span className="text-red-500">
              {stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}