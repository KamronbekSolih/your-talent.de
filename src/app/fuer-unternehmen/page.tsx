import Link from "next/link";

const services = [
  {
    title: "Internationale Fachkräftevermittlung",
    description:
      "Wir finden qualifizierte Fachkräfte aus dem Ausland, die zu Ihren Anforderungen passen – von der Vorauswahl bis zur Qualifikationsprüfung.",
  },
  {
    title: "Visa- und Einreiseberatung",
    description:
      "Wir begleiten Sie und Ihre neuen Mitarbeiter durch alle Visa- und Einreiseformalitäten und kennen die aktuellen rechtlichen Anforderungen.",
  },
  {
    title: "Anerkennung ausländischer Abschlüsse",
    description:
      "Wir unterstützen bei der Anerkennung ausländischer Qualifikationen in Deutschland und koordinieren mit den zuständigen Stellen.",
  },
  {
    title: "Onboarding und Integration",
    description:
      "Von der Wohnungssuche bis zu Behördengängen – wir helfen Ihren neuen Mitarbeitern, in Ihrem Unternehmen und in Deutschland anzukommen.",
  },
];

export default function ForCompaniesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900">
        Für Unternehmen
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        Sie suchen zuverlässige Fachkräfte und finden auf dem deutschen
        Arbeitsmarkt keine passenden Kandidaten? Wir vermitteln internationale
        Talente und begleiten Sie durch den gesamten Prozess – von der Suche
        bis zum erfolgreichen Arbeitsstart.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
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
        <h2 className="text-xl font-medium text-zinc-900">
          Interesse an unseren Leistungen?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
          Kontaktieren Sie uns für eine unverbindliche Beratung. Wir
          besprechen gerne Ihre individuellen Anforderungen.
        </p>
        <Link
          href="/impressum"
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
        >
          Kontaktdaten ansehen
        </Link>
      </div>
    </main>
  );
}
