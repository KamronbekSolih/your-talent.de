import type { Dictionary } from "../types";

export const en: Dictionary = {
  nav: {
    start: "Home",
    forCompanies: "For Companies",
    forCandidates: "For Candidates",
    vacancies: "Vacancies",
    contact: "Contact",
  },
  footer: {
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    cookiePreferences: "Cookie Settings",
  },
  cookieConsent: {
    message:
      "Besides technically necessary cookies, this website also uses analytics cookies (Google Analytics) to understand how visitors use the site. You can accept or decline analytics cookies.",
    accept: "Accept",
    decline: "Decline",
  },
  home: {
    title: "International skilled workers for your company",
    subtitle:
      "We place qualified skilled workers from abroad and support both candidates and companies through the entire process.",
    cta: "View open positions",
    learnMore: "Learn more",
  },
  vacanciesList: {
    title: "Open Positions",
    empty: "There are currently no open positions. Please check back soon.",
    location: "Location",
  },
  vacanciesPreview: {
    heading: "Current Openings",
    subheading: "A selection of our open positions",
    viewAll: "View all vacancies",
    sample: [
      { title: "Registered Nurse", location: "Berlin", employmentType: "Full-time" },
      { title: "Warehouse Logistics Specialist", location: "Hamburg", employmentType: "Full-time" },
      { title: "IT Specialist", location: "Munich", employmentType: "Full-time" },
    ],
  },
  about: {
    heading: "About Us",
    paragraph:
      "your-talent.de is a placeholder company profile. [Add a short description of your company, its founding story, and its mission here.] We connect international skilled workers with companies in Germany and support both sides through the entire process – from recruitment to successful integration.",
    stats: [
      { value: "500+", label: "Skilled workers placed" },
      { value: "10+", label: "Years of experience" },
      { value: "50+", label: "Partner companies" },
    ],
  },
  vacancyDetail: {
    requirementsHeading: "Requirements",
    applyHeading: "Apply now",
  },
  applicationForm: {
    name: "Name *",
    email: "Email *",
    phone: "Phone",
    message: "Message",
    cv: "CV / Resume (PDF, max. 10 MB)",
    consentPrefix: "I agree that my details will be stored and processed in accordance with the",
    consentLink: "Privacy Policy",
    consentSuffix: "to process my application. *",
    submit: "Send application",
    submitting: "Sending…",
    success: "Thank you for your application! We will get back to you.",
    errorConsent: "Please agree to the processing of your data.",
    errorFileSize: "The file must be no larger than 10 MB.",
    errorUpload: "The CV could not be uploaded.",
    errorSubmit: "The application could not be sent. Please try again.",
  },
  forCompanies: {
    title: "For Companies",
    intro:
      "Looking for reliable skilled workers but can't find suitable candidates on the German job market? We place international talent and support you through the entire process – from the search to a successful start.",
    services: [
      {
        title: "International recruitment",
        description:
          "We find qualified skilled workers from abroad who match your requirements – from pre-selection to qualification checks.",
      },
      {
        title: "Visa and immigration advice",
        description:
          "We guide you and your new employees through all visa and entry formalities and stay up to date on current legal requirements.",
      },
      {
        title: "Recognition of foreign qualifications",
        description:
          "We support the recognition of foreign qualifications in Germany and coordinate with the responsible authorities.",
      },
      {
        title: "Onboarding and integration",
        description:
          "From finding an apartment to dealing with authorities – we help your new employees settle in at your company and in Germany.",
      },
    ],
    ctaTitle: "Interested in our services?",
    ctaText:
      "Get in touch for a no-obligation consultation. We're happy to discuss your specific requirements.",
    ctaButton: "Get in touch",
  },
  forCandidates: {
    title: "For Candidates",
    intro:
      "Want to work in Germany? We place skilled workers from abroad with companies in Germany and support you free of charge through the entire process – from application to your first day at work.",
    steps: [
      {
        title: "1. Application",
        description:
          "You apply for one of our open positions in a few simple steps – with your contact details and CV.",
      },
      {
        title: "2. Interview",
        description:
          "We get to know you, discuss your experience and preferences, and introduce you to suitable companies.",
      },
      {
        title: "3. Visa and recognition",
        description:
          "We support you with your visa application, entry into Germany, and – if needed – recognition of your foreign qualification.",
      },
      {
        title: "4. Arrival and integration",
        description:
          "From your first day at work to finding an apartment: we support you in settling into life in Germany.",
      },
    ],
    ctaTitle: "Ready for the next step?",
    ctaText: "Check out our current job openings and apply directly online.",
    ctaButton: "View open positions",
  },
  impressum: {
    title: "Legal Notice",
    draftNotice:
      "Draft — please replace with the real company details before publishing. German law requires an accurate legal notice (Impressum) on every commercial website.",
    tmgHeading: "Information according to § 5 TMG (German law)",
    tmgLines: [
      "[Company name / Full name]",
      "[Street and house number]",
      "[Postal code and city]",
      "[Country]",
    ],
    contactHeading: "Contact",
    phoneLine: "Phone: [phone number]",
    emailLine: "Email: [email address]",
    registerHeading: "Commercial register",
    registerText:
      "[If registered: register court, registration number. If a sole proprietorship without registration: remove this section.]",
    vatHeading: "VAT ID",
    vatText: "VAT identification number per § 27a UStG: [VAT ID, if applicable]",
    responsibleHeading: "Responsible for content per § 55 (2) RStV",
    responsibleText: "[Name and address of the responsible person]",
    disputeHeading: "EU dispute resolution",
    disputeText:
      "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/. Our email address can be found above in this legal notice.",
  },
  datenschutz: {
    title: "Privacy Policy",
    draftNotice:
      "Draft — please replace the bracketed placeholders with real details and have this reviewed by a legal professional, especially regarding how long application documents are retained.",
    s1Heading: "1. Controller",
    s1Text:
      "The controller under the General Data Protection Regulation (GDPR) is: [Company name / Full name], [Street and house number, postal code, city], Email: [email address]",
    s2Heading: "2. What data we process",
    s2Text:
      "When you apply for a position through our website or write to us via the contact form, we process the data you provide: name, email address, phone number, your message, and – if uploaded – your CV. This data is used exclusively to process your inquiry or application.",
    s3Heading: "3. Legal basis",
    s3Text:
      "Processing is based on your consent (Art. 6(1)(a) GDPR) and on the performance of pre-contractual measures as part of the application process (Art. 6(1)(b) GDPR).",
    s4Heading: "4. Retention period",
    s4Text:
      "Your data is stored for the duration of the application or inquiry process and deleted no later than [period, e.g. 6 months] after it concludes, unless you have agreed to longer retention.",
    s5Heading: "5. Hosting and technical processing",
    s5Text:
      "Our website and its database are hosted with Supabase (EU server location, Frankfurt). A data processing agreement under Art. 28 GDPR is in place with this provider. [Add details of the website's own hosting provider, e.g. Vercel.]",
    s6Heading: "6. Cookies",
    s6Text:
      "This website uses technically necessary cookies to maintain the admin login session and to remember your language preference and your cookie choice. In addition – only with your consent – we use Google Analytics for anonymized analysis of website usage (IP anonymization enabled). You can withdraw or grant consent at any time via the \"Cookie Settings\" link in the footer. No marketing or advertising cookies are used.",
    s7Heading: "7. Your rights",
    s7Text:
      "You have the right to access, rectify, erase, and restrict the processing of your data, as well as the right to data portability and to object to processing (Art. 15–21 GDPR). You may also withdraw any consent given at any time with effect for the future. Please contact us at the email address above.",
    s8Heading: "8. Right to complain",
    s8Text:
      "You have the right to lodge a complaint with a data protection supervisory authority regarding the processing of your personal data.",
  },
  contact: {
    title: "Contact",
    intro:
      "Have questions about our services? Write to us – we'll get back to you as soon as possible.",
    detailsHeading: "Contact details",
    phoneLine: "Phone: [phone number]",
    emailLine: "Email: [email address]",
    formName: "Name *",
    formEmail: "Email *",
    formMessage: "Message *",
    consentPrefix:
      "I agree that my details will be stored and processed in accordance with the",
    consentLink: "Privacy Policy",
    consentSuffix: "to process my inquiry. *",
    submit: "Send message",
    submitting: "Sending…",
    success: "Thank you for your message! We will get back to you.",
    errorConsent: "Please agree to the processing of your data.",
    errorSubmit: "The message could not be sent. Please try again.",
  },
};
