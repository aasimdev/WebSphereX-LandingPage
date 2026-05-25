import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/careers`;
const TITLE = "Careers at WebSphereX — Join Our Engineering Team";
const DESCRIPTION =
  "Work with senior engineers on cutting-edge AI and software projects. Explore open roles at WebSphereX and build products that matter.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "WebSphereX careers",
    "software engineering jobs",
    "AI developer jobs",
    "remote engineering jobs",
    "join software agency",
    "software developer hiring",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
