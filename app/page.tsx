import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Agricultural Economist · Fayetteville, Arkansas</p>
          <h1>Yuan Zhang</h1>
          <p className="intro">I am a Postdoctoral Fellow in the Department of Agricultural Economics and Agribusiness at the University of Arkansas.</p>
          <p className="intro secondary">I am originally from Shanxi, China, a province known for its coal industry. I earned my bachelor’s degree at Oklahoma State University, completed my master’s degree at the University of California, Davis, and returned to Oklahoma State University for my Ph.D.</p>
          <div className="hero-actions">
            <a className="primary-button" href="/research">Explore my research</a>
            <a className="secondary-button" href="/Yuan_Zhang_CV.docx" download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
          <a className="hero-email" href="mailto:yuanz@uark.edu"><span>Email</span> yuanz@uark.edu ↗</a>
        </div>
        <div className="portrait-wrap">
          <div className="portrait-frame"><img src="/yuan-zhang-web.jpg" alt="Portrait of Yuan Zhang" /></div>
        </div>
      </section>
      <section className="home-links" aria-label="Explore the website">
        <a href="/publications"><span>01</span><strong>Publications</strong><em>Selected journal articles and outreach ↗</em></a>
        <a href="/experience"><span>02</span><strong>Experience</strong><em>Appointments and education ↗</em></a>
        <a href="/teaching"><span>03</span><strong>Teaching</strong><em>Courses and instruction ↗</em></a>
        <a href="/personal"><span>04</span><strong>Personal</strong><em>Life beyond research ↗</em></a>
      </section>
      <footer>
        <div><p className="eyebrow">Let’s connect</p><h2>Questions, ideas, or collaboration?</h2><a className="footer-email" href="mailto:yuanz@uark.edu">yuanz@uark.edu ↗</a></div>
        <div className="footer-links"><a href="https://scholar.google.com/citations?user=POpHA8IAAAAJ&hl=en">Google Scholar ↗</a><a href="https://www.linkedin.com/in/yuan-zhang-02019014b">LinkedIn ↗</a><a href="https://orcid.org/0009-0001-0942-0226">ORCID ↗</a></div>
        <p className="copyright">© {new Date().getFullYear()} Yuan Zhang</p>
      </footer>
    </main>
  );
}
