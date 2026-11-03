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
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">{"International · E-commerce SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>
              <a href="/work/olraa">{"Olraa"}</a>
            </h3>
            <p>
              {
                "International ecommerce SEO, catalogue architecture and intent-led content. Explore the work behind a reported 120,000 indexed pages and a growing organic search presence."
              }
            </p>
            <div className="project-bottom">
              <strong>{"~1.8M impressions · ~20k search clicks"}</strong>
              <div className="project-links">
                <a href="/work/olraa">
                  {"Read case study "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
                <a
                  href="https://olraa.com/us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Visit Olraa "}
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
              <span className="eyetag">{"Revenue · E-commerce SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"The Desi Food"}</h3>
            <p>
              {
                "Organic acquisition and e-commerce SEO for a food retail website, with reported organic-attributed sales."
              }
            </p>
            <div className="project-bottom">
              <strong>{"₹4 lakh organic revenue"}</strong>
              <div className="project-links">
                <a
                  href="https://thedesifood.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"thedesifood.com "}
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
              <span className="eyetag">{"GEO & Funnel Content"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"TMITS"}</h3>
            <p>
              {
                "Geography-based content testing and structured TOFU, MOFU and BOFU segmentation to map search intent to funnel stage."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Geo + intent segmentation"}</strong>
              <div className="project-links">
                <a
                  href="https://tmits.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"tmits.in "}
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
              <span className="eyetag">{"Programmatic SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"Unique Express"}</h3>
            <p>
              {
                "Programmatic search landing-page initiative focused on repeatable page structures and scalable organic discovery."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Programmatic SEO"}</strong>
              <div className="project-links">
                <a
                  href="https://uniqueexpress.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"uniqueexpress.net "}
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
              <span className="eyetag">{"End-to-end SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"Velocity Express & Atlantic Express"}</h3>
            <p>
              {
                "Full-service SEO across technical foundations, keyword strategy, on-page optimisation, internal links and measurement."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Full-service search ownership"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="seo"
            hidden={filter !== "all" && filter !== "seo"}
          >
            <div className="project-top">
              <span className="eyetag">{"Healthcare & Hospitality SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"One Dental, Hotel Eden & The Padival Grand"}</h3>
            <p>
              {
                "End-to-end SEO across dental healthcare and hotel/hospitality websites, tailored to service demand and local search intent."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Multi-industry search execution"}</strong>
              <div className="project-links">
                <a
                  href="https://onedentall.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"One Dental "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
                <a
                  href="https://hoteleden.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Hotel Eden "}
                  <span aria-hidden="true">{"↗"}</span>
                </a>
                <a
                  href="https://thepadivalgrand.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Padival Grand "}
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
              <span className="eyetag">{"Agency SEO"}</span>
              <span className="pr-icon">{"⌕"}</span>
            </div>
            <h3>{"Megamind Studios"}</h3>
            <p>
              {
                "Search strategy for a full-service agency site: service discoverability, site structure and acquisition-oriented content."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Agency search presence"}</strong>
              <div className="project-links">
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
              <span className="eyetag">{"Real Estate · Lead Generation"}</span>
              <span className="pr-icon">{"↗"}</span>
            </div>
            <h3>
              {
                "Atmos Tropical, Kattu Construction, The Right Life & Ganga Enterprises"
              }
            </h3>
            <p>
              {
                "Paid lead-generation programmes oriented around both enquiry volume and physical site visits."
              }
            </p>
            <div className="project-bottom">
              <strong>{"~400 leads & ~50–60 site visits per client"}</strong>
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
              <span className="eyetag">{"D2C · Brand & Social"}</span>
              <span className="pr-icon">{"✳"}</span>
            </div>
            <h3>{"21iice"}</h3>
            <p>
              {
                "Social media creative and visual design for a Japanese-style ice cream brand."
              }
            </p>
            <div className="project-bottom">
              <strong>{"End-to-end social media design"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">{"Full-funnel Growth"}</span>
              <span className="pr-icon">{"✳"}</span>
            </div>
            <h3>{"Flexpert, Robostem & DND Glassy"}</h3>
            <p>
              {
                "360-degree growth engagements combining positioning, channel strategy and digital execution."
              }
            </p>
            <div className="project-bottom">
              <strong>{"Multi-channel growth support"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
          <article
            className="project"
            data-cat="full"
            hidden={filter !== "all" && filter !== "full"}
          >
            <div className="project-top">
              <span className="eyetag">{"Real Estate & Jewellery"}</span>
              <span className="pr-icon">{"✳"}</span>
            </div>
            <h3>
              {
                "Amantran Developers, Property Trade, MG Jewellers & Swayambhu Gold Pvt Ltd"
              }
            </h3>
            <p>
              {
                "Broader growth and marketing support across property and retail businesses, aligning discoverability, demand and campaign execution."
              }
            </p>
            <div className="project-bottom">
              <strong>{"360° marketing engagements"}</strong>
              <div className="project-links"></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
