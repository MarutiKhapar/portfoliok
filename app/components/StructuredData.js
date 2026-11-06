import { homeFaqs, pageDetails, personId, siteUrl } from "../lib/seo";

export function JsonLd({ id, data }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function SiteSchema() {
  return (
    <JsonLd
      id="site-schema"
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": personId,
            name: "Maruti Khapare",
            url: `${siteUrl}/`,
            description: "SEO, paid media and growth marketing professional.",
            sameAs: [
              "https://www.linkedin.com/in/maruti-khapare/",
              "https://www.behance.net/NovaNest",
              "https://github.com/MarutiKhapar",
            ],
            knowsAbout: [
              "Search engine optimisation",
              "Growth marketing",
              "Content strategy",
              "Paid media",
              "Web analytics",
            ],
          },
          {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: `${siteUrl}/`,
            name: "Maruti Khapare",
            inLanguage: "en",
            publisher: { "@id": personId },
          },
        ],
      }}
    />
  );
}

export default function PageSchema({ pageKey }) {
  const page = pageDetails[pageKey];
  const url = siteUrl + page.path;
  const profile = pageKey === "home";
  const graph = [
    {
      "@type": profile ? "ProfilePage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": profile ? personId : `${url}#article` },
      dateModified: page.modified,
    },
  ];
  if (profile) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url: `${url}#faq`,
      isPartOf: { "@id": `${url}#webpage` },
      mainEntity: homeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  } else {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.headline,
      description: page.description,
      url,
      image: siteUrl + page.image,
      author: {
        "@type": "Person",
        "@id": personId,
        name: "Maruti Khapare",
        url: `${siteUrl}/`,
      },
      publisher: { "@id": personId },
      mainEntityOfPage: { "@id": `${url}#webpage` },
      dateModified: page.modified,
      inLanguage: "en",
      articleSection: "Case studies",
      keywords: page.keywords,
    });
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: page.headline,
          item: url,
        },
      ],
    });
  }
  return (
    <JsonLd
      id={`${pageKey}-schema`}
      data={{ "@context": "https://schema.org", "@graph": graph }}
    />
  );
}
