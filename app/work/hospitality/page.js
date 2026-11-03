import "../olraa/olraa.css";
import "./hospitality.css";

export const metadata = {
  title: "Hospitality Growth Case Study | Maruti Khapare",
  description:
    "Building digital visibility and booking channels for Hotel Éden and Ember Castle, and The Padival Grand through SEO, local discovery, OTAs, content and social media.",
  alternates: { canonical: "/work/hospitality" },
  openGraph: {
    title: "From offline reputation to online discovery",
    description:
      "A hospitality brand, search and distribution case study by Maruti Khapare.",
    url: "/work/hospitality",
    type: "article",
  },
};

const brands = [
  {
    name: "Hotel Eden by Milan Hospitality",
    logo: "/brands/hotel-eden-violet.svg",
    location: "Karwar + Gokarna",
    detail: "Hotel Éden, Karwar · Ember Castle by Éden, Gokarna",
    url: "https://hoteleden.in/",
    content:
      "A shared brand with separate destination journeys for Karwar and Gokarna. The live site connects property information with dining, events and destination content.",
  },
  {
    name: "The Padival Grand by Mahaveer Ventures",
    logo: "/brands/padival-grand-violet.svg",
    location: "Puttur",
    detail: "Hotel stays · dining · celebrations",
    url: "https://thepadivalgrand.com/",
    content:
      "A local hospitality brand with content addressing stays, travel planning and reasons to visit Puttur, alongside rooms, dining and event information.",
  },
];
const workstreams = [
  [
    "01",
    "Brand presence",
    "Bring the offline identity into the places guests research.",
    "Our team worked on brand presentation across the website, listings and social channels. The aim was a recognisable hotel presence beyond word of mouth.",
  ],
  [
    "02",
    "Local and Google hotel discovery",
    "Be findable when a traveller searches for a stay.",
    "The scope included Google Business Profile optimisation and Google hotel visibility, alongside location-focused SEO. These touchpoints supported discovery closer to a guest’s destination and booking decision.",
  ],
  [
    "03",
    "Website, keywords and content",
    "Answer the search before asking for the booking.",
    "I worked with the team across website keywords, SEO, blogs and content. Destination research and stay-related questions helped connect discovery with the hotels’ own websites.",
  ],
  [
    "04",
    "OTA distribution",
    "Make the properties available where guests already compare.",
    "The team expanded and managed hotel listings across travel platforms serving Indian and international audiences. OTA distribution complemented the website rather than being treated as a separate marketing activity.",
  ],
  [
    "05",
    "Social and creator collaborations",
    "Extend the brand through relevant travel conversations.",
    "Social media marketing and barter-based influencer collaborations formed part of the wider effort. Maruti reports more collaborations and better visibility; campaign-level reach and attributed bookings are unavailable.",
  ],
];
const examples = [
  {
    tag: "ÉDEN / DESTINATION + STAY INTENT",
    title: "Karwar hotel discovery",
    copy: "A published hotel-selection guide gives travellers a route from destination research to considering a stay.",
    url: "https://hoteleden.in/blogs/best-hotels-in-karwar",
    label: "Read the Karwar guide",
  },
  {
    tag: "ÉDEN / SECOND DESTINATION",
    title: "Gokarna discovery",
    copy: "A separate guide addresses Gokarna stays, supporting a distinct destination journey within the Éden brand.",
    url: "https://hoteleden.in/blogs/hotels-in-gokarna-karnataka-beach-resorts-guide",
    label: "Read the Gokarna guide",
  },
  {
    tag: "PADIVAL / TRIP PLANNING",
    title: "Reasons to visit Puttur",
    copy: "Local attraction content introduces the destination before the visitor chooses accommodation.",
    url: "https://thepadivalgrand.com/blogs/best-places-to-visit-in-puttur",
    label: "Explore the destination article",
  },
  {
    tag: "PADIVAL / JOURNEY TO STAY",
    title: "From travel planning to a room",
    copy: "A route guide connects practical journey questions with information about staying in Puttur.",
    url: "https://thepadivalgrand.com/blogs/mangalore-to-puttur-travel-guide",
    label: "Read the travel guide",
  },
];

