import Script from "next/script";
export default function Analytics() {
  return (
    <>
      <Script
        id="google-analytics"
        src="https://www.googletagmanager.com/gtag/js?id=G-QXFKK6510X"
        strategy="afterInteractive"
      />
      <Script
        id="portfolio-analytics"
        src="/scripts/analytics.js"
        strategy="afterInteractive"
      />
    </>
  );
}
