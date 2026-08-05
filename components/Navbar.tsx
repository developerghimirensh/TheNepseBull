import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-zinc-800 flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-[#39FF14]">
        NEPSE Sim
      </h1>

      <div className="flex gap-6">

        <Link href="/">Dashboard</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/trade">Trade</Link>
        <button
  className="
  relative
  rounded-full
  border
  border-zinc-800
  p-3
"
>
  🔔

  <span
    className="
    absolute
    right-2
    top-2
    h-2
    w-2
    rounded-full
    bg-red-500
  "
  />
</button>
      </div>
    </nav>
  );
}