"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTrading } from "@/context/TradingContext";
import { stocks } from "@/data/stocks";

export default function WatchlistPage() {
  const { watchlist } =
    useTrading();

  const watchedStocks =
    stocks.filter((stock) =>
      watchlist.includes(stock.symbol)
    );

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-4xl font-bold">
        Watchlist
      </h1>

      {watchedStocks.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 p-6">
          No stocks in watchlist.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {watchedStocks.map((stock) => (
            <div
              key={stock.symbol}
              className="
              rounded-2xl
              border
              border-zinc-800
              p-6
            "
            >
              <h2 className="text-2xl font-bold">
                {stock.symbol}
              </h2>

              <p className="text-zinc-500">
                {stock.name}
              </p>

              <p className="mt-4 text-xl">
                Rs. {stock.price}
              </p>

              <p
                className={
                  stock.change >= 0
                    ? "text-[#39FF14]"
                    : "text-red-500"
                }
              >
                {stock.change}%
              </p>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}