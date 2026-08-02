import Script from "next/script";
import { LegacyPage, legacyMetadata } from "@/lib/legacy-page";

const file = "pages/download.html";
export const metadata = legacyMetadata(file);

export default function Page() {
  return (
    <>
      <Script src="/store-links.js" strategy="beforeInteractive" />
      <Script src="/download-redirect.js" strategy="beforeInteractive" />
      <LegacyPage file={file} />
    </>
  );
}
