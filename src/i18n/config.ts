export const locales = ["de", "en", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  uz: "O'zbekcha",
};

export const localeFlags: Record<Locale, string> = {
  de: "🇩🇪",
  en: "🇬🇧",
  uz: "🇺🇿",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function localeHref(locale: Locale, path: string = "") {
  if (!path || path === "/") return `/${locale}`;
  return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
}
