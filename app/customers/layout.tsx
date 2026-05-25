import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/customers`;
const TITLE = "Customer Stories";
const DESCRIPTION =
  "See how WebSphereX has helped 200+ companies ship better software. Real products, real results, and measurable outcomes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "WebSphereX reviews",
    "software development case studies",
    "client success stories",
    "WebSphereX portfolio",
    "software agency testimonials",
    "client results",
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
