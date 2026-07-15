import { LegacyPage, legacyMetadata } from "@/lib/legacy-page";

const file = "pages/kvkk.html";
export const metadata = legacyMetadata(file);

export default function Page() {
  return <LegacyPage file={file} />;
}