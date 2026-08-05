"use client";

import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";
import TradeCard from "@/components/trade/TradeCard";
import StockDetail from "@/components/trade/StockDetail";
import StockSelector from "@/components/trade/StockSelector";
import WatchlistButton from "@/components/trade/WatchlistButton";

import { stocks } from "@/data/stocks";

export default function TradePage() {
  const [selectedStock, setSelectedStock] =
    useState(stocks[0]);

  return (
    <DashboardLayout>
      <h1 className="mb-6 text-4xl font-bold">
        Trade
      </h1>

      <div className="space-y-6">
        <StockSelector
          stocks={stocks}
          selected={selectedStock}
          onSelect={setSelectedStock}
        />

        <StockDetail
          symbol={selectedStock.symbol}
          company={selectedStock.name}
          price={selectedStock.price}
          change={selectedStock.change}
        />

        <TradeCard
          symbol={selectedStock.symbol}
          price={selectedStock.price}
        />

        <WatchlistButton
          symbol={selectedStock.symbol}
        />
      </div>
    </DashboardLayout>
  );
}