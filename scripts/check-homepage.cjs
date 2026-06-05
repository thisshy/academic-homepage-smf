const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

async function launchBrowser() {
  try {
    return await chromium.launch({ channel: "chrome" });
  } catch {
    return chromium.launch();
  }
}

(async () => {
  const root = path.resolve(__dirname, "..");
  const url = pathToFileURL(path.join(root, "index.html")).href;
  const qaDir = path.join(root, "qa");
  fs.mkdirSync(qaDir, { recursive: true });

  const browser = await launchBrowser();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(qaDir, "desktop.png"), fullPage: true });

  const desktop = await page.evaluate(() => ({
    publications: document.querySelectorAll(".publication-card").length,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    heroLoaded: document.querySelector(".hero-visual img")?.complete || false,
    profileLoaded: document.querySelector(".identity-line img")?.complete || false,
  }));

  await page.click('[data-lang-switch="en"]');
  const english = await page.evaluate(() => ({
    lang: document.documentElement.lang,
    navResearch: document.querySelector('[data-i18n="navResearch"]').textContent,
    emailMe: document.querySelector('[data-i18n="emailMe"]').textContent,
    publicationHeading: document.querySelector("#publications h2:not([data-lang='zh'])").textContent,
    hasFilters: Boolean(document.querySelector(".publication-toolbar")),
    hasCv: Boolean(document.querySelector("#cv")),
  }));

  const mobile = await browser.newPage({ viewport: { width: 390, height: 900 }, isMobile: true });
  const mobileErrors = [];
  mobile.on("pageerror", (err) => mobileErrors.push(err.message));
  mobile.on("console", (msg) => {
    if (msg.type() === "error") mobileErrors.push(msg.text());
  });
  await mobile.goto(url, { waitUntil: "networkidle" });
  await mobile.screenshot({ path: path.join(qaDir, "mobile.png"), fullPage: true });

  const mobileLayout = await mobile.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    publications: document.querySelectorAll(".publication-card").length,
  }));

  await browser.close();

  const result = {
    url,
    desktop,
    english,
    mobile: mobileLayout,
    errors,
    mobileErrors,
    screenshots: ["qa/desktop.png", "qa/mobile.png"],
  };

  console.log(JSON.stringify(result, null, 2));

  if (
    errors.length ||
    mobileErrors.length ||
    desktop.publications !== 8 ||
    english.hasFilters ||
    english.hasCv ||
    desktop.horizontalOverflow ||
    mobileLayout.horizontalOverflow ||
    !desktop.heroLoaded ||
    !desktop.profileLoaded ||
    english.lang !== "en"
  ) {
    process.exit(1);
  }
})();
