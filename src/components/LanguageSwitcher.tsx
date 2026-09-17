"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { FlagDE, FlagGB, FlagUZ } from "./Flags";

const flagComponents: Record<Locale, (props: { className?: string }) => React.JSX.Element> = {
  de: FlagDE,
  en: FlagGB,
  uz: FlagUZ,
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentFlag = flagComponents[locale];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md border border-zinc-200 px-2.5 py-1.5 text-sm hover:bg-zinc-50"
      >
        <CurrentFlag className="h-3.5 w-5 shrink-0 rounded-[2px]" />
        <span className="font-medium text-zinc-700">{locale.toUpperCase()}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-3.5 w-3.5 text-zinc-400"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-zinc-200 bg-white py-1 shadow-lg"
        >
          {locales.map((loc) => {
            const Flag = flagComponents[loc];
            return (
              <li key={loc}>
                <Link
                  href={`/${loc}${rest}`}
                  onClick={() => {
                    document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000`;
                    setOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-zinc-50 ${
                    loc === locale
                      ? "font-medium text-orange-600"
                      : "text-zinc-700"
                  }`}
                >
                  <Flag className="h-3.5 w-5 shrink-0 rounded-[2px]" />
                  <span>{localeNames[loc]}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
