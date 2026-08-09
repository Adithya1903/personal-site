import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { SITE_URL } from "@/content";
import "./globals.css";

const description =
  "I build stablecoin and AI products, and the developer ecosystems around them. Product & Developer Relations at MOI Protocol (Sarva Labs).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adithya Ganesh",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Adithya Ganesh",
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adithya Ganesh",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
