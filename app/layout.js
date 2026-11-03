import Analytics from "./components/Analytics";
import Motion from "./components/Motion";
import { SiteSchema } from "./components/StructuredData";
import { siteUrl } from "./lib/seo";
import "./motion.css";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Maruti Khapare Portfolio",
  creator: "Maruti Khapare",
  robots: { index: true, follow: true },
  title: "Maruti Khapare — Search, Paid Media & Growth Strategy",
  description:
    "SEO, content strategy and integrated growth work by Maruti Khapare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body style={{ margin: 0 }}>
        <SiteSchema />
        {children}
        <Analytics />
        <Motion />
      </body>
    </html>
  );
}
