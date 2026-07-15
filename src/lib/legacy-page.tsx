import type { Metadata } from "next";
import Script from "next/script";
import { readFileSync } from "node:fs";
import path from "node:path";

type LegacyDocument = {
  body: string;
  inlineScripts: string[];
  styles: string[];
  title: string;
  description: string;
};

function readLegacyDocument(file: string): LegacyDocument {
  const source = readFileSync(path.join(process.cwd(), "legacy", file), "utf8");
  const title = source.match(/<title>([\s\S]*?)<\/title>/i)?.[1].trim() ?? "Picadoo";
  const description = source.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] ?? "";
  const styles = Array.from(source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi), (match) => match[1]);
  const bodySource = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  const inlineScripts = Array.from(
    bodySource.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi),
    (match) => match[1].trim(),
  ).filter(Boolean);
  const body = bodySource.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "");

  return { body, inlineScripts, styles, title, description };
}

export function legacyMetadata(file: string): Metadata {
  const { title, description } = readLegacyDocument(file);
  return { title, description };
}

export function LegacyPage({ file }: { file: string }) {
  const document = readLegacyDocument(file);

  return (
    <>
      {document.styles.map((css, index) => (
        <style key={index} dangerouslySetInnerHTML={{ __html: css }} />
      ))}
      <div dangerouslySetInnerHTML={{ __html: document.body }} />
      <Script src="/i18n-content.js" strategy="afterInteractive" />
      <Script src="/i18n.js" strategy="afterInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
      {document.inlineScripts.map((script, index) => (
        <Script key={index} id={`legacy-inline-${index}`} strategy="afterInteractive">
          {script}
        </Script>
      ))}
    </>
  );
}