import Link from "next/link";

const steps = [
  {
    title: "1. Bewerbung",
    description:
      "Sie bewerben sich unkompliziert auf eine unserer offenen Stellen – mit Ihren Kontaktdaten und Ihrem Lebenslauf.",
  },
  {
    title: "2. Auswahlgespräch",
    description:
      "Wir lernen Sie kennen, besprechen Ihre Erfahrung und Wünsche und stellen Ihnen passende Unternehmen vor.",
  },
  {
    title: "3. Visum und Anerkennung",
    description:
      "Wir begleiten Sie bei Visa-Antrag, Einreise und – falls nötig – bei der Anerkennung Ihrer ausländischen Qualifikation.",
  },
  {
    title: "4. Ankunft und Integration",
    description:
      "Vom ersten Arbeitstag bis zur Wohnungssuche: Wir unterstützen Sie beim Ankommen in Deutschland.",
  },
];

export default function ForApplicantsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900">
        Für Bewerber
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-600">
        Sie möchten in Deutschland arbeiten? Wir vermitteln Fachkräfte aus dem
        Ausland an Unternehmen in Deutschland und begleiten Sie kostenfrei
        durch den gesamten Prozess – von der Bewerbung bis zum ersten
        Arbeitstag.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-medium text-zinc-900">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-zinc-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-medium text-zinc-900">
          Bereit für den nächsten Schritt?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
          Sehen Sie sich unsere aktuellen Stellenangebote an und bewerben Sie
          sich direkt online.
        </p>
        <Link
          href="/vacancies"
          className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white hover:bg-orange-600"
        >
          Offene Stellen ansehen
        </Link>
      </div>
    </main>
  );
}
