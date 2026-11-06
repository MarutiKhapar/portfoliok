"use client";
import { useState } from "react";
export default function Projects() {
  const [filter, setFilter] = useState("all");
  return (
    <section className="section section-soft" id="work">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">{"Selected work"}</div>
          <h2>
            {"Proof of work, "}
            <span className="gradient-text">{"not just promises."}</span>
          </h2>
          <p>
            {
              "Explore SEO, performance media and integrated growth projects. Performance metrics are self-reported and should be validated against platform data for formal case studies."
            }
          </p>
        </div>
        <div
          className="filters"
          role="group"
          aria-label="Filter portfolio projects"
        >
          <button
            data-filter="all"
            className={filter === "all" ? "filter active" : "filter"}
            aria-pressed={filter === "all"}
            onClick={() => setFilter("all")}
          >
            {"All Projects"}
          </button>
          <button
            data-filter="seo"
            className={filter === "seo" ? "filter active" : "filter"}
            aria-pressed={filter === "seo"}
            onClick={() => setFilter("seo")}
          >
            {"SEO & GEO"}
          </button>
          <button
            data-filter="ppc"
            className={filter === "ppc" ? "filter active" : "filter"}
            aria-pressed={filter === "ppc"}
            onClick={() => setFilter("ppc")}
          >
            {"PPC & Leads"}
          </button>
          <button
            data-filter="full"
            className={filter === "full" ? "filter active" : "filter"}
            aria-pressed={filter === "full"}
            onClick={() => setFilter("full")}
          >
            {"360° Growth & Brand"}
          </button>
        </div>
        <div className="project-grid" id="projects">
          <article className="project" data-cat="seo" hidden={filter !== "all" && filter !== "seo"}>
            <div className="project-top"><span className="eyetag">E-commerce · Organic Growth</span><span className="pr-icon" aria-hidden="true">⌕</span></div>
            <h3>Olraa &amp; The Desi Food</h3>
            <p>E-commerce SEO across catalogue structure, indexing and intent-led content. Olraa’s reported search presence includes 120,000 indexed pages; The Desi Food’s work focused on organic acquisition and sales.</p>
            <div className="project-bottom">
              <strong>₹4 lakh organic revenue</strong>
              <strong>~1.2M impressions · ~20k clicks</strong>
              <div className="project-links">
                <a href="https://olraa.com/us" target="_blank" rel="noopener noreferrer">Olraa website <span aria-hidden="true">↗</span></a>
                <a href="https://thedesifood.com" target="_blank" rel="noopener noreferrer">The Desi Food website <span aria-hidden="true">↗</span></a>
                <a href="/work/olraa">Olraa case study <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">Shipping &amp; Logistics · SEO</span>
              <span className="pr-icon" aria-hidden="true">
                ⌕
              </span>
            </div>
            <h3>
              Velocity Express, The Atlantic International &amp; Unique Express
            </h3>
            <p>
              SEO across shipping and logistics brands, covering technical
              foundations, keyword strategy, on-page optimisation and internal
              linking, with programmatic landing-page work for Unique Express.
            </p>
            <div className="project-bottom">
              <strong>Technical &amp; programmatic SEO</strong>
              <div className="project-links">
                <a
                  href="https://velexp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Velocity Express <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://atlanticcourier.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Atlantic International <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://uniqueexpress.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unique Express <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">Hotels and Hospitality</span>
              <span className="pr-icon" aria-hidden="true">
                ⌕
              </span>
            </div>
            <h3>
              <a href="/work/hospitality">
                  Hotel Eden Karwar, Ember Castle by Eden, and The Padival Grand Puttur
              </a>
            </h3>
            <p>
              Building online visibility for established offline brands: Hotel
              Éden in Karwar and Ember Castle in Gokarna, plus The Padival Grand
              in Puttur. Branding, local discovery, SEO, OTAs, social and
              creator collaborations.
            </p>
            <div className="project-bottom">
              <strong>Website &amp; OTA booking channels</strong>
              <div className="project-links">
                <a
                  href="https://hoteleden.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Éden &amp; Ember Castle <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://thepadivalgrand.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Padival Grand <span aria-hidden="true">↗</span>
                </a>
                <a href="/work/hospitality">
                  Read case study <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc full"
            hidden={filter !== "all" && filter !== "ppc" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">{"Real Estate · Marketing & Lead Generation"}</span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>
              {
                "Atmos Tropical, Kattu Construction, The Right Life, Ganga Enterprises, Amantran Developers & Property Trade"
              }
            </h3>
            <p>
              {
                "Real estate marketing and lead generation focused on enquiries and site visits, with broader campaign support for Amantran Developers and Property Trade."
              }
            </p>
            <div className="project-bottom">
              <strong>{"~400 leads & ~50–60 site visits per lead-generation client (reported)"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">{"Agency SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>TMITS &amp; Megamind Studios</h3>
            <p>
              {
                "SEO for two agencies, covering geographic content testing, search intent across funnel stages, service discoverability and site structure."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Agency search visibility"}</strong>
              <div className="project-links">
                <a
                  href="https://tmits.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"tmits.in "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
                <a
                  href="https://megamind.studios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"megamind.studios "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">Healthcare · SEO</span>
              <span className="pr-icon" aria-hidden="true">
                ⌕
              </span>
            </div>
            <h3>One Dental</h3>
            <p>
              End-to-end SEO for a dental healthcare website, tailored to
              treatment-related searches and local service demand.
            </p>
            <div className="project-bottom">
              <strong>Healthcare search strategy</strong>
              <div className="project-links">
                <a
                  href="https://onedentall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  One Dental <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc"
            hidden={filter !== "all" && filter !== "ppc"}
          >
            <div className="project-top">
              <span className="eyetag">{"D2C · Meta Ads"}</span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>{"Brikroo"}</h3>
            <p>
              {
                "Meta-only performance acquisition, with a reported fourfold return on ad spend."
              }
            </p>
            <div className="project-bottom">
              <strong>{"4× Meta ROAS"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc"
            hidden={filter !== "all" && filter !== "ppc"}
          >
            <div className="project-top">
              <span className="eyetag">{"Visa Consultancy"}</span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>{"Immigrotech"}</h3>
            <p>
              {
                "Lead generation and conversion-focused acquisition for immigration consultation services."
              }
            </p>
            <div className="project-bottom">
              <strong>{"~10–15 consultations / month"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc"
            hidden={filter !== "all" && filter !== "ppc"}
          >
            <div className="project-top">
              <span className="eyetag">
                {"Ireland · Recruitment Marketing"}
              </span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>{"Emeis & Manor and Best Health"}</h3>
            <p>
              {
                "Employer-oriented recruitment marketing to attract potential candidates through digital acquisition funnels."
              }
            </p>
            <div className="project-bottom">
              <strong>{"~30–40 hires / month (reported)"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc"
            hidden={filter !== "all" && filter !== "ppc"}
          >
            <div className="project-top">
              <span className="eyetag">{"Dubai · SEO + PPC"}</span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>{"Deluxe Printing & Exprintmart"}</h3>
            <p>
              {
                "Integrated organic search and paid campaigns for print-industry demand generation and revenue efficiency."
              }
            </p>
            <div className="project-bottom">
              <strong>{"4–6× reported revenue / ad spend"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">Industrial Manufacturing · 360° Growth</span>
              <span className="pr-icon" aria-hidden="true">✳</span>
            </div>
            <h3>Flexpert</h3>
            <p>Growth support for an industrial expansion joint manufacturer, covering positioning, channel strategy and digital execution.</p>
            <div className="project-bottom">
              <strong>Multi-channel growth support</strong>
              <div className="project-links">
                <a href="https://www.flexpertbellows.com/" target="_blank" rel="noopener noreferrer">
                  Flexpert website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">STEM Education · 360° Growth</span>
              <span className="pr-icon" aria-hidden="true">✳</span>
            </div>
            <h3>Robostem</h3>
            <p>Growth support for a STEM and robotics education provider, covering positioning, channel strategy and digital execution.</p>
            <div className="project-bottom">
              <strong>Multi-channel growth support</strong>
              <div className="project-links">
                <a href="https://robostem.co.in/" target="_blank" rel="noopener noreferrer">
                  Robostem website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">360° Digital Growth</span>
              <span className="pr-icon" aria-hidden="true">✳</span>
            </div>
            <h3>DND Glassy</h3>
            <p>Growth support across brand positioning, channel strategy and digital execution.</p>
            <div className="project-bottom">
              <strong>Multi-channel growth support</strong>
              <div className="project-links">
                <a href="https://www.glassyy.com/" target="_blank" rel="noopener noreferrer">
                  DND Glassy website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">Gold Retail &amp; Jewellery Sector (B2C)</span>
              <span className="pr-icon" aria-hidden="true">✳</span>
            </div>
            <h3>MG Jewellers &amp; Swayambhu Gold Pvt Ltd</h3>
            <p>Consumer marketing for gold and jewellery retail, covering discoverability, demand and campaign execution.</p>
            <div className="project-bottom">
              <strong>B2C jewellery marketing</strong>
              <div className="project-links">
                <a href="/work/b2c/goldandretail">Read case study <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </article>
          <article
            className="project"
            data-cat="ppc full"
            hidden={filter !== "all" && filter !== "ppc" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">Education · Marketing &amp; PR</span>
              <span className="pr-icon" aria-hidden="true">↗</span>
            </div>
            <h3>SPOCO, Sparda Degree College &amp; Akash Educational Institutions</h3>
            <p>Lead generation, marketing and public relations to build awareness and attract enquiries.</p>
            <div className="project-bottom">
              <div className="project-links">
                <a href="https://spoco.org/" target="_blank" rel="noopener noreferrer">
                  SPOCO &amp; Sparda Degree College website <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.akashinstitutions.in/" target="_blank" rel="noopener noreferrer">
                  Akash Educational Institutions website <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
