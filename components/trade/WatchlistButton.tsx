"use client";

import { useTrading } from "@/context/TradingContext";

type Props = {
  symbol: string;
};

export default function WatchlistButton({
  symbol,
}: Props) {
  const {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  } = useTrading();

  const isAdded =
    watchlist.includes(symbol);

  return (
    <button
      onClick={() => {
        if (isAdded) {
          removeFromWatchlist(symbol);
        } else {
          addToWatchlist(symbol);
        }
      }}
      className="
      w-full
      rounded-xl
      border
      border-zinc-700
      py-3
      transition-all
      hover:border-[#39FF14]
    "
    >
      {isAdded
        ? "Remove from Watchlist"
        : "Add to Watchlist"}
    </button>
  );
}