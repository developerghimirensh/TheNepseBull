"use client";

import { useTrading }
from "@/context/TradingContext";

export default function Transactions() {
  const { trades } =
    useTrading();

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Transactions
      </h2>

      <div className="space-y-4">
        {trades.map((trade) => (
          <div
            key={trade.id}
            className="
            flex
            justify-between
          "
          >
            <span>
              {trade.type}
              {" "}
              {trade.quantity}
              {" "}
              {
                trade.symbol
              }
            </span>

            <span>
              Rs.
              {trade.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}