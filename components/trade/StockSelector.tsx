"use client";

type Stock = {
  symbol: string;
  name: string;
  price: number;
  change: number;
};

type Props = {
  stocks: Stock[];
  selected: Stock;
  onSelect: (stock: Stock) => void;
};

export default function StockSelector({
  stocks,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-xl font-bold">
        Select Stock
      </h2>

      <select
        value={selected.symbol}
        onChange={(e) => {
          const stock = stocks.find(
            (s) => s.symbol === e.target.value
          );

          if (stock) {
            onSelect(stock);
          }
        }}
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-black
          p-3
          outline-none
        "
      >
        {stocks.map((stock) => (
          <option
            key={stock.symbol}
            value={stock.symbol}
          >
            {stock.symbol} - {stock.name}
          </option>
        ))}
      </select>
    </div>
  );
}