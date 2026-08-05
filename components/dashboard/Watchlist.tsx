const watchlist = [
  {
    symbol: "NABIL",
    price: 850,
    change: 2.5,
  },
  {
    symbol: "NICA",
    price: 620,
    change: -1.2,
  },
  {
    symbol: "SHIVM",
    price: 510,
    change: 3.1,
  },
];

export default function Watchlist() {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-xl font-bold">
        Watchlist
      </h2>

      <div className="space-y-4">
        {watchlist.map((stock) => (
          <div
            key={stock.symbol}
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">
                {stock.symbol}
              </h3>
              <p className="text-zinc-500">
                Rs. {stock.price}
              </p>
            </div>

            <p
              className={
                stock.change > 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {stock.change}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}