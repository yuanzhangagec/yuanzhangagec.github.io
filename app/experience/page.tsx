import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Experience | Yuan Zhang",
  description: "Academic experience and education of Yuan Zhang.",
};

const items = [
  ["2025—Present", "Postdoctoral Fellow", "University of Arkansas · Department of Agricultural Economics and Agribusiness"],
  ["2024", "Ph.D., Agricultural Economics", "Oklahoma State University · Advisor: B. Wade Brorsen"],
  ["2019", "M.S., Agricultural & Resource Economics", "University of California, Davis"],
  ["2018", "B.S., Agribusiness", "Oklahoma State University & China Agricultural University · Joint dual-degree program"],
];

export default function ExperiencePage() {
  return (
    <main>
      <SiteHeader active="Experience" />
      <section className="page-hero compact">
        <p className="eyebrow">Experience</p>
        <h1>Appointments &amp; education.</h1>
      </section>
      <section className="experience-section page-section">
        <div className="section-label">Timeline</div>
        <div className="timeline-wrap">
          <div className="timeline">
            {items.map(([date, title, detail]) => (
              <article key={title}>
                <span className="date">{date}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
