"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

const users = [
  {
    rank: 1,
    name: "TraderX",
    portfolio: 145000,
    profit: 45000,
  },
  {
    rank: 2,
    name: "BullMaster",
    portfolio: 132000,
    profit: 32000,
  },
  {
    rank: 3,
    name: "MarketKing",
    portfolio: 125000,
    profit: 25000,
  },
  {
    rank: 4,
    name: "Guest User",
    portfolio: 118000,
    profit: 18000,
  },
];

export default function LeaderboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">
          Leaderboard
        </h1>

        <div className="rounded-2xl border border-zinc-800 p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="pb-4 text-left">
                  Rank
                </th>

                <th className="pb-4 text-left">
                  Trader
                </th>

                <th className="pb-4 text-left">
                  Portfolio
                </th>

                <th className="pb-4 text-left">
                  Profit
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.rank}
                  className="border-b border-zinc-900"
                >
                  <td className="py-4">
                    #{user.rank}
                  </td>

                  <td>{user.name}</td>

                  <td>
                    Rs.{" "}
                    {user.portfolio.toLocaleString()}
                  </td>

                  <td className="text-[#39FF14]">
                    Rs.{" "}
                    {user.profit.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}