"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CandlestickChart,
  Briefcase,
  Eye,
  Trophy,
  User,
} from "lucide-react";

type Props = {
  children: ReactNode;
};

const NAV_LINKS = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Trade", href: "/trade", icon: CandlestickChart },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Watchlist", href: "/watchlist", icon: Eye },
  { name: "Leaderboard", href: "/leaderboard", icon: Trophy },
] as const;

export default function DashboardLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-zinc-800 p-6">
        {/* Brand Header */}
        <div className="mb-8 text-2xl font-bold tracking-wider text-[#39FF14]">
          NEPSE SIM
        </div>

        {/* Index Widget */}
        <div className="mb-8 rounded-2xl border border-zinc-800 bg-black p-4">
          <p className="text-sm text-zinc-500">NEPSE Index</p>
          <h2 className="mt-2 text-3xl font-bold">2145.33</h2>
          <p className="mt-1 text-[#39FF14]">+25.42 (+1.20%)</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-[#39FF14] text-black shadow-[0_0_20px_#39FF14]"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Info */}
        <div className="mt-auto pt-6">
          <div className="rounded-2xl border border-zinc-800 p-4">
            <div className="flex items-center gap-3">
              <User size={20} />
              <div>
                <p className="font-medium">Guest User</p>
                <p className="text-sm text-zinc-500">Virtual Trader</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">NEPSE Virtual Trading</h1>
            <p className="text-zinc-500">
              Practice trading with virtual money
            </p>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}