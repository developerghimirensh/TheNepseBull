const gainers = [
  { symbol: "SHIVM", gain: "+4.5%" },
  { symbol: "NABIL", gain: "+2.8%" },
  { symbol: "HDL", gain: "+2.3%" },
];

export default function TopGainers() {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-4 text-xl font-bold">
        Top Gainers
      </h2>

      <div className="space-y-4">
        {gainers.map((stock) => (
          <div
            key={stock.symbol}
            className="flex justify-between"
          >
            <span>{stock.symbol}</span>

            <span className="text-[#39FF14]">
              {stock.gain}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}