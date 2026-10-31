import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Yuan Zhang's academic website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>Yuan Zhang \| Agricultural Economist<\/title>/i);
  assert.match(html, /Postdoctoral Fellow/);
  assert.match(html, /Explore my work/);
  assert.match(html, /Download CV/);
  assert.match(html, /href="\/research"/);
  assert.doesNotMatch(html, /href="\/publications"/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /Yuan_Zhang_CV\.docx/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("renders current research, extension, and outreach content", async () => {
  const response = await render("/research");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Research, Extension &amp; Outreach/);
  assert.match(html, /Peer-reviewed publications/);
  assert.match(html, /Submitted papers/);
  assert.match(html, /R&amp;R · Agricultural Economics/);
  assert.match(html, /Under Review · Journal of Futures Markets/);
  assert.match(html, /Southern Ag Today/);
  assert.match(html, /Media coverage &amp; interviews/);
  assert.match(html, /Agriculture of America/);
});
