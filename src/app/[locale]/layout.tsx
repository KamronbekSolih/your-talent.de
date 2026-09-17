import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { geistSans, geistMono } from "@/lib/fonts";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { Analytics } from "@/components/Analytics";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    title: `your-talent.de – ${dict.home.title}`,
    description: dict.home.subtitle,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">
        <NavBar locale={locale as Locale} dict={dict.nav} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer locale={locale as Locale} dict={dict.footer} />
        <CookieConsent dict={dict.cookieConsent} />
        <Analytics />
      </body>
    </html>
  );
}
