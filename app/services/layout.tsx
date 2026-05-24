import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore custom tattoo design, tattoo application, laser removal & fading, professional body piercing, and premium jewelry in Galway.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

