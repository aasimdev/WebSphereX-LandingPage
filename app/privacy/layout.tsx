import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/privacy`;
const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How WebSphereX collects, uses, and protects your personal data. GDPR and privacy-first practices.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["WebSphereX privacy policy", "data protection", "GDPR compliance"],
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
