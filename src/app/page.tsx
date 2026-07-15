import { LegacyPage, legacyMetadata } from "@/lib/legacy-page";

export const metadata = legacyMetadata("index.html");

export default function HomePage() {
  return <LegacyPage file="index.html" />;
}