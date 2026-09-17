import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function NavBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <Link
          href={localeHref(locale)}
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-900"
        >
          your-talent<span className="text-orange-500">.de</span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-zinc-600">
          <Link href={localeHref(locale)} className="whitespace-nowrap hover:text-zinc-900">
            {dict.start}
          </Link>
          <Link
            href={localeHref(locale, "/fuer-unternehmen")}
            className="whitespace-nowrap hover:text-zinc-900"
          >
            {dict.forCompanies}
          </Link>
          <Link
            href={localeHref(locale, "/fuer-bewerber")}
            className="whitespace-nowrap hover:text-zinc-900"
          >
            {dict.forCandidates}
          </Link>
          <Link
            href={localeHref(locale, "/vacancies")}
            className="whitespace-nowrap hover:text-zinc-900"
          >
            {dict.vacancies}
          </Link>
          <Link
            href={localeHref(locale, "/kontakt")}
            className="whitespace-nowrap hover:text-zinc-900"
          >
            {dict.contact}
          </Link>
          <LanguageSwitcher locale={locale} />
        </div>
      </nav>
    </header>
  );
}
