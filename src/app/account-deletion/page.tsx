import { LegacyPage, legacyMetadata } from "@/lib/legacy-page";

const file = "pages/account-deletion.html";
export const metadata = legacyMetadata(file);

export default function Page() {
  return <LegacyPage file={file} />;
}
