import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Script from 'next/script';

export const metadata = {
  title: 'Maruti Khapare — Search, Paid Media & Growth Strategy',
  description: "Maruti Khapare's growth portfolio: SEO, programmatic SEO, GEO, PPC, performance marketing and brand growth projects.",
  alternates: { canonical: '/' },
  verification: { google: 'kBgf-h4W7siGwEF_eWLb7z5jBvGGbaRf0G6RXZ_Vb_M' },
};

// Render the retained portfolio in Next.js while company case studies are added.
// Only this repository's trusted HTML is read; no visitor input is interpolated.
export default async function Home() {
  const html = await readFile(path.join(process.cwd(), 'index.html'), 'utf8');
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n');
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  return <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" />
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <div dangerouslySetInnerHTML={{ __html: body }} />
    {scripts.map((m, i) => {
      const source = m[1].match(/\bsrc=["']([^"']+)["']/i)?.[1];
      return source
        ? <Script key={i} id={`portfolio-${i}`} src={source} strategy="afterInteractive" />
        : <Script key={i} id={`portfolio-${i}`} strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: m[2] }} />;
    })}
  </>;
}
