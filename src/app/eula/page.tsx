import { LegacyPage, legacyMetadata } from "@/lib/legacy-page";

const file = "pages/eula.html";
export const metadata = legacyMetadata(file);

export default function Page() {
  return <LegacyPage file={file} />;
}
