import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Axial Holistic Depression Clinic | Rockwall, TX Psychiatrist",
  description:
    "Holistic, integrative psychiatry for chronic and treatment-resistant depression. Serving Rockwall, TX and the greater DFW area. Dr. Ankit Parmar, triple board-certified psychiatrist. Call 972-478-0152.",
  keywords: [
    "psychiatrist Rockwall TX",
    "depression treatment Rockwall Texas",
    "treatment-resistant depression DFW",
    "holistic psychiatry North Texas",
    "Dr Ankit Parmar psychiatrist",
    "depression clinic Rockwall",
    "integrative mental health DFW",
    "chronic depression treatment Texas",
    "psychiatrist near me Rockwall",
    "depression specialist North Texas",
  ],
  openGraph: {
    title: "Axial Holistic Depression Clinic | Rockwall, TX",
    description:
      "Deeply personalized, holistic care for treatment-resistant depression in Rockwall, TX. Dr. Ankit Parmar — triple board-certified psychiatrist serving DFW.",
    url: "https://holisticdepression.com",
    siteName: "Axial Holistic Depression Clinic",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://holisticdepression.com/hope-path.png",
        width: 1200,
        height: 630,
        alt: "Axial Holistic Depression Clinic — Rockwall, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axial Holistic Depression Clinic | Rockwall, TX Psychiatrist",
    description:
      "Holistic, integrative care for chronic and treatment-resistant depression. Serving Rockwall, TX and greater DFW.",
    images: ["https://holisticdepression.com/hope-path.png"],
  },
  alternates: {
    canonical: "https://holisticdepression.com",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Axial Holistic Depression Clinic",
  description:
    "Holistic, integrative care for chronic and treatment-resistant depression in Rockwall, TX. Serving the greater DFW area.",
  url: "https://holisticdepression.com",
  telephone: "+19724780152",
  faxNumber: "+16599011257",
  email: "practice@axialtms.com",
  medicalSpecialty: "Psychiatry",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6730 Horizon Rd, STE C",
    addressLocality: "Rockwall",
    addressRegion: "TX",
    postalCode: "75032",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9310,
    longitude: -96.4597,
  },
  areaServed: [
    { "@type": "City", name: "Rockwall", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Rowlett", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Wylie", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Garland", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Mesquite", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Heath", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Fate", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Dallas", containedIn: { "@type": "State", name: "Texas" } },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  physician: {
    "@type": "Physician",
    name: "Dr. Ankit Parmar",
    medicalSpecialty: "Psychiatry",
    description: "Triple board-certified psychiatrist specializing in treatment-resistant depression.",
    worksFor: { "@type": "MedicalClinic", name: "Axial Holistic Depression Clinic" },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a psychiatrist in Rockwall, TX who specializes in treatment-resistant depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dr. Ankit Parmar at Axial Holistic Depression Clinic in Rockwall, TX specializes in holistic, integrative care for chronic and treatment-resistant depression. The clinic is located at 6730 Horizon Rd, STE C, Rockwall, TX 75032.",
      },
    },
    {
      "@type": "Question",
      name: "Does Dr. Ankit Parmar accept Medicare and other insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Axial Holistic Depression Clinic accepts most major insurance plans including Medicare, Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. Call 972-478-0152 to verify your specific coverage.",
      },
    },
    {
      "@type": "Question",
      name: "What is treatment-resistant depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Treatment-resistant depression occurs when a person does not respond adequately to two or more antidepressant treatments tried at adequate doses and duration. It is more common than many people realize, and specialized holistic, integrative care — like what Dr. Parmar provides — can offer new paths forward.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities near Rockwall does Axial Holistic Depression Clinic serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axial Holistic Depression Clinic primarily serves Rockwall, TX and surrounding communities including Rowlett, Wylie, Heath, Fate, Garland, Mesquite, and the broader Dallas-Fort Worth metroplex.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Axial Holistic Depression Clinic different from other psychiatry practices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Parmar takes a deeply personalized, holistic approach — combining biological, psychological, and lifestyle factors — rather than relying on medication alone. As a triple board-certified psychiatrist with over 10 years of experience and more than 5,000 patients helped, he builds a care plan tailored entirely to each individual.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make an appointment at Axial Holistic Depression Clinic in Rockwall?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach us by calling 972-478-0152, emailing practice@axialtms.com, or filling out the contact form on this website. The clinic is located at 6730 Horizon Rd, STE C, Rockwall, TX 75032 and is open Monday through Friday, 9am to 5pm.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