function Intro({ n, label, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">
        <span>{n}</span>
        {label}
      </p>
      <h2>{title}</h2>
      <p className="section-lead">{children}</p>
    </div>
  );
}
function Out({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}
export default function Hospitality() {
  return (
    <div className="case-study hospitality-study" id="top">
      <a className="skip-link" href="#main-content">
        Skip to case study
      </a>
      <header className="case-header">
        <div className="case-wrap header-inner">
          <a className="signature" href="/">
            <span className="monogram">MK</span>
            <span>Maruti Khapare</span>
          </a>
          <nav aria-label="Portfolio navigation">
            <a href="/#work">All work</a>
            <a className="header-contact" href="mailto:makhapare@gmail.com">
              Let’s talk ↗
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
                CASE STUDY 02 <i /> HOSPITALITY GROWTH
              </span>
            </div>
            <div className="hero-layout">
              <div className="hero-story">
                <p className="eyebrow">
                  <span className="status-dot" />
                  BRAND · SEARCH · DISTRIBUTION
                </p>
                <h1>
                  Known offline.
                  <br />
                  <em>Discoverable online.</em>
                </h1>
                <p className="hero-description">
                  Building digital visibility and booking channels for
                  established hospitality brands: Éden in Karwar and Gokarna,
                  and The Padival Grand in Puttur.
                </p>
                <div className="role-line">
                  <span>MY CONTRIBUTION</span>
                  <p>
                    I worked as part of the team across branding, website
                    keywords and content, SEO, Google Business Profiles, OTA
                    listings, social media and creator collaborations.
                  </p>
                </div>
                <div className="hero-actions">
                  <a className="case-button" href="#approach">
                    Explore the approach ↓
                  </a>
                  <a className="text-link" href="#results">
                    See reported outcomes ↗
                  </a>
                </div>
              </div>
              <div className="hotel-system">
                <span className="micro">A CONNECTED BOOKING PRESENCE</span>
                <img
                  className="resort-illustration"
                  src="/illustrations/coastal-resort.svg"
                  width="300"
                  height="245"
                  alt="Coastal resort illustration with a tiered hotel, sun and palm tree"
                />
                <strong>
                  Find the stay.
                  <br />
                  Understand the experience.
                  <br />
                  Choose a booking route.
                </strong>
                <div className="hotel-touchpoints">
                  <span>Google &amp; Maps</span>
                  <span>Hotel website</span>
                  <span>Travel platforms</span>
                  <span>Social &amp; creators</span>
                </div>
                <p>One brand experience across multiple guest touchpoints.</p>
              </div>
            </div>
            <div className="hospitality-focus">
              <div>
                <strong>Brand visibility</strong>
                <span>Search, Maps and social discovery</span>
              </div>
              <div>
                <strong>Booking access</strong>
                <span>Website and travel platforms</span>
              </div>
              <div>
                <strong>Guest confidence</strong>
                <span>Content and creator collaborations</span>
              </div>
            </div>
          </div>
        </section>
        <div className="case-jump">
          <nav className="case-wrap" aria-label="Case study sections">
            <span>INSIDE THE CASE STUDY</span>
            <div>
              {[
                ["challenge", "Challenge"],
                ["approach", "Approach"],
                ["content", "Content"],
                ["results", "Results"],
                ["evidence", "Evidence"],
              ].map(([id, label], i) => (
                <a href={"#" + id} key={id}>
                  <small>0{i + 1}</small>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <section className="case-section case-wrap" id="challenge">
          <Intro
            n="01"
            label="THE BUSINESS CHALLENGE"
            title={
              <>
                The reputation existed.
                <br />
                The online presence needed to catch up.
              </>
            }
          >
            The brands already had a good offline reputation, according to
            Maruti. The brief was to build visibility across digital platforms
            and support more bookings.
          </Intro>
          <div className="hotel-brand-grid">
            {brands.map((brand) => (
              <article className="hotel-brand" key={brand.name}>
                <img
                  className="hotel-brand-logo"
                  src={brand.logo}
                  alt={brand.name + " logo"}
                  width="240"
                  height="100"
                />
                <span className="micro">{brand.location}</span>
                <h3>{brand.name}</h3>
                <p className="brand-detail">{brand.detail}</p>
                <p>{brand.content}</p>
                <Out href={brand.url}>Visit the website</Out>
              </article>
            ))}
          </div>
          <div className="challenge-summary">
            <span className="micro">THE GROWTH PRIORITY</span>
            <p>
              Help guests discover the properties, understand the experience and
              find a booking option wherever they prefer to research.
            </p>
            <div>
              <span>Visibility</span>
              <span>Brand confidence</span>
              <span>Booking access</span>
            </div>
          </div>
        </section>
        <section className="strategy-section" id="approach">
          <div className="case-wrap">
            <Intro
              n="02"
              label="THE CONNECTED APPROACH"
              title={
                <>
                  A booking journey.
                  <br />
                  <em>Across every touchpoint.</em>
                </>
              }
            >
              The engagement covered the wider digital presence. Search,
              content, local profiles, travel platforms and social activity
              supported the same commercial goal.
            </Intro>
            <div className="hospitality-workstreams">
              {workstreams.map(([n, title, intent, copy]) => (
                <article key={n}>
                  <span className="micro">
                    {n} / {title}
                  </span>
                  <h3>{intent}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <aside className="data-note">
              <strong>Shared delivery</strong>
              <p>
                This was team-delivered work. The case study describes Maruti’s
                stated areas of contribution without attributing every design,
                platform integration or operational change to one person.
                Detailed implementation logs are unavailable.
              </p>
            </aside>
          </div>
        </section>
        <section className="case-section case-wrap" id="content">
          <Intro
            n="03"
            label="SEARCH INTENT IN PRACTICE"
            title={
              <>
                Useful before the stay.
                <br />
                Relevant at the point of choice.
              </>
            }
          >
            The live websites provide inspectable examples of destination-led
            and stay-related content. They show how the brands address travel
            questions, but do not establish the conversion performance of
            individual articles.
          </Intro>
          <div className="hotel-content-grid">
            {examples.map((example, i) => (
              <article key={example.url}>
                <div
                  className={"hotel-content-art hotel-art-" + i}
                  aria-hidden="true"
                >
                  <span>TRAVEL → DISCOVER → STAY</span>
                  <img
                    className="destination-vector"
                    src={
                      [
                        "/illustrations/karwar.svg",
                        "/illustrations/gokarna.svg",
                        "/illustrations/puttur.svg",
                        "/illustrations/travel-route.svg",
                      ][i]
                    }
                    width="460"
                    height="200"
                    loading="lazy"
                    alt=""
                  />
                  <strong>
                    {["Karwar.", "Gokarna.", "Puttur.", "The journey."][i]}
                  </strong>
                  <span>
                    {
                      [
                        "Coastal stays",
                        "Destination discovery",
                        "Local exploration",
                        "Practical travel planning",
                      ][i]
                    }
                  </span>
                </div>
                <div>
                  <span className="micro">{example.tag}</span>
                  <h3>{example.title}</h3>
                  <p>{example.copy}</p>
                  <Out href={example.url}>{example.label}</Out>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="campaign-section">
          <div className="case-wrap hospitality-distribution">
            <div>
              <p className="eyebrow">DISCOVERY NEEDS DISTRIBUTION</p>
              <h2>
                Own the story.
                <br />
                <em>Meet guests where they book.</em>
              </h2>
              <p>
                The website gave the brands an owned presence. Google discovery,
                OTAs, social media and barter-based creator collaborations
                extended the routes through which guests could encounter them.
              </p>
              <div className="channel-list">
                {[
                  "Website & SEO",
                  "Google Business Profile",
                  "Google hotel visibility",
                  "OTA listings",
                  "Social media",
                  "Creator barters",
                ].map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="distribution-proof">
              <span className="micro">DOMESTIC + INTERNATIONAL DISCOVERY</span>
              <h3>A wider travel-platform presence</h3>
              <div className="ota-market">
                <h4>Indian travel market</h4>
                <p>
                  Distribution across major OTAs serving Indian travellers,
                  including MakeMyTrip and Goibibo.
                </p>
                <div className="ota-chips">
                  <span>MakeMyTrip</span>
                  <span>Goibibo</span>
                  <span>Yatra</span><span>Cleartrip</span><span>EaseMyTrip</span><span>ixigo</span><span>Booking.com</span><span>Agoda</span>
                </div>
              </div>
              <div className="ota-market">
                <h4>International travel market</h4>
                <p>
                  Expedia and other globally used booking platforms extended the
                  routes through which overseas guests could discover a stay.
                </p>
                <div className="ota-chips">
                  <span>Expedia</span>
                  <span>Booking.com</span>
                  <span>Agoda</span>
                </div>
              </div>
              <p className="ota-footnote">
                Platform names describe the distribution approach; availability
                can vary by property and date.
              </p>
            </div>
          </div>
        </section>
        <section className="results-section" id="results">
          <div className="case-wrap">
            <Intro
              n="04"
              label="THE REPORTED BUSINESS OUTCOMES"
              title={
                <>
                  More visible.
                  <br />
                  More routes to a booking.
                </>
              }
            >
              Maruti reports improved visibility, increased bookings and more
              barter-based influencer collaborations following the team’s work.
            </Intro>
            <div className="hotel-results-grid">
              {[
                [
                  "Stronger online discovery",
                  "The brands became easier to find across search, local profiles, social media and travel platforms.",
                ],
                [
                  "More booking opportunities",
                  "Maruti reports increased bookings through website and OTA channels following the team’s work.",
                ],
                [
                  "More creator collaborations",
                  "Barter-based influencer partnerships added opportunities to introduce the properties to relevant audiences.",
                ],
              ].map(([title, copy]) => (
                <article key={title}>
                  <span className="micro">REPORTED OUTCOME</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <aside className="data-note">
              <strong>Results in context</strong>
              <p>
                Outcomes are described qualitatively from Maruti’s account.
                Booking volumes and commercial figures are not disclosed. No
                percentage lift, revenue claim or individual-channel attribution
                is inferred.
              </p>
            </aside>
          </div>
        </section>
        <section className="case-section case-wrap" id="evidence">
          <Intro
            n="05"
            label="CURRENT SEARCH SNAPSHOT"
            title={
              <>
                Evidence of a search presence.
                <br />
                Separate from the booking story.
              </>
            }
          >
            Ubersuggest’s latest returned month was October 2026. These
            India-market estimates were retrieved on 3 November 2026 and
            describe domains, not audited hotel booking performance.
          </Intro>
          <div className="table-scroll">
            <table>
              <caption>
                Ubersuggest domain overview · India · English keyword view ·
                October 2026
              </caption>
              <thead>
                <tr>
                  <th scope="col">Domain</th>
                  <th scope="col">Estimated monthly organic visits</th>
                  <th scope="col">Organic keywords</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    hoteleden.in<small>Karwar + Gokarna brand domain</small>
                  </th>
                  <td>1,427</td>
                  <td>91</td>
                </tr>
                <tr>
                  <th scope="row">thepadivalgrand.com</th>
                  <td>92</td>
                  <td>46</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="results-reading">
            <div>
              <span className="micro">WHAT IS VISIBLE</span>
              <h3>Destination content appears in the keyword data.</h3>
              <p>
                The returned sample includes Gokarna beach-resort themes for
                Éden and Puttur sightseeing and travel-route themes for Padival.
                This is consistent with the destination-led content visible on
                the sites.
              </p>
            </div>
            <div>
              <span className="micro">WHAT IT DOES NOT PROVE</span>
              <h3>Estimated traffic is not a booking report.</h3>
              <p>
                Third-party coverage is incomplete and may include broad or
                ambiguous searches. The estimates do not verify organic booking
                attribution, Google Maps traffic, OTA volume, international
                demand or the effect of a specific intervention.
              </p>
            </div>
          </div>
          <div className="hotel-source-note">
            <strong>Sources and scope</strong>
            <p>
              Engagement scope and qualitative outcomes: Maruti’s account.
              Current evidence: linked brand websites, published articles,
              travel-platform listings and Ubersuggest domain overviews. The
              public websites have evolved; they are not archived
              before-and-after snapshots. Google Business Profile edits,
              influencer deliverables and booking-platform reports were not
              independently audited.
            </p>
            <Out href="https://hoteleden.in/">Éden website</Out>
            <Out href="https://thepadivalgrand.com/">Padival website</Out>
          </div>
        </section>
        <section className="case-cta">
          <div className="case-wrap">
            <span className="eyebrow">SEARCH · BRAND · BOOKING JOURNEYS</span>
            <h2>
              Build the presence.
              <br />
              Connect it to the business goal.
            </h2>
            <div>
              <a className="case-button" href="mailto:makhapare@gmail.com">
                Start a conversation ↗
              </a>
              <a className="text-link" href="/#work">
                Explore more work ↗
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
          <p>Maruti Khapare · Search, strategy &amp; growth</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
