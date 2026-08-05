"use client";

import { useState } from "react";
import { useTrading } from "@/context/TradingContext";
import { useMarketSimulation } from "@/hooks/useMarketSimulation";

type Props = {
  symbol: string;
  price: number;
};

export default function TradeCard({
  symbol,
  price,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const simulatedPrice =
    useMarketSimulation(price);

  const {
    buyStock,
    sellStock,
    cash,
  } = useTrading();

  const totalCost =
    quantity * simulatedPrice;

  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-3xl font-bold">
        {symbol}
      </h2>

      <p className="mt-2 text-zinc-400">
        Current Price
      </p>

      <p className="text-3xl font-bold text-[#39FF14]">
        Rs. {simulatedPrice}
      </p>

      <p className="mt-2 text-zinc-400">
        Available Cash
      </p>

      <p className="text-xl font-semibold">
        Rs. {cash.toLocaleString()}
      </p>

      <div className="mt-6">
        <label className="mb-2 block">
          Quantity
        </label>

        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Number(e.target.value)
            )
          }
          className="
            w-full
            rounded-lg
            border
            border-zinc-700
            bg-zinc-900
            p-3
            outline-none
            focus:border-[#39FF14]
          "
        />
      </div>

      <div className="mt-4">
        <p className="text-zinc-400">
          Total Cost
        </p>

        <p className="text-2xl font-bold">
          Rs. {totalCost.toLocaleString()}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            buyStock(
              symbol,
              quantity,
              simulatedPrice
            )
          }
          className="
            flex-1
            rounded-xl
            bg-[#39FF14]
            py-3
            font-bold
            text-black
            transition-all
            hover:shadow-[0_0_20px_#39FF14]
          "
        >
          Buy
        </button>

        <button
          onClick={() =>
            sellStock(
              symbol,
              quantity,
              simulatedPrice
            )
          }
          className="
            flex-1
            rounded-xl
            border
            border-red-500
            py-3
            font-bold
            text-red-500
            transition-all
            hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]
          "
        >
          Sell
        </button>
      </div>
    </div>
  );
}