import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).impressum;

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900">
        {dict.title}
      </h1>

      <p className="mb-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        {dict.draftNotice}
      </p>

      <div className="flex flex-col gap-6 text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.tmgHeading}
          </h2>
          <p>
            {dict.tmgLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < dict.tmgLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.contactHeading}
          </h2>
          <p>
            {dict.phoneLine}
            <br />
            {dict.emailLine}
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.registerHeading}
          </h2>
          <p>{dict.registerText}</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.vatHeading}
          </h2>
          <p>{dict.vatText}</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.responsibleHeading}
          </h2>
          <p>{dict.responsibleText}</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            {dict.disputeHeading}
          </h2>
          <p>
            {dict.disputeText.split("https://ec.europa.eu/consumers/odr/")[0]}
            <a href="https://ec.europa.eu/consumers/odr/" className="underline">
              https://ec.europa.eu/consumers/odr/
            </a>
            {dict.disputeText.split("https://ec.europa.eu/consumers/odr/")[1]}
          </p>
        </section>
      </div>
    </main>
  );
}
