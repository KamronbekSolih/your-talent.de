import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function ForCompaniesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).forCompanies;

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900">
        {dict.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">{dict.intro}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {dict.services.map((service) => (
          <div
            key={service.title}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-medium text-zinc-900">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-medium text-zinc-900">{dict.ctaTitle}</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
          {dict.ctaText}
        </p>
        <Link
          href={localeHref(locale as Locale, "/kontakt")}
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
        >
          {dict.ctaButton}
        </Link>
      </div>
    </main>
  );
}
