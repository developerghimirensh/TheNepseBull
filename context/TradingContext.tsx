


"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Holding, Trade } from "@/types/trading";

type TradingContextType = {
  cash: number;
  holdings: Holding[];
  trades: Trade[];

  portfolioValue: number;
  totalProfit: number;

  watchlist: string[];

  addToWatchlist: (symbol: string) => void;
  removeFromWatchlist: (symbol: string) => void;

  buyStock: (
    symbol: string,
    quantity: number,
    price: number
  ) => void;

  sellStock: (
    symbol: string,
    quantity: number,
    price: number
  ) => void;
};

const TradingContext =
  createContext<TradingContextType | null>(
    null
  );

export function TradingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cash, setCash] =
    useState(100000);

  const [holdings, setHoldings] =
    useState<Holding[]>([]);

  const [trades, setTrades] =
    useState<Trade[]>([]);

  const [watchlist, setWatchlist] =
    useState<string[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "nepse-simulator"
      );

    if (!saved) return;

    const parsed =
      JSON.parse(saved);

    setCash(
      parsed.cash ?? 100000
    );

    setHoldings(
      parsed.holdings ?? []
    );

    setTrades(
      parsed.trades ?? []
    );

    setWatchlist(
      parsed.watchlist ?? []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "nepse-simulator",
      JSON.stringify({
        cash,
        holdings,
        trades,
        watchlist,
      })
    );
  }, [
    cash,
    holdings,
    trades,
    watchlist,
  ]);

  const addToWatchlist = (
    symbol: string
  ) => {
    setWatchlist((prev) => {
      if (
        prev.includes(symbol)
      ) {
        return prev;
      }

      return [
        ...prev,
        symbol,
      ];
    });
  };

  const removeFromWatchlist = (
    symbol: string
  ) => {
    setWatchlist((prev) =>
      prev.filter(
        (item) =>
          item !== symbol
      )
    );
  };

  const buyStock = (
    symbol: string,
    quantity: number,
    price: number
  ) => {
    const cost =
      quantity * price;

    if (cost > cash) {
      alert(
        "Not enough cash"
      );
      return;
    }

    setCash(
      (prev) => prev - cost
    );

    setHoldings((prev) => {
      const existing =
        prev.find(
          (h) =>
            h.symbol === symbol
        );

      if (!existing) {
        return [
          ...prev,
          {
            symbol,
            quantity,
            avgPrice: price,
            currentPrice: price,
          },
        ];
      }

      const newQuantity =
        existing.quantity +
        quantity;

      const newAvgPrice =
        (
          existing.quantity *
            existing.avgPrice +
          quantity * price
        ) / newQuantity;

      return prev.map(
        (holding) =>
          holding.symbol ===
          symbol
            ? {
                ...holding,
                quantity:
                  newQuantity,
                avgPrice:
                  newAvgPrice,
                currentPrice:
                  price,
              }
            : holding
      );
    });

    setTrades((prev) => [
      {
        id: crypto.randomUUID(),
        symbol,
        type: "BUY",
        quantity,
        price,
        timestamp:
          new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const sellStock = (
    symbol: string,
    quantity: number,
    price: number
  ) => {
    const holding =
      holdings.find(
        (h) =>
          h.symbol === symbol
      );

    if (
      !holding ||
      holding.quantity <
        quantity
    ) {
      alert(
        "Not enough shares"
      );
      return;
    }

    setCash(
      (prev) =>
        prev +
        quantity * price
    );

    setHoldings((prev) =>
      prev
        .map((holding) =>
          holding.symbol ===
          symbol
            ? {
                ...holding,
                quantity:
                  holding.quantity -
                  quantity,
              }
            : holding
        )
        .filter(
          (holding) =>
            holding.quantity > 0
        )
    );

    setTrades((prev) => [
      {
        id: crypto.randomUUID(),
        symbol,
        type: "SELL",
        quantity,
        price,
        timestamp:
          new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const portfolioValue =
    holdings.reduce(
      (total, holding) =>
        total +
        holding.quantity *
          holding.currentPrice,
      0
    ) + cash;

  const totalProfit =
    holdings.reduce(
      (total, holding) =>
        total +
        (holding.currentPrice -
          holding.avgPrice) *
          holding.quantity,
      0
    );

  return (
    <TradingContext.Provider
      value={{
        cash,
        holdings,
        trades,

        portfolioValue,
        totalProfit,

        watchlist,
        addToWatchlist,
        removeFromWatchlist,

        buyStock,
        sellStock,
      }}
    >
      {children}
    </TradingContext.Provider>
  );
}

export function useTrading() {
  const context =
    useContext(
      TradingContext
    );

  if (!context) {
    throw new Error(
      "useTrading must be used inside TradingProvider"
    );
  }

  return context;
}




