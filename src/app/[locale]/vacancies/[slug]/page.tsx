import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Vacancy } from "@/lib/supabase/types";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { ApplicationForm } from "@/components/ApplicationForm";

export const dynamic = "force-dynamic";

export default async function VacancyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  const supabase = await createClient();
  const { data: vacancy } = await supabase
    .from("vacancies")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle<Vacancy>();

  if (!vacancy) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {vacancy.title}
      </h1>
      <div className="mt-2 flex gap-3 text-sm text-zinc-500">
        {vacancy.location && <span>{vacancy.location}</span>}
        {vacancy.employment_type && <span>· {vacancy.employment_type}</span>}
      </div>

      <div className="prose prose-zinc mt-8 max-w-none whitespace-pre-wrap text-zinc-700">
        {vacancy.description}
      </div>

      {vacancy.requirements && (
        <div className="mt-6">
          <h2 className="text-lg font-medium text-zinc-900">
            {dict.vacancyDetail.requirementsHeading}
          </h2>
          <div className="mt-2 whitespace-pre-wrap text-zinc-700">
            {vacancy.requirements}
          </div>
        </div>
      )}

      <div className="mt-10 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium text-zinc-900">
          {dict.vacancyDetail.applyHeading}
        </h2>
        <ApplicationForm
          vacancyId={vacancy.id}
          locale={locale as Locale}
          dict={dict.applicationForm}
        />
      </div>
    </main>
  );
}
