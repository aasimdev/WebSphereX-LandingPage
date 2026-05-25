import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/services/product-strategy`;
const TITLE = "Product Strategy Consulting";
const DESCRIPTION =
  "A product strategy that connects vision to execution. WebSphereX helps you define roadmap, prioritize features, and align stakeholders.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "product strategy consulting",
    "software product strategy",
    "product roadmap consulting",
    "product vision consulting",
    "go to market strategy software",
    "tech product strategy",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} — WebSphereX`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    title: `${TITLE} — WebSphereX`,
    description: DESCRIPTION,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
