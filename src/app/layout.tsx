// src/app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Frausto - Backend Developer & AI Specialist",
  description: "Experienced Python Developer specializing in backend systems, AI integration, and scalable web solutions.",
  keywords: [
    "Sebastian Frausto",
    "Backend Developer",
    "Python",
    "Django",
    "AI Integration",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Sebastian Frausto" }],
  creator: "Sebastian Frausto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sebastian-frausto.dev",
    title: "Sebastian Frausto - Backend Developer & AI Specialist",
    description: "Experienced Python Developer specializing in backend systems, AI integration, and scalable web solutions.",
    siteName: "Sebastian Frausto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebastian Frausto - Backend Developer & AI Specialist",
    description: "Experienced Python Developer specializing in backend systems, AI integration, and scalable web solutions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}