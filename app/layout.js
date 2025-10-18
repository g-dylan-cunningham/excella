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
  title: "Excella RV Repair - Apache Junction, AZ",
  description: "Professional RV repair services in the Phoenix Valley. Specializing in Airstream trailers, bodywork, and systems repair.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
