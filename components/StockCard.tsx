type Props = {
  symbol: string;
  name: string;
  price: number;
  change: number;
};

export default function StockCard({
  symbol,
  name,
  price,
  change,
}: Props) {
  return (
    <div className="border border-zinc-800 rounded-xl p-4">
      <h2 className="font-bold text-xl">
        {symbol}
      </h2>

      <p>{name}</p>

      <p className="mt-2">
        Rs. {price}
      </p>

      <p
        className={
          change > 0
            ? "text-green-500"
            : "text-red-500"
        }
      >
        {change}%
      </p>
    </div>
  );
}