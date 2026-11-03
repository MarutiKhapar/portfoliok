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
  assert.match(html, /~1\.8 million/);
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
