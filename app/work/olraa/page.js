import PageSchema from "../../components/StructuredData";
import { pageMetadata } from "../../lib/seo";
import "./olraa.css";

const site = "https://olraa.com";
export const metadata = pageMetadata("olraa");
export const viewport = { themeColor: "#fdfcff" };

const sections = [
  ["overview", "Overview"],
  ["strategy", "Strategy"],
  ["content", "Content"],
  ["execution", "Execution"],
  ["results", "Results"],
];
const verticals = [
  "Food",
  "Ayurveda",
  "Homeopathy",
  "Unani",
  "Supplements",
  "Pet Zone",
];
const evidence = [
  {
    stage: "01 / DISCOVER",
    title: "The Rising Global Demand for Indian Products",
    type: "Awareness · educational article",
    url: "/blogs/indian-grocery-online-rising-demand-for-indian-products",
    text: "Broad discovery themes connect overseas shoppers with Indian groceries, spices and wellness categories.",
    verified: "Full article reviewed",
  },
  {
    stage: "02 / CONSIDER",
    title: "10 Must Buy Makar Sankranti Sweets on OLRAA",
    type: "Consideration · festival buying list",
    url: "/blogs/must-buy-makar-sankranti-sweets-on-olraa",
    text: "A festival-specific shortlist translates a seasonal occasion into products a shopper can consider.",
    verified: "Title and description reviewed in blog listing",
  },
  {
    stage: "03 / SHOP",
    title: "Ultimate Guide to Black Friday",
    type: "Consideration → purchase · sale guide",
    url: "/blogs/ultimate-black-friday-sale-deals",
    text: "A published guide combines category offers, country sections, shopping prompts and purchase-related FAQs.",
    verified: "Full article reviewed",
  },
];

