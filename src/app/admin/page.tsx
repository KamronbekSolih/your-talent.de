import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Vacancy } from "@/lib/supabase/types";
import { createVacancy, deleteVacancy, signOut, togglePublish } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: vacancies } = await supabase
    .from("vacancies")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<Vacancy[]>();

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Admin-Bereich</h1>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/messages"
            className="text-sm text-zinc-500 hover:text-zinc-900"
          >
            Kontaktnachrichten
          </Link>
          <form action={signOut}>
          <button className="text-sm text-zinc-500 hover:text-zinc-900">
            Abmelden
          </button>
          </form>
        </div>
      </div>

      <section className="mb-10 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-medium text-zinc-900">
          Neue Stelle ausschreiben
        </h2>
        <form action={createVacancy} className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">
              Titel *
            </label>
            <input
              name="title"
              type="text"
              required
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">
                Standort
              </label>
              <input
                name="location"
                type="text"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">
                Beschäftigungsart
              </label>
              <input
                name="employment_type"
                type="text"
                placeholder="Vollzeit, Teilzeit, …"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">
              Beschreibung *
            </label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">
              Anforderungen
            </label>
            <textarea
              name="requirements"
              rows={3}
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            <input name="is_published" type="checkbox" defaultChecked />
            Sofort veröffentlichen
          </label>
          <button
            type="submit"
            className="self-start rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
          >
            Stelle erstellen
          </button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium text-zinc-900">Alle Stellen</h2>
        {!vacancies || vacancies.length === 0 ? (
          <p className="text-zinc-600">Noch keine Stellen angelegt.</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {vacancies.map((vacancy) => (
              <li
                key={vacancy.id}
                className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div>
                  <p className="font-medium text-zinc-900">{vacancy.title}</p>
                  <p className="text-sm text-zinc-500">
                    {vacancy.is_published ? "Veröffentlicht" : "Entwurf"} ·{" "}
                    <Link
                      href={`/admin/vacancies/${vacancy.id}`}
                      className="underline hover:text-zinc-900"
                    >
                      Bewerbungen ansehen
                    </Link>
                  </p>
                </div>
                <div className="flex gap-3">
                  <form action={togglePublish.bind(null, vacancy.id, vacancy.is_published)}>
                    <button className="text-sm text-orange-600 hover:underline">
                      {vacancy.is_published ? "Zurückziehen" : "Veröffentlichen"}
                    </button>
                  </form>
                  <form action={deleteVacancy.bind(null, vacancy.id)}>
                    <button className="text-sm text-red-600 hover:underline">
                      Löschen
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
