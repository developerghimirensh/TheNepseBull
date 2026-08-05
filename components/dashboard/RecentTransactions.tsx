"use client";

import { useTrading } from "@/context/TradingContext";

export default function RecentTransactions() {
  const { trades } = useTrading();

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Recent Transactions
      </h2>

      {trades.length === 0 ? (
        <p className="text-zinc-500">
          No transactions yet
        </p>
      ) : (
        <div className="space-y-3">
          {trades.slice(0, 5).map((trade) => (
            <div
              key={trade.id}
              className="flex justify-between border-b border-zinc-800 pb-2"
            >
              <div>
                <p className="font-medium">
                  {trade.type} {trade.symbol}
                </p>

                <p className="text-sm text-zinc-500">
                  Qty: {trade.quantity}
                </p>
              </div>

              <div className="text-right">
                <p>
                  Rs. {trade.price}
                </p>

                <p className="text-xs text-zinc-500">
                  {new Date(
                    trade.timestamp
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}