function SectionIntro({ number, label, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">
        <span>{number}</span>
        {label}
      </p>
      <h2>{title}</h2>
      {children ? <p className="section-lead">{children}</p> : null}
    </div>
  );
}
function Icon({ name }) {
  const paths = {
    Food: (
      <>
        <path d="M4 13h16a8 8 0 0 1-16 0Z" />
        <path d="M8 9c-2-2 2-3 0-5M12 9c-2-2 2-3 0-5M16 9c-2-2 2-3 0-5" />
      </>
    ),
    Ayurveda: (
      <>
        <path d="M3 14h15a7.5 6 0 0 1-15 0ZM5 14 3 5q2-3 5-1l1 2-2 1 2 7M13 13C10 8 12 4 15 2c3 4 2 8-2 11ZM14 13c0-5 4-8 8-8 0 5-3 9-8 8Z" />
      </>
    ),
    Homeopathy: (
      <>
        <path d="M9 3h6v4H9zM8 7h8l2 4v9H6v-9z" />
        <circle cx="10" cy="14" r="1" />
        <circle cx="14" cy="17" r="1" />
      </>
    ),
    Unani: (
      <>
        <path d="M4 16h16a8 5 0 0 1-16 0ZM14 16l5-10M7 12c-3-4 0-7 4-8 1 4 0 7-4 8Z" />
      </>
    ),
    Supplements: (
      <>
        <path d="m8 5 11 11a4 4 0 0 1-6 6L2 11a4 4 0 0 1 6-6ZM7 16l6-6" />
      </>
    ),
    "Pet Zone": (
      <>
        <ellipse cx="12" cy="16" rx="5" ry="4" />
        <ellipse cx="5" cy="10" rx="2" ry="3" />
        <ellipse cx="10" cy="6" rx="2" ry="3" />
        <ellipse cx="16" cy="6" rx="2" ry="3" />
        <ellipse cx="20" cy="11" rx="2" ry="3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18M5 6h14M5 18h14" />
      </>
    ),
    catalogue: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    pages: (
      <>
        <path d="M8 3h9l4 4v13H8zM17 3v5h4M4 7v14M11 12h7M11 16h7" />
      </>
    ),
    markets: (
      <>
        <path d="M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
  };
  return (
    <svg
      className="case-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Olraa() {
  return (
    <div className="case-study" id="top">
      <PageSchema pageKey="olraa" />
      <a className="skip-link" href="#main-content">
        Skip to case study
      </a>
      <header className="case-header">
        <div className="case-wrap header-inner">
          <a
            className="signature"
            href="/"
            aria-label="Maruti Khapare portfolio home"
          >
            <span className="monogram">MK</span>
            <span>
              Maruti Khapare<small>SEARCH. STRATEGY. GROWTH.</small>
            </span>
          </a>
          <nav aria-label="Portfolio navigation">
            <a href="/#work">All work</a>
            <a className="header-contact" href="mailto:makhapare@gmail.com">
              Let’s talk <Arrow />
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content">
        <section className="case-hero">
          <div className="case-wrap">
            <div className="hero-meta">
              <a href="/#work">← Selected work</a>
              <span>
                CASE STUDY 01 <i /> INTERNATIONAL ECOMMERCE
              </span>
            </div>
            <div className="hero-layout">
              <div className="hero-story">
                <p className="eyebrow">
                  <span className="status-dot" />
                  OLRAA / SEO & INTEGRATED GROWTH
                </p>
                <h1>
                  From catalogue
                  <br />
                  complexity to
                  <br />
                  <em>search discovery.</em>
                </h1>
                <p className="hero-description">
                  Connecting technical SEO, catalogue structure and buying
                  intent to help a global Indian-products marketplace earn
                  search visibility.
                </p>
                <div className="hero-actions">
                  <a className="case-button" href="#strategy">
                    Explore the strategy <span aria-hidden="true">↓</span>
                  </a>
                  <a
                    className="text-link"
                    href={`${site}/us`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Olraa <Arrow />
                  </a>
                </div>
                <div className="role-line">
                  <span>MY ROLE</span>
                  <p>
                    I defined country and keyword priorities, worked on indexing
                    and on-page fixes, and connected content with seasonal
                    campaigns.
                  </p>
                </div>
              </div>
              <figure className="catalogue-figure">
                <div className="figure-top">
                  <span>
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>THE CATALOGUE, CONNECTED</span>
                  <span>↗</span>
                </div>
                <div className="catalogue-body">
                  <div className="olraa-wordmark">
                    OLRAA<span>®</span>
                  </div>
                  <p className="catalogue-tagline">
                    Indian products.
                    <br />A world of possibilities.
                  </p>
                  <div className="catalogue-numbers">
                    <div>
                      <strong>~20k</strong>
                      <span>products</span>
                    </div>
                    <div>
                      <strong>794</strong>
                      <span>categories</span>
                    </div>
                    <div>
                      <strong>~98</strong>
                      <span>country markets</span>
                    </div>
                  </div>
                  <div className="catalogue-grid">
                    {verticals.map((v, i) => (
                      <div key={v}>
                        <span className="category-mark" aria-hidden="true">
                          <Icon name={v} />
                        </span>
                        <span>{v}</span>
                        <span aria-hidden="true">↗</span>
                      </div>
                    ))}
                  </div>
                  <div className="catalogue-route">
                    <span>Catalogue</span>
                    <b>→</b>
                    <span>Country pages</span>
                    <b>→</b>
                    <span>Discovery</span>
                  </div>
                </div>
                <figcaption>
                  Catalogue structure schematic · scope reported by Maruti
                </figcaption>
              </figure>
            </div>
            <div className="hero-stat-row">
              {[
                ["~1.2M", "Search impressions"],
                ["~20k", "Organic search clicks"],
                ["120k", "Pages indexed"],
                ["~8", "Average search position"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
              <p>
                Reported outcomes.
                <br />
                Approximate, recalled figures.
              </p>
            </div>
          </div>
        </section>
        <div className="case-jump">
          <nav className="case-wrap" aria-label="Case study sections">
            <span>INSIDE THE CASE STUDY</span>
            <div>
              {sections.map(([id, title], i) => (
                <a href={`#${id}`} key={id}>
                  <small>0{i + 1}</small>
                  {title}
                </a>
              ))}
            </div>
            <a href="#sources" className="evidence-jump">
              Source notes ↗
            </a>
          </nav>
        </div>

        <section
          className="case-section case-wrap overview-section"
          id="overview"
        >
          <SectionIntro
            number="01"
            label="THE BUSINESS & THE CHALLENGE"
            title={
              <>
                A global store needs
                <br />a discoverable foundation.
              </>
            }
          >
            Olraa brings Indian food, groceries, wellness and pet products to
            shoppers abroad. The SEO challenge was to turn catalogue scale into
            useful, crawlable journeys.
          </SectionIntro>
          <div className="overview-columns">
            <div>
              <p className="body-copy">
                With different products available in different countries, scale
                meant more than uploading listings. Categories needed a clear
                hierarchy, content needed a purpose, and search engines needed
                reliable paths through the site.
              </p>
              <p className="body-copy">
                I worked across catalogue research, category structure, indexing
                and on-page optimisation to connect the products Olraa sold with
                the searches its customers were making. The focus was to make
                relevant pages discoverable and give visitors a clearer path
                from research to shopping.
              </p>
              <a
                className="underlined-link"
                href={`${site}/about-us`}
                target="_blank"
                rel="noopener noreferrer"
              >
                About the business <Arrow />
              </a>
            </div>
            <dl className="project-facts">
              <div>
                <dt>
                  <Icon name="globe" />
                  BUSINESS MODEL
                </dt>
                <dd>International ecommerce</dd>
              </div>
              <div>
                <dt>
                  <Icon name="catalogue" />
                  CATALOGUE
                </dt>
                <dd>Six main product verticals</dd>
              </div>
              <div>
                <dt>
                  <Icon name="pages" />
                  REPORTED WEBSITE SCALE
                </dt>
                <dd>~900,000 country-specific URLs</dd>
              </div>
              <div>
                <dt>
                  <Icon name="markets" />
                  INITIAL MARKET PRIORITY
                </dt>
                <dd>
                  US → Denmark, Ireland,
                  <br />
                  Netherlands & Spain
                </dd>
              </div>
            </dl>
          </div>
          <div className="challenge-summary">
            <p className="micro">THE GROWTH CHALLENGE</p>
            <p>
              Turn a complex international catalogue into relevant search entry
              points and clearer shopping journeys.
            </p>
            <div>
              <span>Discoverable pages</span>
              <span>Intent-led content</span>
              <span>Relevant offers</span>
            </div>
          </div>
        </section>

        <section className="strategy-section" id="strategy">
          <div className="case-wrap">
            <SectionIntro
              number="02"
              label="THE STRATEGY"
              title={
                <>
                  Structure first.
                  <br />
                  <em>Discovery follows.</em>
                </>
              }
            >
              Catalogue organisation and search visibility developed together.
              Indexing began while the product-data foundation was still taking
              shape.
            </SectionIntro>
            <div className="strategy-grid">
              <div className="strategy-narrative">
                {[
                  [
                    "01",
                    "Organise the catalogue",
                    "Identify research and product-source websites, define category relationships, and review listing quality so the catalogue supports relevant search journeys.",
                  ],
                  [
                    "02",
                    "Create paths for discovery",
                    "Work across XML sitemaps, internal linking, crawl-issue fixes and SEO tags to help search engines discover and understand relevant pages.",
                  ],
                  [
                    "03",
                    "Prioritise international demand",
                    "Research keywords across approximately 25–40 websites and sequence commercial focus by country. Hreflang supported country targeting; IP location supported the shopping experience.",
                  ],
                  [
                    "04",
                    "Connect content with intent",
                    "Build awareness, comparison, seasonal buying and reassurance content around what customers needed at each stage.",
                  ],
                ].map(([n, title, copy]) => (
                  <article className="strategy-step" key={n}>
                    <span>{n}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </article>
                ))}
              </div>
              <figure className="architecture-figure">
                <div className="figure-label">SEARCH ARCHITECTURE</div>
                <div className="architecture-root">
                  OLRAA<span>Shared catalogue & brand</span>
                </div>
                <div className="diagram-stem" />
                <div className="market-nodes">
                  <div>
                    US<small>First priority</small>
                  </div>
                  <div>
                    EU markets<small>Next focus</small>
                  </div>
                  <div>
                    Other markets<small>Country catalogue</small>
                  </div>
                </div>
                <div className="diagram-stem" />
                <div className="architecture-layer">
                  <span>Categories</span>
                  <span>Products</span>
                  <span>Editorial</span>
                </div>
                <div className="architecture-tools">
                  <span>XML sitemaps</span>
                  <span>Internal links</span>
                  <span>SEO tags</span>
                  <span>Hreflang</span>
                </div>
                <div className="architecture-outcome">
                  <span className="status-dot" />
                  Clearer discovery paths
                </div>
                <figcaption>
                  Conceptual structure of the strategy. Country catalogues
                  varied; this is not a complete technical sitemap.
                </figcaption>
              </figure>
            </div>
            <div className="technical-depth">
              <div className="subsection-head">
                <h3>What governs discovery at international scale.</h3>
                <span>CRAWLING → INDEXING → REGIONAL RELEVANCE</span>
              </div>
              <p className="body-copy">
                Sitemaps and links help discovery; they do not guarantee
                indexing. The framework below explains the wider technical
                checks relevant to a catalogue of this size. It is not a claim
                that every check was implemented during this engagement.
              </p>
              <div className="technical-grid">
                {[
                  [
                    "Crawl efficiency",
                    "Control filter, sort and parameter URL expansion; keep useful pages reachable through crawlable links and avoid redirect chains.",
                  ],
                  [
                    "Index eligibility",
                    "Check HTTP status, robots access, noindex directives and rendered content. A robots.txt block prevents crawling; it is not an indexing-removal instruction.",
                  ],
                  [
                    "Canonical consistency",
                    "Align canonical hints, redirects, internal links and sitemap URLs so duplicate product and regional variants send consistent signals.",
                  ],
                  [
                    "International targeting",
                    "Use stable regional URLs and reciprocal hreflang annotations, including self-references and x-default where appropriate. Keep country pages accessible without forced location redirects.",
                  ],
                  [
                    "Sitemaps and inventory",
                    "Segment sitemaps by market or page type, include preferred indexable URLs and accurate lastmod values, and handle removed products with appropriate status codes.",
                  ],
                  [
                    "Rendering and diagnostics",
                    "Check that key content and links are available to crawlers. Use server responses, crawl logs and Search Console indexing reports to investigate discovery and exclusion patterns.",
                  ],
                ].map(([title, copy]) => (
                  <article key={title}>
                    <h4>{title}</h4>
                    <p>{copy}</p>
                  </article>
                ))}
              </div>
              <p className="small-note">
                Technical reference:{" "}
                <a
                  href="https://developers.google.com/crawling/docs/crawl-budget"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google crawl-budget guidance ↗
                </a>{" "}
                ·{" "}
                <a
                  href="https://developers.google.com/search/docs/specialty/international/localized-versions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Regional and language annotations ↗
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="case-section case-wrap" id="content">
          <SectionIntro
            number="03"
            label="THE CONTENT SYSTEM"
            title={
              <>
                A purpose for every topic.
                <br />A next step for every reader.
              </>
            }
          >
            Keyword research informed the topic. Search intent informed the
            format. The funnel connected broad discovery with more specific
            buying decisions.
          </SectionIntro>
          <div className="content-journey">
            <div className="journey-head">
              <span className="micro">CONTENT MATCHED TO CUSTOMER INTENT</span>
              <h3>The right answer at each step.</h3>
              <p>
                Formats are selected for the question a shopper needs
                answered—not simply to fill a publishing calendar.
              </p>
            </div>
            {[
              {
                stage: "Awareness",
                code: "TOF",
                question: "Can I find Indian products abroad?",
                formats: [
                  "Educational articles",
                  "Visual explainers",
                  "Social discovery posts",
                ],
                example: "Indian-product demand and grocery discovery themes.",
                next: "Explore a relevant topic or category.",
              },
              {
                stage: "Consideration",
                code: "MOF",
                question: "Which products fit this occasion?",
                formats: [
                  "Buying guides",
                  "Product comparisons",
                  "Festival shortlists",
                ],
                example:
                  "Makar Sankranti sweets and seasonal product selections.",
                next: "Compare options and visit product pages.",
              },
              {
                stage: "Decision",
                code: "BOF",
                question: "What do I need to feel ready to order?",
                formats: [
                  "Product details",
                  "Shipping FAQs",
                  "Offer-led landing pages",
                ],
                example:
                  "The Black Friday guide connects offers, country information and shopping questions.",
                next: "Resolve uncertainty and continue towards checkout.",
              },
            ].map((item, i) => (
              <div className={"journey-row journey-" + i} key={item.stage}>
                <div className="journey-stage">
                  <span>{item.code}</span>
                  <h4>{item.stage}</h4>
                  <p>{item.question}</p>
                </div>
                <div className="journey-content">
                  <span className="micro">CONTENT FORMATS</span>
                  <ul>
                    {item.formats.map((format) => (
                      <li key={format}>{format}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>OLRAA context</strong> {item.example}
                  </p>
                  <p className="journey-next">
                    <span aria-hidden="true">↳</span> {item.next}
                  </p>
                </div>
              </div>
            ))}
            <div className="journey-after">
              <strong>Beyond the first purchase</strong>
              <p>
                Delivery updates, helpful usage content and review requests can
                support repeat engagement. This is an extension of the
                framework, not a measured outcome or a claim of implementation
                at OLRAA.
              </p>
            </div>
            <p className="small-note">
              Original case-study diagram informed by the supplied funnel
              reference and{" "}
              <a
                href="https://purpleplanet.com/blog/content-marketing-funnels-7-stages-to-guide-your-audience-to-conversion/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purpleplanet’s content-marketing framework ↗
              </a>
              .{" "}
            </p>
          </div>
          <div className="subsection-head">
            <h3>The strategy, in published work.</h3>
            <span>SELECTED EDITORIAL EXAMPLES</span>
          </div>
          <div className="article-grid">
            {evidence.map((a, i) => (
              <article className="article-example" key={a.url}>
                <div className={`editorial-art art-${i}`} aria-hidden="true">
                  <span>OLRAA JOURNAL</span>
                  <strong>
                    {
                      [
                        "India,\nwherever\nyou are.",
                        "A festival.\nA flavour.\nA shortlist.",
                        "The season\nto shop\nsmarter.",
                      ][i]
                    }
                  </strong>
                  <span className="art-symbol">{["↗", "✳", "10%"][i]}</span>
                  <small>EDITORIAL THEME / SCHEMATIC</small>
                </div>
                <div className="article-example-body">
                  <span className="micro">{a.stage}</span>
                  <h4>
                    <a
                      href={`${site}${a.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {a.title} <Arrow />
                    </a>
                  </h4>
                  <p className="article-type">{a.type}</p>
                  <p>{a.text}</p>
                  <small>{a.verified}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="campaign-section">
          <div className="case-wrap campaign-layout">
            <div>
              <p className="eyebrow">FROM SEARCH INTENT TO CAMPAIGN</p>
              <h2>
                Seasonal demand.
                <br />
                <em>A relevant route to shop.</em>
              </h2>
              <p>
                I connected seasonal search themes with buying guides, relevant
                product categories and a clear promotional offer. Website
                content, search, email and social distribution supported the
                same shopping occasion, giving customers a route from interest
                to products.
              </p>
              <div className="channel-list">
                {[
                  "Website & SEO",
                  "Instagram",
                  "Facebook",
                  "WhatsApp",
                  "Email",
                  "LinkedIn",
                  "Off-page & backlinks",
                ].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <figure className="campaign-gallery">
              <span className="micro">SEASONAL CREATIVE / OLRAA INSTAGRAM</span>
              <div className="campaign-image-grid">
                <a
                  href="https://www.instagram.com/olraaofficial/p/DSpbweFkzmk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/olraa-christmas.jpg"
                    width="512"
                    height="640"
                    loading="lazy"
                    alt="OLRAA Christmas creative with a red gift box and a shop-now prompt"
                  />
                  <span>
                    Christmas <Arrow />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/olraaofficial/p/DT9eBbhEhTa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/olraa-republic-day.jpg"
                    width="512"
                    height="640"
                    loading="lazy"
                    alt="OLRAA Republic Day creative showing a map of India made from spices"
                  />
                  <span>
                    Republic Day <Arrow />
                  </span>
                </a>
              </div>
              <figcaption>
                Published OLRAA brand creatives illustrate occasion-led
                messaging. Their presence here does not establish individual
                authorship or campaign performance.
              </figcaption>
              <p className="campaign-offer-note">
                Offer context: a historical promotion used 10% off qualifying
                carts of US$35 or more; the offer supported the campaign
                message.
              </p>
            </figure>
          </div>
        </section>

        <section className="case-section case-wrap" id="execution">
          <SectionIntro
            number="04"
            label="THE DEPTH OF EXECUTION"
            title={
              <>
                From technical discovery.
                <br />
                To useful shopping journeys.
              </>
            }
          >
            The work went beyond choosing keywords: catalogue structure, country
            targeting, page quality and content intent had to support the same
            growth goals.
          </SectionIntro>
          <div className="strategy-narrative">
            {[
              [
                "01",
                "Make the catalogue understandable",
                "I researched product sources and category relationships, then worked on listing quality, uploads and removals. The goal was a catalogue customers could navigate and search engines could interpret.",
              ],
              [
                "02",
                "Work on the routes into search",
                "My scope included indexing, XML sitemaps, internal links, crawl issues and on-page SEO tags. These were the foundations for discovery across a large set of country-specific URLs.",
              ],
              [
                "03",
                "Translate research into buying journeys",
                "Research across approximately 25–40 websites informed keyword and market priorities. Educational articles, comparisons and seasonal guides served different questions along the route to a purchase.",
              ],
              [
                "04",
                "Connect organic discovery with marketing",
                "I linked content themes with seasonal campaigns and product offers across website, search and distribution channels. The aim was to make each touchpoint relevant to the same customer need.",
              ],
            ].map(([n, title, copy]) => (
              <article className="strategy-step" key={n}>
                <span>{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="operations-grid">
            <div>
              <span className="micro">CONTENT QUALITY</span>
              <h3>AI-assisted. Personally reviewed.</h3>
              <p>
                I defined product-description rules and created ChatGPT prompts
                and rule-based drafting agents to support consistent listings. I
                personally reviewed descriptions, including medicine and
                wellness content, before publication; training supported those
                quality standards.
              </p>
              <p>
                An internally built CSV-feed tool supported Google Merchant
                Center uploads. Tool development was handled outside my stated
                scope.
              </p>
            </div>
            <div className="toolbox">
              <span className="micro">THE WORKING TOOLKIT</span>
              <dl>
                <div>
                  <dt>SEO research & checks</dt>
                  <dd>Ubersuggest · Ahrefs · Semrush · Screaming Frog</dd>
                </div>
                <div>
                  <dt>Writing & editing</dt>
                  <dd>WordAI · InstaText · Grammarly</dd>
                </div>
                <div>
                  <dt>Product descriptions</dt>
                  <dd>ChatGPT prompts & agents · Human review</dd>
                </div>
                <div>
                  <dt>Catalogue distribution</dt>
                  <dd>Internal CSV feed → Google Merchant Center</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="results-section" id="results">
          <div className="case-wrap">
            <SectionIntro
              number="05"
              label="THE REPORTED OUTCOMES"
              title={
                <>
                  Search visibility.
                  <br />
                  At catalogue scale.
                </>
              }
            >
              From a reported organic starting point of zero, the engagement
              built search visibility and generated clicks into the catalogue.
              These are acquisition signals; the available evidence does not
              quantify SEO-attributed sales.
            </SectionIntro>
            <div className="outcome-strip">
              <div>
                <span>SEARCH VISIBILITY</span>
                <strong>~1.2 million</strong>
                <small>impressions</small>
              </div>
              <div>
                <span>ORGANIC SEARCH CLICKS</span>
                <strong>~20,000</strong>
                <small>search clicks</small>
              </div>
              <div>
                <span>SEARCH POSITION</span>
                <strong>~8</strong>
                <small>reported average position</small>
              </div>
            </div>
            <div className="results-reading">
              <div>
                <span className="micro">WHAT THE RESULTS SUPPORT</span>
                <h3>A stronger foundation for growth.</h3>
                <p>
                  The work connected catalogue structure, technical discovery
                  and intent-led content. The reported impressions and clicks
                  indicate an organic search presence; they do not establish how
                  much revenue the SEO work generated.
                </p>
              </div>
              <div>
                <span className="micro">WHAT I TOOK FROM PAID MEDIA</span>
                <h3>Visibility needs attribution.</h3>
                <p>
                  Around ₹40,000 went into the Black Friday campaign across Meta
                  and Google Search, with no tracked ad conversions. Ads may
                  have supported awareness, but later purchases cannot be
                  attributed to that exposure from the available evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="case-section case-wrap sources-section"
          id="sources"
        >
          <div>
            <span className="micro">SOURCE NOTES</span>
            <h2>Evidence behind the story.</h2>
            <p>
              The strategy, responsibilities and historical results come from
              Maruti’s account. Published content provides examples of the
              approach; it does not establish individual article performance.
            </p>
          </div>
          <div className="source-list">
            <a href={`${site}/us`} target="_blank" rel="noopener noreferrer">
              <span>01</span>Olraa storefront
              <Arrow />
            </a>
            <a
              href={`${site}/us/blogs`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>02</span>Published blog listing
              <Arrow />
            </a>
            <a
              href={`${site}/blogs/indian-grocery-online-rising-demand-for-indian-products`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>03</span>Awareness article · full text reviewed
              <Arrow />
            </a>
            <a
              href={`${site}/blogs/ultimate-black-friday-sale-deals`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>04</span>Black Friday guide
              <Arrow />
            </a>
            <p>
              The Makar Sankranti example was assessed from its listing title
              and description. The XML sitemap was not retrievable during this
              review; historical index counts remain self-reported.
            </p>
          </div>
        </section>
        <section className="case-cta">
          <div className="case-wrap">
            <span className="eyebrow">LET’S BUILD YOUR NEXT CHAPTER</span>
            <h2>
              Good growth starts
              <br />
              with a clear strategy.
            </h2>
            <div>
              <a className="case-button" href="mailto:makhapare@gmail.com">
                Start a conversation <Arrow />
              </a>
              <a className="text-link" href="/#work">
                Explore more work <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="case-footer">
        <div className="case-wrap">
          <a className="monogram" href="/" aria-label="Portfolio home">
            MK
          </a>
          <p>Maruti Khapare · Search, strategy & growth</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
