import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Teaching | Yuan Zhang", description: "Teaching experience of Yuan Zhang." };

export default function TeachingPage() { return <main><SiteHeader active="Teaching" /><section className="page-hero compact"><p className="eyebrow">Teaching</p><h1>Courses &amp; instruction.</h1></section><section className="teaching-section page-section"><div className="section-label">Teaching experience</div><div className="teaching-content"><div className="course-grid"><article><span>Oklahoma State University · 2023</span><h3>Applications of Mathematical Programming</h3><p>Graduate teaching assistant · AGEC 5113</p></article><article><span>UC Davis · 2019</span><h3>Intermediate Managerial Accounting</h3><p>Graduate teaching assistant · ARE 119</p></article><article><span>UC Davis · 2019</span><h3>Real Estate Economics</h3><p>Graduate teaching assistant · ARE 144</p></article><article><span>Oklahoma State University · 2017</span><h3>Agricultural Marketing &amp; Price Analysis</h3><p>Teaching assistant · AGEC 3333</p></article></div></div></section></main>; }
