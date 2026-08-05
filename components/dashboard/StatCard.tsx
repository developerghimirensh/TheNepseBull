type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 p-4">
      <h3 className="text-zinc-500">
        {title}
      </h3>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}