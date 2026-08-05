"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTrading } from "@/context/TradingContext";

export default function PortfolioPage() {
  const {
    holdings,
    cash,
    portfolioValue,
    totalProfit,
  } = useTrading();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">
          Portfolio
        </h1>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 p-6">
            <p className="text-zinc-500">
              Portfolio Value
            </p>

            <h2 className="text-3xl font-bold">
              Rs. {portfolioValue.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <p className="text-zinc-500">
              Available Cash
            </p>

            <h2 className="text-3xl font-bold">
              Rs. {cash.toLocaleString()}
            </h2>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-6">
            <p className="text-zinc-500">
              Total Profit/Loss
            </p>

            <h2
              className={`text-3xl font-bold ${
                totalProfit >= 0
                  ? "text-[#39FF14]"
                  : "text-red-500"
              }`}
            >
              Rs. {totalProfit.toLocaleString()}
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <h2 className="mb-6 text-2xl font-bold">
            Holdings
          </h2>

          {holdings.length === 0 ? (
            <p className="text-zinc-500">
              No holdings yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="pb-4 text-left">
                      Symbol
                    </th>
                    <th className="pb-4 text-left">
                      Quantity
                    </th>
                    <th className="pb-4 text-left">
                      Avg Price
                    </th>
                    <th className="pb-4 text-left">
                      Current Price
                    </th>
                    <th className="pb-4 text-left">
                      Value
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {holdings.map(
                    (holding) => (
                      <tr
                        key={holding.symbol}
                        className="border-b border-zinc-900"
                      >
                        <td className="py-4">
                          {holding.symbol}
                        </td>

                        <td>
                          {holding.quantity}
                        </td>

                        <td>
                          Rs.{" "}
                          {holding.avgPrice}
                        </td>

                        <td>
                          Rs.{" "}
                          {holding.currentPrice}
                        </td>

                        <td>
                          Rs.{" "}
                          {(
                            holding.quantity *
                            holding.currentPrice
                          ).toLocaleString()}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}