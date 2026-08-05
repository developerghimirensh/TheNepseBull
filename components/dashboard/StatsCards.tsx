"use client";

import { useTrading } from "@/context/TradingContext";

export default function StatsCards() {
  const {
    cash,
    portfolioValue,
    totalProfit,
  } = useTrading();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-800 p-6">
        <p className="text-zinc-500">
          Portfolio Value
        </p>

        <h2 className="text-3xl font-bold">
          Rs.{" "}
          {portfolioValue.toLocaleString()}
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <p className="text-zinc-500">
          Cash Balance
        </p>

        <h2 className="text-3xl font-bold">
          Rs. {cash.toLocaleString()}
        </h2>
      </div>

      <div className="rounded-2xl border border-zinc-800 p-6">
        <p className="text-zinc-500">
          Profit / Loss
        </p>

        <h2 className="text-3xl font-bold text-[#39FF14]">
          Rs.{" "}
          {totalProfit.toLocaleString()}
        </h2>
      </div>
    </div>
  );
}