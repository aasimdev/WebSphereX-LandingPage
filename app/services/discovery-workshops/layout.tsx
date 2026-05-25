import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/services/discovery-workshops`;
const TITLE = "Discovery Workshops";
const DESCRIPTION =
  "Align teams, validate direction, and eliminate costly surprises with a structured discovery workshop led by WebSphereX senior engineers.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "software discovery workshop",
    "product discovery workshop",
    "technical discovery",
    "agile discovery workshop",
    "requirements discovery",
    "sprint zero workshop",
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
