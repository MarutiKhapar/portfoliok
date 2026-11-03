export const siteUrl = "https://maruti-khapare.vercel.app";
export const personId = `${siteUrl}/#person`;

export const pageDetails = {
  home: {
    path: "/",
    title: "Maruti Khapare | SEO & Growth Marketing Portfolio",
    description:
      "Explore Maruti Khapare’s SEO and growth marketing portfolio: ecommerce SEO, hotel digital marketing, paid media and conversion-focused case studies.",
    keywords: [
      "SEO portfolio",
      "growth marketing",
      "SEO expert",
      "performance marketing",
    ],
    image: "/opengraph-image",
    modified: "2026-11-03T10:10:23Z",
  },
  olraa: {
    path: "/work/olraa",
    title: "Ecommerce SEO Case Study: OLRAA | Maruti Khapare",
    description:
      "An ecommerce SEO case study covering OLRAA’s catalogue architecture, international targeting, indexing, search intent and seasonal marketing strategy.",
    keywords: [
      "ecommerce SEO case study",
      "international SEO",
      "catalogue architecture",
      "content strategy",
    ],
    image: "/olraa-social.png",
    modified: "2026-11-03T10:10:23Z",
    headline: "From catalogue complexity to search discovery",
  },
  hospitality: {
    path: "/work/hospitality",
    title: "Hotel Digital Marketing Case Study | Maruti Khapare",
    description:
      "Hotel digital marketing for Eden, Ember Castle and The Padival Grand: building visibility through SEO, Google profiles, OTAs, content and social media.",
    keywords: [
      "hotel digital marketing",
      "hospitality marketing case study",
      "hotel SEO",
      "OTA distribution",
    ],
    image: "/work/hospitality/opengraph-image",
    modified: "2026-11-03T10:10:23Z",
    headline: "Known offline. Discoverable online.",
  },
};

export function pageMetadata(key) {
  const page = pageDetails[key];
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.path },
    authors: [{ name: "Maruti Khapare", url: siteUrl }],
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.path,
      siteName: "Maruti Khapare",
      locale: "en_IN",
      type: key === "home" ? "website" : "article",
      images: [{ url: page.image, width: 1200, height: 630, alt: page.title }],
      ...(key !== "home"
        ? { authors: [siteUrl], modifiedTime: page.modified }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export const homeFaqs = [
  {
    question: "What kind of marketing work do you do?",
    answer:
      "I work across technical SEO, keyword and content strategy, paid acquisition, analytics and conversion journeys. My portfolio includes ecommerce, hospitality, logistics, healthcare and other service businesses.",
  },
  {
    question: "How do you connect SEO with business goals?",
    answer:
      "I start with the audience, the business goal and the path from discovery to action. I connect search intent, website structure, useful content and measurement with outcomes such as enquiries, bookings or sales.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Yes. The OLRAA case study covers international ecommerce SEO and catalogue discovery. The Hotel Industry case study covers branding, local visibility, website content, OTA distribution and social activity across hospitality brands.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "My process is Discover, Build, Measure and Improve. I review the current presence and customer journey, prioritise opportunities, work on implementation and use available data to guide the next steps.",
  },
  {
    question: "How can we discuss a role or project?",
    answer:
      "Email makhapare@gmail.com or connect with me on LinkedIn. You can also use the Book a Call form on this website to request an introductory conversation.",
  },
];
