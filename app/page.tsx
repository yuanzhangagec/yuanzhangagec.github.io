const links = {
  scholar: "https://scholar.google.com/citations?user=POpHA8IAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/yuan-zhang-02019014b",
  orcid: "https://orcid.org/0009-0001-0942-0226",
  github: "https://github.com/yuanzhangxzwyf/yuanzhang.github.io",
};

const publications = [
  {
    year: "2026",
    title: "Cover Crop and Termination Date Effects on Wheat Forage Biomass, Nutrient Content, and Profitability",
    authors: "Yuan Zhang, J. T. Biermacher, B. Wade Brorsen, and J. K. Rogers",
    journal: "Agrosystems, Geosciences & Environment · Forthcoming",
    href: "https://doi.org/10.1002/agg2.70412",
  },
  {
    year: "2026",
    title: "A Common Risk-Off Factor in Commodity Tail Co-Movement",
    authors: "Yuan Zhang and E. Park",
    journal: "Applied Economics Letters",
    href: "https://doi.org/10.1080/13504851.2026.2669369",
  },
  {
    year: "2026",
    title: "When the River Runs Low: Heterogeneous Impacts of Transportation Disruptions on Local Grain Basis",
    authors: "Yuan Zhang, A. E. Anderson, N. J. Pates, and E. Park",
    journal: "Agribusiness",
    href: "https://doi.org/10.1002/agr.70108",
  },
  {
    year: "2026",
    title: "Nitrogen Response Modeling with a Multi-degree Spline Plateau Approach",
    authors: "Yuan Zhang, B. Wade Brorsen, and W. H. Duncan",
    journal: "Journal of Agricultural and Resource Economics, 51(2), 238–262",
    href: "https://doi.org/10.22004/ag.econ.369143",
  },
];

const outreach = [
  {
    status: "Extension publication · 2026",
    title: "When the River Runs Low, Southern Grain Farmers Pay the Most",
    authors: "Yuan Zhang, A. E. Anderson, and R. Loy · Southern Ag Today",
    href: "https://southernagtoday.org/2026/06/24/when-the-river-runs-low-southern-grain-farmers-pay-the-most/",
  },
  {
    status: "Media coverage · 2026",
    title: "The Economic Impacts of Mississippi River Disruptions on Southern Grain Farmers",
    authors: "Radio interview · Agriculture of America (AOA), American Ag Network",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yuan Zhang, home">
          YZ<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#teaching">Teaching</a>
          <a href="/personal">Personal</a>
        </nav>
        <a className="cv-link" href="/Yuan_Zhang_CV.docx" download>
          CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Agricultural Economist · Fayetteville, Arkansas</p>
          <h1>Yuan Zhang</h1>
          <p className="intro">
            I am a Postdoctoral Fellow in the Department of Agricultural Economics and Agribusiness at the University of Arkansas.
          </p>
          <p className="intro secondary">
            My research connects production economics, commodity markets, and risk—turning spatial and time-series evidence into practical insight for farms and food systems.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#publications">Explore my research</a>
            <a className="text-link" href="mailto:yuanz@uark.edu">yuanz@uark.edu <Arrow /></a>
          </div>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img src="/yuan-zhang.jpg" alt="Portrait of Yuan Zhang" />
          </div>
          <p className="portrait-note">Research at the intersection of markets, risk, and agricultural production.</p>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-label">01 / Research</div>
        <div className="research-content">
          <h2>Evidence for more resilient agricultural decisions.</h2>
          <div className="research-grid">
            <article>
              <span>01</span>
              <h3>Production Economics</h3>
              <p>Cover crops, nitrogen response, precision agriculture, and crop insurance design.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Commodity Markets</h3>
              <p>Price discovery, market integration, and the effects of transportation disruptions.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Risk &amp; Applied Methods</h3>
              <p>Spatial econometrics, tail dependence, and time-series tools for policy-relevant questions.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="publication-section" id="publications">
        <div className="section-heading">
          <div>
            <div className="section-label">02 / Publications</div>
            <h2>Selected research</h2>
          </div>
          <a className="text-link" href={links.scholar} target="_blank" rel="noreferrer">View Google Scholar <Arrow /></a>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <a className="publication" href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
              <span className="pub-year">{paper.year}</span>
              <span className="pub-details">
                <strong>{paper.title}</strong>
                <span>{paper.authors}</span>
                <em>{paper.journal}</em>
              </span>
              <span className="pub-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="working-header">
          <h3>Extension work &amp; media coverage</h3>
        </div>
        <div className="working-grid">
          {outreach.map((item) => (
            <article key={item.title}>
              <span className="status">{item.status}</span>
              <h4>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title} <Arrow /></a> : item.title}</h4>
              <p>{item.authors}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-label">03 / Experience</div>
        <div className="timeline-wrap">
          <h2>Experience &amp; education</h2>
          <div className="timeline">
            <article>
              <span className="date">2025—Present</span>
              <div><h3>Postdoctoral Fellow</h3><p>University of Arkansas · Department of Agricultural Economics and Agribusiness</p></div>
            </article>
            <article>
              <span className="date">2020—2024</span>
              <div><h3>Graduate Research Assistant</h3><p>Oklahoma State University · Department of Agricultural Economics</p></div>
            </article>
            <article>
              <span className="date">2024</span>
              <div><h3>Ph.D., Agricultural Economics</h3><p>Oklahoma State University · Advisor: B. Wade Brorsen</p></div>
            </article>
            <article>
              <span className="date">2019</span>
              <div><h3>M.S., Agricultural &amp; Resource Economics</h3><p>University of California, Davis</p></div>
            </article>
            <article>
              <span className="date">2018</span>
              <div><h3>B.S., Agribusiness</h3><p>Oklahoma State University &amp; China Agricultural University · Joint dual-degree program</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="teaching-section" id="teaching">
        <div className="section-label">04 / Teaching</div>
        <div className="teaching-content">
          <h2>Teaching experience</h2>
          <div className="course-grid">
            <article><span>Oklahoma State University · 2023</span><h3>Applications of Mathematical Programming</h3><p>Graduate teaching assistant · AGEC 5113</p></article>
            <article><span>UC Davis · 2019</span><h3>Intermediate Managerial Accounting</h3><p>Graduate teaching assistant · ARE 119</p></article>
            <article><span>UC Davis · 2019</span><h3>Real Estate Economics</h3><p>Graduate teaching assistant · ARE 144</p></article>
            <article><span>Oklahoma State University · 2017</span><h3>Agricultural Marketing &amp; Price Analysis</h3><p>Teaching assistant · AGEC 3333</p></article>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">Let’s connect</p>
          <h2>Questions, ideas, or collaboration?</h2>
          <a className="footer-email" href="mailto:yuanz@uark.edu">yuanz@uark.edu <Arrow /></a>
        </div>
        <div className="footer-links">
          <a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar <Arrow /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={links.orcid} target="_blank" rel="noreferrer">ORCID <Arrow /></a>
          <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Yuan Zhang</p>
      </footer>
    </main>
  );
}
