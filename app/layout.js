import { Geist, Geist_Mono, Russo_One } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://excellarv.com"),
  title: "Mobile RV Repair in Phoenix | AC, Roof & Electrical | Excella RV",
  description: "Professional RV repair services in the Phoenix Valley. Specializing in Airstream trailers, bodywork, and systems repair.",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: "https://excellarv.com/",
  },
  openGraph: {
    title: "Mobile RV Repair in Phoenix | AC, Roof & Electrical | Excella RV",
    description: "Professional RV repair services in the Phoenix Valley. Specializing in Airstream trailers, bodywork, and systems repair.",
    url: "https://excellarv.com",
    siteName: "Excella RV Repair",
    images: [
      {
        url: "/excella-logo.png",
        width: 400,
        height: 120,
        alt: "Excella RV Repair Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile RV Repair in Phoenix | AC, Roof & Electrical | Excella RV",
    description: "Professional RV repair services in the Phoenix Valley. Specializing in Airstream trailers, bodywork, and systems repair.",
    images: ["/excella-logo.png"],
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Excella RV Repair",
  "url": "https://excellarv.com",
  "areaServed": "Phoenix Valley",
  "serviceType": ["Mobile RV Repair", "Airstream Repair", "RV Bodywork", "RV Electrical", "RV AC Repair"],
  "telephone": "480-630-6095",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Apache Junction",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "description": "Professional RV repair services in the Phoenix Valley. Specializing in Airstream trailers, bodywork, and systems repair.",
  "openingHours": "By Appointment",
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Check", "Credit Card"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
