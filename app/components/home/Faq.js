import { homeFaqs } from "../../lib/seo";

export default function Faq() {
  return (
    <section
      className="section portfolio-faq"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="section-head">
          <div className="section-kicker">Before we connect</div>
          <h2 id="faq-heading">
            A few useful <span className="gradient-text">answers.</span>
          </h2>
        </div>
        <div className="faq-list">
          {homeFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
