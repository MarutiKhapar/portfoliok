import styles from "./case-study.module.css";

export const metadata = {
  title: "MG Jewellers & Swayambhu Gold | Retail Marketing Case Study",
  description: "How Maruti Khapare connected digital campaigns and community outreach with showroom visits in Belagavi.",
};

export default function GoldAndRetailCaseStudy() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <a href="/#work">← Selected Work</a>
          <p className={styles.kicker}>Gold retail &amp; jewellery · Belagavi</p>
          <h1>MG Jewellers &amp; Swayambhu Gold</h1>
          <p>From festive campaigns and local creators to community events that gave customers a reason to visit the showroom.</p>
        </div>
      </header>
      <div className={styles.wrap}>
        <div className={styles.body}>
          <h2>My role as Marketing Manager</h2>
          <p>I managed digital and offline marketing for both brands, including their websites, seasonal campaigns, influencer collaborations, awareness advertising and local outreach.</p>
          <div className={styles.grid}>
            <section className={styles.card}>
              <h2>01. Festive campaigns</h2>
              <p>We planned campaigns for Akshaya Tritiya, Diwali, Dussehra and Gudi Padwa, alongside Valentine’s Week, Mother’s Day, Father’s Day and Women’s Week.</p>
            </section>
            <section className={styles.card}>
              <h2>02. Creative and awareness</h2>
              <p>Between seasonal campaigns, we kept both brands visible through ongoing awareness ads, video shoots, video ads and collaborations with influencers.</p>
            </section>
            <section className={styles.card}>
              <h2>03. Village outreach</h2>
              <p>Our team visited villages and ran games and community activities. We handed out coupons and discount cards that gave families a reason to visit the showroom after meeting us locally.</p>
            </section>
          </div>
          <section className={styles.reference}>
            <h2>Creative work and brand websites</h2>
            <p>See the MG Jewellers creative project on Behance, or visit the two retail websites.</p>
            <ul>
              <li><a href="https://www.behance.net/gallery/221384359/MG-Jewellers-Challenging-the-Gold-Standard">MG Jewellers: Challenging the Gold Standard</a></li>
              <li><a href="https://mgjewellers.co.in/">MG Jewellers website</a></li>
              <li><a href="https://www.swayambhugold.com/">Swayambhu Gold website</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
