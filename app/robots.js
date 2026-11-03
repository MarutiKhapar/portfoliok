// Keep public pages and rendering assets crawlable; exclude API endpoints.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://maruti-khapare.vercel.app/sitemap.xml",
  };
}
