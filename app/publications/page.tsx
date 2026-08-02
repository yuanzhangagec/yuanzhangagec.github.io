import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";
import { outreach, publications } from "../content";

export const metadata: Metadata = {
  title: "Publications | Yuan Zhang",
  description: "Peer-reviewed publications, extension work, and media coverage.",
};

export default function PublicationsPage() {
  return (
    <main>
      <SiteHeader active="Publications" />
      <section className="page-hero compact">
        <p className="eyebrow">Publications</p>
        <h1>Peer-reviewed publications</h1>
        <p>Peer-reviewed research on production, commodity markets, transportation, and risk.</p>
      </section>
      <section className="publication-section inner-publications">
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
        <div className="working-header"><h3>Extension work &amp; media coverage</h3></div>
        <div className="working-grid">
          {outreach.map((item) => (
            <article key={item.title}>
              <span className="status">{item.status}</span>
              <h4>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title} ↗</a> : item.title}</h4>
              <p>{item.authors}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
