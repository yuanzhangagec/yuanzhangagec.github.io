import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Life | Yuan Zhang",
  description: "A glimpse into Yuan Zhang's life beyond agricultural economics: road trips, weightlifting, basketball, and football.",
};

export default function PersonalLife() {
  return (
    <main className="personal-page">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Yuan Zhang, home">YZ<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="/#research">Research</a>
          <a href="/#publications">Publications</a>
          <a href="/#experience">Experience</a>
          <a href="/#teaching">Teaching</a>
          <a className="active" href="/personal">Personal</a>
        </nav>
        <a className="cv-link" href="/">← Home</a>
      </header>

      <section className="life-hero">
        <div className="life-hero-copy">
          <p className="eyebrow">Away from the desk</p>
          <h1>Life, beyond research.</h1>
          <p>When I am not working with data or thinking about agricultural markets, I enjoy the open road, training, and the energy of live sports.</p>
        </div>
        <div className="life-hero-image">
          <img src="/life/road-trip.jpeg" alt="Yuan Zhang visiting Mount Rushmore during a road trip" />
          <span>Road trips · Mount Rushmore</span>
        </div>
      </section>

      <section className="life-story">
        <div className="section-label">01 / On the road</div>
        <div>
          <h2>New roads, new perspectives.</h2>
          <p>Road trips are my favorite way to step away from routine, see more of the country, and make the journey part of the destination.</p>
        </div>
      </section>

      <section className="life-grid">
        <article className="life-card lift-card">
          <div className="life-photo"><img src="/life/weightlifting.jpg" alt="Yuan Zhang weightlifting at the gym" /></div>
          <div className="life-card-copy"><span>Strength</span><h2>Weightlifting</h2><p>Consistency, focus, and always one more rep.</p></div>
        </article>

        <article className="life-card basketball-card">
          <div className="life-card-copy"><span>Courtside</span><h2>Basketball</h2><p>A longtime Russell Westbrook fan and a proud Oklahoma City Thunder supporter.</p></div>
          <div className="basketball-photos">
            <img src="/life/basketball-arena.jpeg" alt="Yuan Zhang attending a professional basketball game" />
            <img src="/life/thunder.jpeg" alt="Yuan Zhang at an Oklahoma City Thunder playoff game" />
          </div>
        </article>

        <article className="life-card football-card">
          <div className="life-photo wide"><img src="/life/football.jpg" alt="College football game at Boone Pickens Stadium" /></div>
          <div className="life-card-copy"><span>Game day</span><h2>Football</h2><p>There is nothing quite like a packed stadium on a fall Saturday.</p></div>
        </article>
      </section>

      <footer className="life-footer">
        <div><p className="eyebrow">Back to work</p><h2>Explore my research and teaching.</h2><a className="footer-email" href="/">Return to homepage ↗</a></div>
        <p className="copyright">© {new Date().getFullYear()} Yuan Zhang</p>
      </footer>
    </main>
  );
}
