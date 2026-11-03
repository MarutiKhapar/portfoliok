export default function About() {
  return (
    <section className="section section-soft" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <div className="section-kicker">{"About me"}</div>
          <div className="section-head">
            <h2>
              {"Growth is more than "}
              <span className="gradient-text">{"running campaigns."}</span>
            </h2>
            <p>
              {
                "I work at the intersection of business goals, search discoverability, performance marketing, analytics and user experience. From a large-scale e-commerce SEO architecture to conversion-focused lead funnels, my work is about connecting execution to outcomes."
              }
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/maruti-khapare/"
            className="btn btn-plain"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Explore LinkedIn ↗"}
          </a>
        </div>
        <div className="about-card">
          <div className="section-kicker">{"How I work"}</div>
          <h3>{"Discover → Build → Measure → Improve"}</h3>
          <p>
            {
              "I map the customer journey, prioritize high-impact opportunities, coordinate creative and technical execution, then measure performance using GA4, GSC and campaign data."
            }
          </p>
          <div className="chipset">
            <span className="chip">{"Technical SEO"}</span>
            <span className="chip">{"Programmatic SEO"}</span>
            <span className="chip">{"GEO / AI Search"}</span>
            <span className="chip">{"Google Ads"}</span>
            <span className="chip">{"Meta Ads"}</span>
            <span className="chip">{"GA4 & GTM"}</span>
            <span className="chip">{"CRO"}</span>
            <span className="chip">{"CRM Funnels"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
