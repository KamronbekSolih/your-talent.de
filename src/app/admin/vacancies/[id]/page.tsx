import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Application, Vacancy } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";

export default async function VacancyApplicationsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: vacancy } = await supabase
    .from("vacancies")
    .select("*")
    .eq("id", id)
    .maybeSingle<Vacancy>();

  if (!vacancy) {
    notFound();
  }

  const { data: applications } = await supabase
    .from("applications")
    .select("*")
    .eq("vacancy_id", id)
    .order("created_at", { ascending: false })
    .returns<Application[]>();

  const withCvUrls = await Promise.all(
    (applications || []).map(async (application) => {
      if (!application.cv_path) return { ...application, cvUrl: null };
      const { data } = await supabase.storage
        .from("cvs")
        .createSignedUrl(application.cv_path, 60 * 10);
      return { ...application, cvUrl: data?.signedUrl ?? null };
    })
  );

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
      <Link href="/admin" className="text-sm text-zinc-500 hover:text-zinc-900">
        ← Zurück zum Admin-Bereich
      </Link>
      <h1 className="mt-2 mb-8 text-2xl font-semibold text-zinc-900">
        Bewerbungen: {vacancy.title}
      </h1>

      {withCvUrls.length === 0 ? (
        <p className="text-zinc-600">Noch keine Bewerbungen eingegangen.</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {withCvUrls.map((application) => (
            <li
              key={application.id}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-medium text-zinc-900">{application.full_name}</p>
                <p className="text-xs text-zinc-500">
                  {new Date(application.created_at).toLocaleString("de-DE")}
                </p>
              </div>
              <p className="text-sm text-zinc-600">
                {application.email}
                {application.phone && ` · ${application.phone}`}
              </p>
              {application.message && (
                <p className="mt-2 whitespace-pre-wrap text-sm text-zinc-700">
                  {application.message}
                </p>
              )}
              {application.cvUrl && (
                <a
                  href={application.cvUrl}
                  className="mt-3 inline-block text-sm font-medium text-orange-600 hover:underline"
                >
                  Lebenslauf herunterladen
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
