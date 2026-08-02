import type { Metadata } from "next";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Research | Yuan Zhang", description: "Research interests of agricultural economist Yuan Zhang." };

export default function ResearchPage() {
  return <main><SiteHeader active="Research" /><section className="page-hero"><p className="eyebrow">Research</p><h1>Evidence for more resilient agricultural decisions.</h1><p>My work combines economic questions with spatial and time-series evidence to understand production decisions, market disruptions, and risk.</p></section><section className="research-section page-section"><div className="section-label">Areas of interest</div><div className="research-content"><div className="research-grid"><article><span>01</span><h3>Production Economics</h3><p>Cover crops, nitrogen response, precision agriculture, and crop insurance design.</p></article><article><span>02</span><h3>Commodity Markets</h3><p>Price discovery, market integration, and the effects of transportation disruptions.</p></article><article><span>03</span><h3>Risk &amp; Applied Methods</h3><p>Spatial econometrics, tail dependence, and time-series tools for policy-relevant questions.</p></article></div></div></section></main>;
}
