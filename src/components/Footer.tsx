import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} your-talent.de</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-zinc-900">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-zinc-900">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
