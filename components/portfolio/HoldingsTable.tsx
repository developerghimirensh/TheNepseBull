"use client";

import { useTrading }
from "@/context/TradingContext";

export default function HoldingsTable() {
  const { holdings } =
    useTrading();

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-2xl font-bold">
        Holdings
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>Current</th>
            <th>P/L</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((holding) => {
            const profit =
              (holding.currentPrice -
                holding.avgPrice) *
              holding.quantity;

            return (
              <tr
                key={holding.symbol}
              >
                <td>
                  {holding.symbol}
                </td>

                <td>
                  {holding.quantity}
                </td>

                <td>
                  {holding.avgPrice.toFixed(
                    2
                  )}
                </td>

                <td>
                  {
                    holding.currentPrice
                  }
                </td>

                <td
                  className={
                    profit >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {profit.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}