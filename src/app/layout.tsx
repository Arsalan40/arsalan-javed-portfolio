import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import DynamicBackground from "@/components/backgrounds/DynamicBackground";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsalan Javed | Business Analyst & Project Manager",
  description:
    "Experienced Business Analyst and Project Manager with 3+ years delivering digital transformation through strategic planning, process optimization, and intelligent automation. Specializing in n8n workflows, Agile methodologies, and stakeholder management.",
  keywords: [
    "Arsalan Javed",
    "Business Analyst",
    "Project Manager",
    "n8n Automation",
    "Workflow Automation",
    "Agile",
    "Scrum",
    "Process Optimization",
    "Requirements Gathering",
    "Stakeholder Management",
    "Digital Transformation",
    "JIRA",
    "Figma",
    "Business Process Mapping",
    "UAT",
    "Islamabad Pakistan",
  ],
  authors: [{ name: "Arsalan Javed", url: "https://www.linkedin.com/in/engr-arsalanjaved/" }],
  creator: "Arsalan Javed",
  metadataBase: new URL("https://arsalan-javed-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arsalan-javed-portfolio.vercel.app",
    title: "Arsalan Javed | Business Analyst & Project Manager Portfolio",
    description:
      "Experienced Business Analyst with 3+ years specializing in digital transformation, process optimization, and n8n workflow automation. Delivered 20+ projects with 99% client satisfaction.",
    siteName: "Arsalan Javed Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Arsalan Javed - Business Analyst & Project Manager Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsalan Javed | Business Analyst & Project Manager",
    description:
      "Experienced Business Analyst specializing in digital transformation, process optimization, and n8n automation. 3+ years | 20+ projects | 99% satisfaction.",
    images: ["/opengraph-image"],
    creator: "@arsalanjaved",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your verification code later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arsalan Javed",
    jobTitle: "Business Analyst & Project Manager",
    url: "https://arsalan-javed-portfolio.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/engr-arsalanjaved/",
      "https://github.com/Arsalan40",
    ],
    email: "engr.arsalanjaved@gmail.com",
    telephone: "+92-331-5497500",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "Pakistan",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "National University of Sciences and Technology",
        sameAs: "https://nust.edu.pk",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
        sameAs: "https://szabist.edu.pk",
      },
    ],
    knowsAbout: [
      "Business Analysis",
      "Project Management",
      "Process Optimization",
      "Workflow Automation",
      "n8n",
      "Agile Methodologies",
      "Stakeholder Management",
      "Requirements Gathering",
      "Digital Transformation",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {/* Dynamic Background - appears globally behind all content */}
        <DynamicBackground />
        
        {/* Main content with relative positioning to layer above background */}
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
