"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");

  return (
    <div className="flex gap-2 text-xs font-semibold text-zinc-400">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          {i > 0 && <span className="text-zinc-300">/</span>}
          <Link
            href={`/${loc}${rest}`}
            onClick={() => {
              document.cookie = `NEXT_LOCALE=${loc}; path=/; max-age=31536000`;
            }}
            className={
              loc === locale
                ? "text-orange-600"
                : "hover:text-zinc-900"
            }
          >
            {loc.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
