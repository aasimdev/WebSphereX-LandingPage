import type { Metadata } from "next";

const BASE_URL = "https://webspherex.io";
const PAGE_URL = `${BASE_URL}/services/ai-agents`;
const TITLE = "AI Agents Development";
const DESCRIPTION =
  "Build autonomous AI agents that reason, act, and integrate with your workflows. WebSphereX delivers production-ready multi-agent systems.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI agents development",
    "autonomous AI agents",
    "LLM agents",
    "multi-agent systems",
    "agentic AI",
    "AI workflow automation",
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
