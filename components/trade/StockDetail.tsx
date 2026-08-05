type Props = {
  symbol: string;
  company: string;
  price: number;
  change: number;
};

export default function StockDetail({
  symbol,
  company,
  price,
  change,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-4xl font-bold">
        {symbol}
      </h2>

      <p className="text-zinc-500">
        {company}
      </p>

      <p className="mt-4 text-3xl font-bold">
        Rs. {price}
      </p>

      <p
        className={
          change >= 0
            ? "text-[#39FF14]"
            : "text-red-500"
        }
      >
        {change}%
      </p>
    </div>
  );
}