type Props = {
  balance: number;
  profit: number;
};

export default function PortfolioCard({
  balance,
  profit,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="text-zinc-400">
        Portfolio Value
      </h2>

      <p className="mt-2 text-4xl font-bold">
        Rs. {balance.toLocaleString()}
      </p>

      <p className="mt-3 text-[#39FF14]">
        + Rs. {profit.toLocaleString()}
      </p>
    </div>
  );
}