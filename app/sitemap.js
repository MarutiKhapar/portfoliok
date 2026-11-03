// Include canonical, indexable pages only. Update lastModified after meaningful page edits.
export default function sitemap() {
  return [
    {
      url: "https://maruti-khapare.vercel.app/",
      lastModified: "2026-11-03T10:10:23Z",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://maruti-khapare.vercel.app/work/olraa",
      lastModified: "2026-11-03T10:10:23Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://maruti-khapare.vercel.app/work/hospitality",
      lastModified: "2026-11-03T10:10:23Z",
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
