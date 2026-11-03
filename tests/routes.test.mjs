import test from "node:test";
import assert from "node:assert/strict";

const origin = process.env.TEST_ORIGIN || "http://localhost:3005";

test("case study is indexable, linked and contains its substantive sections", async () => {
  const response = await fetch(`${origin}/work/olraa`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(
    html,
    /rel="canonical" href="https:\/\/maruti-khapare\.vercel\.app\/work\/olraa"/,
  );
  for (const id of [
    "overview",
    "strategy",
    "content",
    "execution",
    "results",
    "sources",
  ])
    assert.ok(html.includes(`id="${id}"`), id);
  assert.match(html, /class="content-journey"/);
  assert.match(html, /120k/);
  assert.match(html, /~1\.2 million/);
  assert.match(html, /olraa-wordmark">OLRAA/);
  assert.doesNotMatch(
    html,
    /Order value|A growing order book|reported month|result-panel/,
  );
  assert.doesNotMatch(html, /0\.9%|nine.month|9.month|February|August/);
});

test("homepage retains projects, navigation, chatbot and booking controls after migration", async () => {
  const response = await fetch(origin);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /href="\/work\/olraa"/);
  for (const id of ["menu", "projects", "chatbotToggle", "chatForm"])
    assert.ok(html.includes(`id="${id}"`), id);
  assert.match(html, /data-open-booking/);
  assert.match(html, /G-QXFKK6510X/);
  assert.match(html, /\/scripts\/analytics\.js/);
  assert.match(html, /120,000 indexed pages/);
  assert.doesNotMatch(html, /300,000\+ indexed pages|~3M impressions/);
  const analytics = await fetch(`${origin}/scripts/analytics.js`);
  assert.equal(analytics.status, 200);
  assert.match(await analytics.text(), /mixpanel/);
});

test("old entry links redirect to their Next.js pages", async () => {
  for (const [route, target] of [
    ["/index.html", "/"],
    ["/olraa", "/work/olraa"],
  ]) {
    const response = await fetch(`${origin}${route}`, { redirect: "manual" });
    assert.equal(response.status, 308);
    assert.equal(response.headers.get("location"), target);
  }
});

test("booking API rejects GET without invoking external booking services", async () => {
  const response = await fetch(`${origin}/api/book-call`);
  assert.equal(response.status, 405);
  assert.deepEqual(await response.json(), { error: "Method not allowed" });
});

test("missing pages return a real 404", async () => {
  assert.equal((await fetch(`${origin}/work/not-a-project`)).status, 404);
});

test("every public page includes canonical metadata, valid JSON-LD and site-wide tracking", async () => {
  for (const [path, expectedType] of [
    ["/", "ProfilePage"],
    ["/work/olraa", "Article"],
    ["/work/hospitality", "Article"],
  ]) {
    const response = await fetch(origin + path);
    const html = await response.text();
    assert.equal(response.status, 200, path);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    assert.ok(canonical, path);
    assert.equal(
      new URL(canonical[1]).href,
      new URL(`https://maruti-khapare.vercel.app${path}`).href,
    );
    assert.match(html, /property="og:title"/);
    assert.match(html, /name="twitter:card" content="summary_large_image"/);
    assert.match(html, /G-QXFKK6510X/);
    assert.match(html, /\/scripts\/analytics\.js/);
    const graphs = [
      ...html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
      ),
    ].map((match) => JSON.parse(match[1]));
    const nodes = graphs.flatMap((graph) => graph["@graph"] || [graph]);
    for (const type of ["Person", "WebSite", expectedType])
      assert.ok(
        nodes.some((node) => node["@type"] === type),
        `${path}: ${type}`,
      );
    if (path === "/") {
      const faq = nodes.find((node) => node["@type"] === "FAQPage");
      assert.equal(faq.mainEntity.length, 5);
      for (const question of faq.mainEntity)
        assert.ok(html.includes(question.name));
    } else assert.ok(nodes.some((node) => node["@type"] === "BreadcrumbList"));
  }
});

test("generated social previews are valid PNG images", async () => {
  for (const path of [
    "/opengraph-image",
    "/work/hospitality/opengraph-image",
  ]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type"), /image\/png/);
    const bytes = new Uint8Array(await response.arrayBuffer());
    assert.deepEqual([...bytes.slice(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  }
});

test("removed editorial notes do not reappear on the published pages", async () => {
  const olraa = await fetch(origin + "/work/olraa").then((response) =>
    response.text(),
  );
  assert.doesNotMatch(
    olraa,
    /Reading these results|Formats illustrate strategic roles|Shipping and customer-story articles were not independently located/,
  );
  const hotels = await fetch(origin + "/work/hospitality").then((response) =>
    response.text(),
  );
  assert.doesNotMatch(
    hotels,
    /Shared delivery|Results in context|ota-footnote/,
  );
  assert.match(hotels, /I prepared this case study/);
});

test("hospitality case study separates reported bookings from current search estimates", async () => {
  const response = await fetch(`${origin}/work/hospitality`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(
    html,
    /rel="canonical" href="https:\/\/maruti-khapare\.vercel\.app\/work\/hospitality"/,
  );
  for (const id of ["challenge", "approach", "content", "results", "evidence"])
    assert.ok(html.includes(`id="${id}"`));
  for (const text of [
    "Ember Castle",
    "About this case study",
    "Milan Hospitality",
    "October 2026",
    "1,427",
    "Mahaveer Ventures",
  ])
    assert.ok(html.includes(text), text);
  assert.match(html, /href="https:\/\/hoteleden\.in\//);
  assert.doesNotMatch(html, /~10–15|~40–60|makemytrip\.com|goibibo\.com/);
  for (const asset of [
    "hotel-eden-violet.svg",
    "padival-grand-violet.svg",
    "coastal-resort.svg",
    "karwar.svg",
    "gokarna.svg",
    "puttur.svg",
  ])
    assert.ok(html.includes(asset), asset);
  const home = await fetch(origin).then((r) => r.text());
  assert.match(home, /href="\/work\/hospitality"/);
  const sitemap = await fetch(`${origin}/sitemap.xml`).then((r) => r.text());
  assert.ok(sitemap.includes("/work/hospitality"));
});
