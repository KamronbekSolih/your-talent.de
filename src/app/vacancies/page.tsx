import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Vacancy } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function VacanciesPage() {
  const supabase = await createClient();
  const { data: vacancies } = await supabase
    .from("vacancies")
    .select("*")
    .eq("is_published", true)
    .order("created_at", { ascending: false })
    .returns<Vacancy[]>();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-zinc-900">
        Offene Stellen
      </h1>

      {!vacancies || vacancies.length === 0 ? (
        <p className="text-zinc-600">
          Aktuell sind keine Stellen ausgeschrieben. Schauen Sie bald wieder
          vorbei.
        </p>
      ) : (
        <ul className="flex flex-col gap-4">
          {vacancies.map((vacancy) => (
            <li
              key={vacancy.id}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Link
                href={`/vacancies/${vacancy.slug}`}
                className="text-xl font-medium text-zinc-900 hover:text-orange-600"
              >
                {vacancy.title}
              </Link>
              <div className="mt-1 flex gap-3 text-sm text-zinc-500">
                {vacancy.location && <span>{vacancy.location}</span>}
                {vacancy.employment_type && <span>· {vacancy.employment_type}</span>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
