export default function Contact() {
  return (
    <section className="section section-soft" id="contact">
      <div className="container">
        <div className="contact-block">
          <div className="section-kicker">
            {"Let's build something meaningful"}
          </div>
          <h2>
            {"Ready for your next "}
            <span className="gradient-text">{"growth milestone?"}</span>
          </h2>
          <p>
            {
              "Growth strategy, SEO, AI search, PPC or conversion funnels—let's connect."
            }
          </p>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <a
              className="btn btn-main"
              href="#contact"
              data-open-booking="true"
            >
              {"Book a Call ↗"}
            </a>
            <a
              className="btn btn-plain"
              href="https://www.linkedin.com/in/maruti-khapare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Connect on LinkedIn"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
