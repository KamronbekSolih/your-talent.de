export type ServiceItem = { title: string; description: string };
export type SampleVacancy = { title: string; location: string; employmentType: string };
export type Stat = { value: string; label: string };

export type Dictionary = {
  nav: {
    start: string;
    forCompanies: string;
    forCandidates: string;
    vacancies: string;
    contact: string;
  };
  footer: {
    impressum: string;
    datenschutz: string;
    cookiePreferences: string;
  };
  cookieConsent: {
    message: string;
    accept: string;
    decline: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
    learnMore: string;
  };
  vacanciesList: {
    title: string;
    empty: string;
    location: string;
  };
  vacanciesPreview: {
    heading: string;
    subheading: string;
    viewAll: string;
    sample: [SampleVacancy, SampleVacancy, SampleVacancy];
  };
  about: {
    heading: string;
    paragraph: string;
    stats: [Stat, Stat, Stat];
  };
  vacancyDetail: {
    requirementsHeading: string;
    applyHeading: string;
  };
  applicationForm: {
    name: string;
    email: string;
    phone: string;
    message: string;
    cv: string;
    consentPrefix: string;
    consentLink: string;
    consentSuffix: string;
    submit: string;
    submitting: string;
    success: string;
    errorConsent: string;
    errorFileSize: string;
    errorUpload: string;
    errorSubmit: string;
  };
  forCompanies: {
    title: string;
    intro: string;
    services: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  forCandidates: {
    title: string;
    intro: string;
    steps: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  impressum: {
    title: string;
    draftNotice: string;
    tmgHeading: string;
    tmgLines: [string, string, string, string];
    contactHeading: string;
    phoneLine: string;
    emailLine: string;
    registerHeading: string;
    registerText: string;
    vatHeading: string;
    vatText: string;
    responsibleHeading: string;
    responsibleText: string;
    disputeHeading: string;
    disputeText: string;
  };
  datenschutz: {
    title: string;
    draftNotice: string;
    s1Heading: string;
    s1Text: string;
    s2Heading: string;
    s2Text: string;
    s3Heading: string;
    s3Text: string;
    s4Heading: string;
    s4Text: string;
    s5Heading: string;
    s5Text: string;
    s6Heading: string;
    s6Text: string;
    s7Heading: string;
    s7Text: string;
    s8Heading: string;
    s8Text: string;
  };
  contact: {
    title: string;
    intro: string;
    detailsHeading: string;
    phoneLine: string;
    emailLine: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    consentPrefix: string;
    consentLink: string;
    consentSuffix: string;
    submit: string;
    submitting: string;
    success: string;
    errorConsent: string;
    errorSubmit: string;
  };
};
