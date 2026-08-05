"use client";

import { stocks } from "@/data/stocks";

export default function MarketMovers() {
  const gainers = [...stocks]
    .sort(
      (a, b) =>
        b.change - a.change
    )
    .slice(0, 3);

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Top Gainers
      </h2>

      <div className="space-y-4">
        {gainers.map((stock) => (
          <div
            key={stock.symbol}
            className="flex justify-between"
          >
            <span>
              {stock.symbol}
            </span>

            <span className="text-[#39FF14]">
              +{stock.change}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}