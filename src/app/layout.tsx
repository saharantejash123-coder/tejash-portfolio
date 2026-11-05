import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import { profile, siteUrl } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tejash Saharan | Personal Website",
    template: "%s | Tejash Saharan",
  },
  description:
    "Official personal website of Tejash Saharan, a student developer from Rajasthan exploring technology, coding, design, and personal growth.",
  keywords: [
    "Tejash Saharan",
    "Student Developer",
    "CodeYogi",
    "Code Churu",
    "About Tejash",
    "Portfolio",
    "Rajasthan Developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tejash Saharan",
    title: "Tejash Saharan | Personal Website",
    description:
      "The digital world of Tejash Saharan — a 14-year-old student developer from Rajasthan, India. Story, projects, skills, and ambitions.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tejash Saharan — Personal Website" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejash Saharan | Personal Website",
    description:
      "The digital world of Tejash Saharan — student, developer, creator, dreamer from Rajasthan, India.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: "Student Developer",
  email: profile.email,
  nationality: "Indian",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sahwa, Churu",
    addressRegion: "Rajasthan",
    addressCountry: "India",
  },
  alumniOf: profile.school,
  knowsAbout: ["Web Development", "HTML", "CSS", "JavaScript", "React", "UI Design", "Chess"],
  sameAs: [profile.socials.github, profile.socials.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="relative min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <CursorGlow />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
