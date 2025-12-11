import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import DynamicBackground from "@/components/backgrounds/DynamicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arsalan Javed | Business Analyst & Project Manager",
  description:
    "Portfolio of Arsalan Javed - Business Analyst & Project Manager specializing in process optimization, stakeholder management, and n8n workflow automation. Expert in Agile/Scrum methodologies and digital transformation.",
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
  ],
  authors: [{ name: "Arsalan Javed" }],
  creator: "Arsalan Javed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Arsalan Javed | Business Analyst & Project Manager",
    description:
      "Business Analyst & Project Manager specializing in process optimization and n8n workflow automation. Delivering digital transformation projects with measurable results.",
    siteName: "Arsalan Javed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsalan Javed | Business Analyst & Project Manager",
    description:
      "Business Analyst & Project Manager specializing in process optimization and n8n workflow automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* Dynamic Background - appears globally behind all content */}
        <DynamicBackground />
        
        {/* Main content with relative positioning to layer above background */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
