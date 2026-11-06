import { pageDetails, siteUrl } from "./lib/seo";

export default function sitemap() {
  return Object.values(pageDetails).map(({ path, modified }) => ({
    url: siteUrl + path,
    lastModified: modified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
