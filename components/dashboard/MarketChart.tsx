"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", value: 100000 },
  { day: "Tue", value: 101500 },
  { day: "Wed", value: 103000 },
  { day: "Thu", value: 102200 },
  { day: "Fri", value: 105420 },
];

export default function MarketChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 p-6">
      <h2 className="mb-6 text-xl font-bold">
        Portfolio Growth
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#39FF14"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}