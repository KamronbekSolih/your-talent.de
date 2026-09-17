export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900">
        Impressum
      </h1>

      <p className="mb-6 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        Entwurf — bitte durch die echten Firmendaten ersetzen, bevor die
        Seite veröffentlicht wird. Ein unvollständiges oder falsches
        Impressum ist in Deutschland abmahnfähig.
      </p>

      <div className="flex flex-col gap-6 text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            [Firmenname / Vor- und Nachname]
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ und Ort]
            <br />
            [Land]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">Kontakt</h2>
          <p>
            Telefon: [Telefonnummer]
            <br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            Handelsregister
          </h2>
          <p>
            [Falls eingetragen: Registergericht, Registernummer. Falls
            Einzelunternehmen ohne Eintragung: Abschnitt entfernen.]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a
            Umsatzsteuergesetz: [USt-IdNr., falls vorhanden]
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>[Name und Anschrift der verantwortlichen Person]</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-medium text-zinc-900">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              className="underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>
      </div>
    </main>
  );
}
