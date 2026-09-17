import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localeHref } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { CookiePreferencesButton } from "./CookiePreferencesButton";

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["footer"];
}) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} your-talent.de</p>
        <div className="flex gap-4">
          <Link href={localeHref(locale, "/impressum")} className="hover:text-zinc-900">
            {dict.impressum}
          </Link>
          <Link href={localeHref(locale, "/datenschutz")} className="hover:text-zinc-900">
            {dict.datenschutz}
          </Link>
          <CookiePreferencesButton label={dict.cookiePreferences} />
        </div>
      </div>
    </footer>
  );
}
