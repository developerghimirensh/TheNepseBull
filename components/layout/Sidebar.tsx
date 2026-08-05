import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Trade", href: "/trade" },
  { name: "Watchlist", href: "/watchlist" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Profile", href: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-[calc(100vh-64px)] border-r border-zinc-800 p-4">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-900 hover:text-[#39FF14] transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}