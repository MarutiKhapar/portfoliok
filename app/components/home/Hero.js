export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="pill">
            <span className="dot"></span>
            {" Growth Strategy · SEO · PPC · AI Search"}
          </div>
          <h1>
            <span>{"Turn strategy"}</span>
            <span className="gradient-text">{"into growth."}</span>
          </h1>
          <p className="lead">
            {
              "I’m Maruti Khapare. I connect search, paid media, analytics and customer journeys to build scalable acquisition systems and measurable business outcomes."
            }
          </p>
          <div className="cta-row">
            <a href="#contact" className="btn btn-main">
              {"Work With Me ↗"}
            </a>
            <a href="#work" className="btn btn-plain">
              {"◉   View My Work"}
            </a>
          </div>
          <div className="mini-proof">
            <div className="avatar-stack">
              <span>{"SEO"}</span>
              <span>{"PPC"}</span>
              <span>{"GEO"}</span>
            </div>
            <i></i>
            <span>
              {"India · Dubai · International markets"}
              <br />
              {"Growth across industries and funnels"}
            </span>
          </div>
        </div>
        <div
          className="dashboard"
          aria-label="Highlights from reported portfolio results"
        >
          <div className="caption-hero">{"Ideas → traffic → revenue"}</div>
          <div className="dash-card dash-top">
            <div className="dash-title">
              <span className="dash-icon">{"⌕"}</span>
              {" E-commerce SEO"}
            </div>
            <div className="d-num gradient-text">{"9 lakh+"}</div>
            <div className="d-caption">{"Pages in Olraa project"}</div>
            <svg
              className="spark"
              viewBox="0 0 240 75"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="fill"
                d="M0 59 C 25 30,35 54,57 39 S 99 50,117 27 S 157 40,179 21 S 221 20,240 4 L240 75 L0 75Z"
              >
                <path
                  className="stroke"
                  d="M0 59 C25 30,35 54,57 39 S99 50,117 27 S157 40,179 21 S221 20,240 4"
                ></path>
              </path>
            </svg>
          </div>
          <div className="dash-card dash-right">
            <div className="dash-title">
              <span className="dash-icon warm">{"↗"}</span>
              {" Meta Ads ROAS"}
            </div>
            <div className="d-num">{"4×"}</div>
            <div className="d-caption">{"Brikroo · reported return"}</div>
            <div className="bars">
              <b style={{ height: "23%" }}></b>
              <b style={{ height: "37%" }}></b>
              <b style={{ height: "54%" }}></b>
              <b style={{ height: "61%" }}></b>
              <b style={{ height: "76%" }}></b>
              <b style={{ height: "93%" }}></b>
            </div>
          </div>
          <div className="dash-card dash-middle">
            <div className="dash-title">
              <span className="dash-icon warm">{"♙"}</span>
              {" Real Estate Leads"}
            </div>
            <div className="d-num">{"~400"}</div>
            <div className="d-caption">{"Leads per client · reported"}</div>
            <div className="bars soft">
              <b style={{ height: "33%" }}></b>
              <b style={{ height: "48%" }}></b>
              <b style={{ height: "60%" }}></b>
              <b style={{ height: "83%" }}></b>
              <b style={{ height: "92%" }}></b>
            </div>
          </div>
          <div className="dash-card dash-bottom">
            <div className="dash-title">
              <span className="dash-icon blue">{"▥"}</span>
              {" Organic Revenue"}
            </div>
            <div className="d-num gradient-text">{"₹4 lakh"}</div>
            <div className="d-caption">{"The Desi Food · reported"}</div>
            <svg
              className="spark"
              viewBox="0 0 240 75"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="fill"
                d="M0 60 Q22 42 42 48 T80 43 T118 34 T162 30 T209 17 L240 8 L240 75 L0 75Z"
              >
                <path
                  className="stroke"
                  d="M0 60 Q22 42 42 48 T80 43 T118 34 T162 30 T209 17 L240 8"
                ></path>
              </path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
