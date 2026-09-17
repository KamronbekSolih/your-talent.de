"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const links = [
    { href: localeHref(locale), label: dict.start },
    { href: localeHref(locale, "/fuer-unternehmen"), label: dict.forCompanies },
    { href: localeHref(locale, "/fuer-bewerber"), label: dict.forCandidates },
    { href: localeHref(locale, "/vacancies"), label: dict.vacancies },
    { href: localeHref(locale, "/kontakt"), label: dict.contact },
  ];

  return (
    <header className="relative z-40 border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href={localeHref(locale)}
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-900"
        >
          your-talent<span className="text-orange-500">.de</span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="rounded-md p-2 text-zinc-700 hover:bg-zinc-50"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-1 text-sm font-medium text-zinc-600">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 hover:bg-zinc-50 hover:text-zinc-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
