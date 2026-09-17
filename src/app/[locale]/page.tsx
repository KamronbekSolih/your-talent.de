import Image from "next/image";
import Link from "next/link";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-zinc-900/60" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white">
          {dict.home.title}
        </h1>
        <p className="max-w-xl text-lg text-zinc-200">{dict.home.subtitle}</p>
        <Link
          href={localeHref(locale as Locale, "/vacancies")}
          className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
        >
          {dict.home.cta}
        </Link>
      </div>
    </main>
  );
}
