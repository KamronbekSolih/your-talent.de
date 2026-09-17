import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale).datenschutz;

  const sections = [
    [dict.s1Heading, dict.s1Text],
    [dict.s2Heading, dict.s2Text],
    [dict.s3Heading, dict.s3Text],
    [dict.s4Heading, dict.s4Text],
    [dict.s5Heading, dict.s5Text],
    [dict.s6Heading, dict.s6Text],
    [dict.s7Heading, dict.s7Text],
    [dict.s8Heading, dict.s8Text],
  ];

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900">
        {dict.title}
      </h1>

      <p className="mb-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        {dict.draftNotice}
      </p>

      <div className="flex flex-col gap-6 text-zinc-700">
        {sections.map(([heading, text]) => (
          <section key={heading}>
            <h2 className="mb-2 text-lg font-medium text-zinc-900">
              {heading}
            </h2>
            <p>{text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
