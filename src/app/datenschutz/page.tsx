export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900">
        Datenschutzerklärung
      </h1>

      <p className="mb-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        Entwurf — bitte die eckigen Platzhalter durch die echten Angaben
        ersetzen und im Zweifel juristisch prüfen lassen, insbesondere zur
        Aufbewahrungsdauer von Bewerbungsunterlagen.
      </p>

      <div className="flex flex-col gap-6 text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            1. Verantwortlicher
          </h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO)
            ist:
            <br />
            [Firmenname / Vor- und Nachname]
            <br />
            [Straße und Hausnummer, PLZ, Ort]
            <br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            2. Welche Daten wir verarbeiten
          </h2>
          <p>
            Wenn Sie sich über unsere Website auf eine Stelle bewerben,
            verarbeiten wir die von Ihnen angegebenen Daten: Name,
            E-Mail-Adresse, Telefonnummer, Ihre Nachricht sowie – sofern
            hochgeladen – Ihren Lebenslauf. Diese Daten werden ausschließlich
            zur Bearbeitung Ihrer Bewerbung verwendet.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            3. Rechtsgrundlage
          </h2>
          <p>
            Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher
            Maßnahmen im Rahmen des Bewerbungsprozesses (Art. 6 Abs. 1 lit. b
            DSGVO).
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            4. Speicherdauer
          </h2>
          <p>
            Ihre Bewerbungsdaten werden für die Dauer des
            Bewerbungsverfahrens gespeichert und spätestens [Zeitraum, z. B.
            6 Monate] nach Abschluss des Verfahrens gelöscht, sofern Sie
            nicht einer längeren Aufbewahrung zugestimmt haben.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            5. Hosting und technische Verarbeitung
          </h2>
          <p>
            Unsere Website und die zugehörige Datenbank werden bei Supabase
            (Serverstandort EU, Frankfurt) gehostet. Mit dem Anbieter besteht
            ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. [Angaben zum
            Hosting-Anbieter der Website selbst ergänzen, z. B. Vercel.]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            6. Cookies
          </h2>
          <p>
            Diese Website verwendet ausschließlich technisch notwendige
            Cookies zur Aufrechterhaltung der Anmeldesitzung im Admin-Bereich.
            Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            7. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 15–21
            DSGVO). Zudem können Sie eine erteilte Einwilligung jederzeit mit
            Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an die
            oben genannte E-Mail-Adresse.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            8. Beschwerderecht
          </h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu
            beschweren.
          </p>
        </section>
      </div>
    </main>
  );
}
