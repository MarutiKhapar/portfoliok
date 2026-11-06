import "../../olraa/olraa.css";
import styles from "./case-study.module.css";

const gallery = "https://www.behance.net/gallery/221384359/MG-Jewellers-Challenging-the-Gold-Standard";
const sections = [
  ["challenge", "Challenge"],
  ["strategy", "Strategy"],
  ["execution", "Execution"],
  ["evidence", "Creative work"],
];

export const metadata = {
  title: "MG Jewellers & Swayambhu Gold | Retail Marketing Case Study",
  description: "How Maruti Khapare connected jewellery campaigns and village outreach with showroom visits in Belagavi.",
};

export default function GoldAndRetailCaseStudy() {
  return (
    <div className={`case-study ${styles.study}`} id="top">
      <a className="skip-link" href="#main-content">Skip to case study</a>
      <header className="case-header">
        <div className="case-wrap header-inner">
          <a className="signature" href="/"><span className="monogram">MK</span> Maruti Khapare</a>
          <nav aria-label="Portfolio navigation"><a href="/#work">All work</a></nav>
        </div>
      </header>
      <main id="main-content">
        <section className="case-hero">
          <div className="case-wrap">
            <div className="hero-meta"><a href="/#work">← Selected work</a><span>CASE STUDY 03 · GOLD RETAIL</span></div>
            <div className="hero-layout">
              <div>
                <p className="eyebrow">MG JEWELLERS &amp; SWAYAMBHU GOLD · BELAGAVI</p>
                <h1>From local awareness to <em>showroom visits.</em></h1>
                <p className="hero-description">How two jewellery brands connected festive advertising, local creators and village outreach with reasons to visit a showroom.</p>
                <div className="role-line"><span>MY ROLE</span><p>Marketing Manager for both brands, responsible for digital and offline marketing.</p></div>
                <div className="hero-actions"><a className="case-button" href="#strategy">Explore the strategy ↓</a></div>
              </div>
              <figure className={styles.cover}>
                <span>CAMPAIGN JOURNEY</span>
                <ol><li>See a campaign</li><li>Meet the brand locally</li><li>Bring an offer to the showroom</li></ol>
                <figcaption>How digital awareness and in-person outreach worked together.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <div className="case-jump"><nav className="case-wrap" aria-label="Case study sections"><div>
          {sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </div></nav></div>
        <section id="challenge" className="case-section case-wrap">
          <p className="eyebrow">01 · THE CHALLENGE</p>
          <h2>Give shoppers a reason to come in.</h2>
          <div className="overview-columns">
            <p className="body-copy">The goal was to keep MG Jewellers and Swayambhu Gold visible throughout the year and turn that familiarity into visits. Seasonal occasions gave us a reason to run a campaign. Village outreach gave us a way to meet shoppers directly.</p>
            <dl className="project-facts">
              <div><dt>SECTOR</dt><dd>Gold retail and jewellery</dd></div>
              <div><dt>MARKET</dt><dd>Belagavi and surrounding villages</dd></div>
              <div><dt>ROLE</dt><dd>Marketing Manager</dd></div>
              <div><dt>SCOPE</dt><dd>Websites, ads, creative production and offline marketing</dd></div>
            </dl>
          </div>
        </section>
        <section id="strategy" className="strategy-section">
          <div className="case-wrap">
            <p className="eyebrow">02 · CAMPAIGN STRATEGY</p>
            <h2>Stay visible between festivals.</h2>
            <p className="section-lead">Ongoing awareness ads kept the brands in view. The seasonal calendar gave the team a reason to plan new creative, shoots and collaborations.</p>
            <div className={styles.cards}>
              <article><h3>Festivals</h3><p>Akshaya Tritiya, Diwali, Dussehra and Gudi Padwa.</p></article>
              <article><h3>Gifting occasions</h3><p>Valentine’s Week, Mother’s Day, Father’s Day and Women’s Week.</p></article>
              <article><h3>Year-round awareness</h3><p>Video shoots, video ads, influencer collaborations and both brand websites.</p></article>
            </div>
          </div>
        </section>
        <section id="execution" className="case-section case-wrap">
          <p className="eyebrow">03 · ON THE GROUND</p>
          <h2>Connect village events with the showroom.</h2>
          <p className="section-lead">Our team visited villages and organised games and community activities. We handed out coupons and discount cards that families could use at the showroom, giving people a practical reason to follow up after the event.</p>
          <div className={styles.cards}>
            <article><h3>Meet</h3><p>Run games and activities where local families can take part.</p></article>
            <article><h3>Invite</h3><p>Give participants a coupon or discount card to take home.</p></article>
            <article><h3>Visit</h3><p>Give shoppers a reason to bring the offer to the showroom.</p></article>
          </div>
        </section>
        <section id="evidence" className="results-section">
          <div className="case-wrap sources-section">
            <div><p className="eyebrow">04 · CREATIVE WORK</p><h2>Campaign creative and retail websites</h2><p>The MG Jewellers Behance gallery brings the campaign design and jewellery imagery together in one place.</p></div>
            <div className="source-list">
              <a href={gallery}><span>01</span> MG Jewellers: Challenging the Gold Standard <span aria-hidden="true">↗</span></a>
              <a href="https://mgjewellers.co.in/"><span>02</span> MG Jewellers website <span aria-hidden="true">↗</span></a>
              <a href="https://www.swayambhugold.com/"><span>03</span> Swayambhu Gold website <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="case-footer"><div className="case-wrap"><a href="/">Maruti Khapare</a><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}
