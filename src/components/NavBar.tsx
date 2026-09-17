import Link from "next/link";

export function NavBar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          href="/"
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-900"
        >
          your-talent<span className="text-orange-500">.de</span>
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium text-zinc-600">
          <Link href="/" className="whitespace-nowrap hover:text-zinc-900">
            Start
          </Link>
          <Link
            href="/fuer-unternehmen"
            className="whitespace-nowrap hover:text-zinc-900"
          >
            Für Unternehmen
          </Link>
          <Link
            href="/fuer-bewerber"
            className="whitespace-nowrap hover:text-zinc-900"
          >
            Für Bewerber
          </Link>
          <Link
            href="/vacancies"
            className="whitespace-nowrap hover:text-zinc-900"
          >
            Stellenangebote
          </Link>
        </div>
      </nav>
    </header>
  );
}
