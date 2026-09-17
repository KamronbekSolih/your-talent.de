import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).contact;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900">
        {dict.title}
      </h1>
      <p className="mb-10 max-w-xl text-lg text-zinc-600">{dict.intro}</p>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-medium text-zinc-900">
            {dict.detailsHeading}
          </h2>
          <p className="text-sm text-zinc-600">
            {dict.phoneLine}
            <br />
            {dict.emailLine}
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <ContactForm locale={locale as Locale} dict={dict} />
        </div>
      </div>
    </main>
  );
}
