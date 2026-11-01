import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-cyan-500 bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          MARK.AI
        </h1>

        <div className="flex gap-6 text-sm">

          <Link
            href="/"
            className="hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/portfolio"
            className="hover:text-cyan-400"
          >
            Portfolio
          </Link>

          <Link
            href="/ai"
            className="hover:text-cyan-400"
          >
            AI News
          </Link>

          <Link
            href="/india"
            className="hover:text-cyan-400"
          >
            India News
          </Link>

          <Link
            href="/memes"
            className="hover:text-cyan-400"
          >
            Memes
          </Link>

          <Link
            href="/assistant"
            className="hover:text-cyan-400"
          >
            MARK AI
          </Link>

        </div>
      </div>
    </nav>
  );
}