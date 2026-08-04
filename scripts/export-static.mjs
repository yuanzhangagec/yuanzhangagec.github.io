import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const out = new URL("../out/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", Date.now().toString());

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), out, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const routes = [
  { path: "/", file: new URL("index.html", out) },
  { path: "/personal", file: new URL("personal/index.html", out) },
  { path: "/research", file: new URL("research/index.html", out) },
  { path: "/experience", file: new URL("experience/index.html", out) },
  { path: "/teaching", file: new URL("teaching/index.html", out) },
];

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://yuanzhangagec.github.io${route.path}`, {
      headers: { accept: "text/html" },
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) throw new Error(`Failed to render ${route.path}: ${response.status}`);
  let html = await response.text();
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.slice(0, html.indexOf("</html>") + 7);
  await mkdir(new URL("./", route.file), { recursive: true });
  await writeFile(route.file, html, "utf8");
}

await writeFile(new URL(".nojekyll", out), "", "utf8");
await cp(new URL("index.html", out), new URL("404.html", out));
console.log("Static GitHub Pages site exported to out/");
