import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import {
  extensionPublications,
  mediaCoverage,
  publications,
  researchAreas,
  submittedPapers,
  workingPapers,
} from "../content";

export const metadata: Metadata = {
  title: "Research, Extension & Outreach | Yuan Zhang",
  description: "Research, extension publications, media coverage, and outreach by agricultural economist Yuan Zhang.",
};

export default function ResearchPage() {
  return (
    <main>
      <SiteHeader active="Research, Extension & Outreach" />

      <section className="page-hero compact research-outreach-hero">
        <p className="eyebrow">Research · Extension · Outreach</p>
        <h1>Research, Extension & Outreach</h1>
        <p>My work examines agricultural production, commodity markets, transportation disruptions, and risk—and connects that research with producers, industry, and the public.</p>
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

      <section className="working-paper-section submitted-paper-section">
        <div className="section-heading">
          <div><p className="eyebrow">Research in review</p><h2>Submitted papers</h2></div>
        </div>
        <div className="working-paper-list">
          {submittedPapers.map((paper) => (
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

      <section className="working-paper-section plain-paper-section">
        <div className="section-heading">
          <div><p className="eyebrow">Research in progress</p><h2>Working papers</h2></div>
        </div>
        <div className="working-paper-list">
          {workingPapers.map((paper, index) => (
            <article className="working-paper" key={paper.title}>
              <span className="status">Working paper · {String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="publication-section extension-publications">
        <div className="section-heading">
          <div><p className="eyebrow">Extension</p><h2>Extension publication</h2></div>
        </div>
        <div className="publication-list">
          {extensionPublications.map((publication) => (
            <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}>
              <span className="pub-year">{publication.year}</span>
              <span className="pub-details">
                <strong>{publication.title}</strong>
                <span>{publication.authors}</span>
                <em>{publication.outlet}</em>
              </span>
              <span className="pub-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="outreach-section">
        <div className="section-heading">
          <div><p className="eyebrow">Outreach</p><h2>Media coverage & interviews</h2></div>
        </div>
        <div className="outreach-list">
          {mediaCoverage.map((item) => {
            const details = (
              <>
                <span className="status">{item.type} · {item.date}</span>
                <span className="outreach-details">
                  <strong>{item.title}</strong>
                  <em>{item.outlet}</em>
                </span>
                {item.href ? <span className="pub-arrow">↗</span> : <span aria-hidden="true" />}
              </>
            );

            return item.href ? (
              <a className="outreach-item" href={item.href} target="_blank" rel="noreferrer" key={item.title}>{details}</a>
            ) : (
              <article className="outreach-item" key={item.title}>{details}</article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
