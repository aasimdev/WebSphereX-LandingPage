import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/terms`;
const TITLE = "Terms of Service";
const DESCRIPTION =
  "WebSphereX's terms and conditions for service engagements and website use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["WebSphereX terms of service", "service agreement", "terms and conditions"],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: false },
  openGraph: {
    title: `${TITLE} — WebSphereX`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
