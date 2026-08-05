"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";

import StatsCards from "@/components/dashboard/StatsCards";
import PortfolioChart from "@/components/dashboard/PortfolioChart";
import MarketMovers from "@/components/dashboard/MarketMovers";
import TopLosers from "@/components/dashboard/TopLosers";
import RecentTransactions from "@/components/dashboard/RecentTransactions";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <StatsCards />

        <div className="grid gap-6 lg:grid-cols-2">
          <PortfolioChart />
          <MarketMovers />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <TopLosers />
          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  );
}