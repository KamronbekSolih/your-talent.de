import type { Dictionary } from "../types";

export const de: Dictionary = {
  nav: {
    start: "Start",
    forCompanies: "Für Unternehmen",
    forCandidates: "Für Bewerber",
    vacancies: "Stellenangebote",
    contact: "Kontakt",
  },
  footer: {
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    cookiePreferences: "Cookie-Einstellungen",
  },
  cookieConsent: {
    message:
      "Diese Website verwendet neben technisch notwendigen Cookies auch Analyse-Cookies (Google Analytics), um zu verstehen, wie Besucher die Seite nutzen. Sie können der Nutzung von Analyse-Cookies zustimmen oder sie ablehnen.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
  },
  home: {
    title: "Internationale Fachkräfte für Ihr Unternehmen",
    subtitle:
      "Wir vermitteln qualifizierte Fachkräfte aus dem Ausland und begleiten Bewerber und Unternehmen durch den gesamten Prozess.",
    cta: "Offene Stellen ansehen",
  },
  vacanciesList: {
    title: "Offene Stellen",
    empty:
      "Aktuell sind keine Stellen ausgeschrieben. Schauen Sie bald wieder vorbei.",
    location: "Standort",
  },
  vacancyDetail: {
    requirementsHeading: "Anforderungen",
    applyHeading: "Jetzt bewerben",
  },
  applicationForm: {
    name: "Name *",
    email: "E-Mail *",
    phone: "Telefon",
    message: "Nachricht",
    cv: "Lebenslauf (PDF, max. 10 MB)",
    consentPrefix: "Ich stimme zu, dass meine Angaben gemäß der",
    consentLink: "Datenschutzerklärung",
    consentSuffix:
      "zur Bearbeitung meiner Bewerbung gespeichert und verarbeitet werden. *",
    submit: "Bewerbung senden",
    submitting: "Wird gesendet…",
    success: "Vielen Dank für Ihre Bewerbung! Wir melden uns bei Ihnen.",
    errorConsent: "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.",
    errorFileSize: "Die Datei darf maximal 10 MB groß sein.",
    errorUpload: "Der Lebenslauf konnte nicht hochgeladen werden.",
    errorSubmit:
      "Die Bewerbung konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  },
  forCompanies: {
    title: "Für Unternehmen",
    intro:
      "Sie suchen zuverlässige Fachkräfte und finden auf dem deutschen Arbeitsmarkt keine passenden Kandidaten? Wir vermitteln internationale Talente und begleiten Sie durch den gesamten Prozess – von der Suche bis zum erfolgreichen Arbeitsstart.",
    services: [
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
    ],
    ctaTitle: "Interesse an unseren Leistungen?",
    ctaText:
      "Kontaktieren Sie uns für eine unverbindliche Beratung. Wir besprechen gerne Ihre individuellen Anforderungen.",
    ctaButton: "Kontakt aufnehmen",
  },
  forCandidates: {
    title: "Für Bewerber",
    intro:
      "Sie möchten in Deutschland arbeiten? Wir vermitteln Fachkräfte aus dem Ausland an Unternehmen in Deutschland und begleiten Sie kostenfrei durch den gesamten Prozess – von der Bewerbung bis zum ersten Arbeitstag.",
    steps: [
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
    ],
    ctaTitle: "Bereit für den nächsten Schritt?",
    ctaText:
      "Sehen Sie sich unsere aktuellen Stellenangebote an und bewerben Sie sich direkt online.",
    ctaButton: "Offene Stellen ansehen",
  },
  impressum: {
    title: "Impressum",
    draftNotice:
      "Entwurf — bitte durch die echten Firmendaten ersetzen, bevor die Seite veröffentlicht wird. Ein unvollständiges oder falsches Impressum ist in Deutschland abmahnfähig.",
    tmgHeading: "Angaben gemäß § 5 TMG",
    tmgLines: [
      "[Firmenname / Vor- und Nachname]",
      "[Straße und Hausnummer]",
      "[PLZ und Ort]",
      "[Land]",
    ],
    contactHeading: "Kontakt",
    phoneLine: "Telefon: [Telefonnummer]",
    emailLine: "E-Mail: [E-Mail-Adresse]",
    registerHeading: "Handelsregister",
    registerText:
      "[Falls eingetragen: Registergericht, Registernummer. Falls Einzelunternehmen ohne Eintragung: Abschnitt entfernen.]",
    vatHeading: "Umsatzsteuer-ID",
    vatText:
      "Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [USt-IdNr., falls vorhanden]",
    responsibleHeading: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV",
    responsibleText: "[Name und Anschrift der verantwortlichen Person]",
    disputeHeading: "EU-Streitschlichtung",
    disputeText:
      "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.",
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    draftNotice:
      "Entwurf — bitte die eckigen Platzhalter durch die echten Angaben ersetzen und im Zweifel juristisch prüfen lassen, insbesondere zur Aufbewahrungsdauer von Bewerbungsunterlagen.",
    s1Heading: "1. Verantwortlicher",
    s1Text:
      "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: [Firmenname / Vor- und Nachname], [Straße und Hausnummer, PLZ, Ort], E-Mail: [E-Mail-Adresse]",
    s2Heading: "2. Welche Daten wir verarbeiten",
    s2Text:
      "Wenn Sie sich über unsere Website auf eine Stelle bewerben oder uns über das Kontaktformular schreiben, verarbeiten wir die von Ihnen angegebenen Daten: Name, E-Mail-Adresse, Telefonnummer, Ihre Nachricht sowie – sofern hochgeladen – Ihren Lebenslauf. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage bzw. Bewerbung verwendet.",
    s3Heading: "3. Rechtsgrundlage",
    s3Text:
      "Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Durchführung vorvertraglicher Maßnahmen im Rahmen des Bewerbungsprozesses (Art. 6 Abs. 1 lit. b DSGVO).",
    s4Heading: "4. Speicherdauer",
    s4Text:
      "Ihre Daten werden für die Dauer des Bewerbungs- bzw. Anfrageverfahrens gespeichert und spätestens [Zeitraum, z. B. 6 Monate] nach Abschluss gelöscht, sofern Sie nicht einer längeren Aufbewahrung zugestimmt haben.",
    s5Heading: "5. Hosting und technische Verarbeitung",
    s5Text:
      "Unsere Website und die zugehörige Datenbank werden bei Supabase (Serverstandort EU, Frankfurt) gehostet. Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. [Angaben zum Hosting-Anbieter der Website selbst ergänzen, z. B. Vercel.]",
    s6Heading: "6. Cookies",
    s6Text:
      "Diese Website verwendet technisch notwendige Cookies zur Aufrechterhaltung der Anmeldesitzung im Admin-Bereich und zur Speicherung Ihrer Sprachauswahl sowie Ihrer Cookie-Einstellung. Zusätzlich setzen wir – nur mit Ihrer Einwilligung – Google Analytics zur anonymisierten Analyse der Websitenutzung ein (IP-Anonymisierung aktiviert). Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen” im Footer widerrufen oder erteilen. Es werden keine Marketing- oder Werbe-Cookies eingesetzt.",
    s7Heading: "7. Ihre Rechte",
    s7Text:
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer Daten (Art. 15–21 DSGVO). Zudem können Sie eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an die oben genannte E-Mail-Adresse.",
    s8Heading: "8. Beschwerderecht",
    s8Text:
      "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.",
  },
  contact: {
    title: "Kontakt",
    intro:
      "Haben Sie Fragen zu unseren Leistungen? Schreiben Sie uns – wir melden uns so schnell wie möglich bei Ihnen.",
    detailsHeading: "Kontaktdaten",
    phoneLine: "Telefon: [Telefonnummer]",
    emailLine: "E-Mail: [E-Mail-Adresse]",
    formName: "Name *",
    formEmail: "E-Mail *",
    formMessage: "Nachricht *",
    consentPrefix: "Ich stimme zu, dass meine Angaben gemäß der",
    consentLink: "Datenschutzerklärung",
    consentSuffix:
      "zur Bearbeitung meiner Anfrage gespeichert und verarbeitet werden. *",
    submit: "Nachricht senden",
    submitting: "Wird gesendet…",
    success: "Vielen Dank für Ihre Nachricht! Wir melden uns bei Ihnen.",
    errorConsent: "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.",
    errorSubmit:
      "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
  },
};
