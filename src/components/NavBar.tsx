import Link from "next/link";

export function NavBar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          your-talent<span className="text-orange-500">.de</span>
        </Link>
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-zinc-900">
            Start
          </Link>
          <Link href="/vacancies" className="hover:text-zinc-900">
            Stellenangebote
          </Link>
        </div>
      </nav>
    </header>
  );
}
