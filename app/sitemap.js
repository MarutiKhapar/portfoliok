// Include canonical, indexable pages only. Update lastModified after meaningful page edits.
export default function sitemap() {
  return [
    { url: "https://maruti-khapare.vercel.app/", lastModified: "2026-11-03T08:32:17Z", changeFrequency: "monthly", priority: 1 },
    { url: "https://maruti-khapare.vercel.app/work/olraa", lastModified: "2026-11-03T08:29:22Z", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://maruti-khapare.vercel.app/work/hospitality", lastModified: "2026-11-03T08:20:49Z", changeFrequency: "monthly", priority: 0.8 },
  ];
}
