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
  title: "Axial Holistic Depression Clinic",
  description:
    "Holistic, integrative care for chronic and treatment-resistant depression. Deeply personalized treatment for adults 18+ in Rockwall, TX.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Axial Holistic Depression Clinic",
  description:
    "Holistic, integrative care for chronic and treatment-resistant depression in Rockwall, TX.",
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
  },
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
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
