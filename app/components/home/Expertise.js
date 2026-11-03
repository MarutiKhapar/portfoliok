export default function Expertise() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">{"Capabilities"}</div>
          <h2>
            {"One growth partner. "}
            <span className="gradient-text">{"Multiple levers."}</span>
          </h2>
          <p>
            {
              "Research, strategy, execution and measurement across channels and customer lifecycle stages."
            }
          </p>
        </div>
        <div className="service-grid">
          <article className="service">
            <div className="service-icon">{"⌕"}</div>
            <h3>{"SEO & AI Search"}</h3>
            <p>
              {
                "Technical SEO, architecture, crawling, indexing, scalable content and GEO-ready discoverability."
              }
            </p>
          </article>
          <article className="service">
            <div className="service-icon">{"↗"}</div>
            <h3>{"Paid Acquisition"}</h3>
            <p>
              {
                "Meta, Google and LinkedIn campaigns built around qualified demand, conversions and efficiency."
              }
            </p>
          </article>
          <article className="service">
            <div className="service-icon">{"◫"}</div>
            <h3>{"Analytics & CRO"}</h3>
            <p>
              {
                "GA4, GTM, event tracking, user journeys, landing-page experiments and conversion diagnostics."
              }
            </p>
          </article>
          <article className="service">
            <div className="service-icon">{"✳"}</div>
            <h3>{"360° Brand Growth"}</h3>
            <p>
              {
                "Full-funnel strategy, positioning, social creative, CRM and integrated growth execution."
              }
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
