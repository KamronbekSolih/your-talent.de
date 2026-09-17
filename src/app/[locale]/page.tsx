import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, localeHref, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[520px] items-center overflow-hidden">
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
      </section>

      {/* Für Unternehmen */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {dict.forCompanies.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            {dict.forCompanies.intro}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {dict.forCompanies.services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-medium text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href={localeHref(locale as Locale, "/fuer-unternehmen")}
            className="mt-8 inline-block text-sm font-medium text-orange-600 hover:underline"
          >
            {dict.home.learnMore} →
          </Link>
        </div>
      </section>

      {/* Für Bewerber */}
      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {dict.forCandidates.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            {dict.forCandidates.intro}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {dict.forCandidates.steps.map((step) => (
              <div
                key={step.title}
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-medium text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href={localeHref(locale as Locale, "/fuer-bewerber")}
            className="mt-8 inline-block text-sm font-medium text-orange-600 hover:underline"
          >
            {dict.home.learnMore} →
          </Link>
        </div>
      </section>

      {/* Vacancies preview */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {dict.vacanciesPreview.heading}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            {dict.vacanciesPreview.subheading}
          </p>
          <ul className="mt-10 flex flex-col gap-4">
            {dict.vacanciesPreview.sample.map((vacancy) => (
              <li
                key={vacancy.title}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <span className="font-medium text-zinc-900">
                  {vacancy.title}
                </span>
                <span className="text-sm text-zinc-500">
                  {vacancy.location} · {vacancy.employmentType}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={localeHref(locale as Locale, "/vacancies")}
            className="mt-8 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
          >
            {dict.vacanciesPreview.viewAll}
          </Link>
        </div>
      </section>

      {/* About us */}
      <section className="bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            {dict.about.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-zinc-600">
            {dict.about.paragraph}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {dict.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-semibold text-orange-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
