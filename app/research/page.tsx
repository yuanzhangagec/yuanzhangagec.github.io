import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { publications, researchAreas, workingPapers } from "../content";

export const metadata: Metadata = {
  title: "Research | Yuan Zhang",
  description: "Research areas, peer-reviewed publications, and working papers by agricultural economist Yuan Zhang.",
};

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader active="Research" />

      <section className="page-hero compact">
        <p className="eyebrow">Research</p>
        <h1>Research</h1>
        <p>My work examines agricultural production, commodity markets, transportation disruptions, and risk.</p>
      </section>

      <section className="research-section page-section">
        <div className="section-label">Research areas</div>
        <div className="research-content">
          <div className="research-grid two-column">
            {researchAreas.map((area, index) => (
              <article key={area.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="publication-section research-publications">
        <div className="section-heading">
          <div><p className="eyebrow">Published research</p><h2>Peer-reviewed publications</h2></div>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
              <span className="pub-year">{publication.year}</span>
              <span className="pub-details">
                <strong>{publication.title}</strong>
                <span>{publication.authors}</span>
                <em>{publication.journal}</em>
              </span>
              <span className="pub-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="working-paper-section">
        <div className="section-heading">
          <div><p className="eyebrow">Research in progress</p><h2>Working papers</h2></div>
        </div>
        <div className="working-paper-list">
          {workingPapers.map((paper) => (
            <article className="working-paper" key={paper.title}>
              <span className="status">{paper.status}</span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
