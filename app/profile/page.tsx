import DashboardLayout from "@/components/layout/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-zinc-800 p-8">
        <div className="flex items-center gap-6">
          <div
            className="
            h-24
            w-24
            rounded-full
            bg-[#39FF14]
          "
          />

          <div>
            <h1 className="text-3xl font-bold">
              Demo User
            </h1>

            <p className="text-zinc-500">
              demo@example.com
            </p>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-800 p-4">
            Balance
            <h2 className="text-2xl font-bold">
              Rs. 100,000
            </h2>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            Trades
            <h2 className="text-2xl font-bold">
              24
            </h2>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            Rank
            <h2 className="text-2xl font-bold">
              #12
            </h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}