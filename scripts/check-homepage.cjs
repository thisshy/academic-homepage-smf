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
  const publicationsUrl = pathToFileURL(path.join(root, "publications.html")).href;
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
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(qaDir, "desktop.png"), fullPage: true });

  const desktop = await page.evaluate(() => ({
    publications: document.querySelectorAll(".publication-card").length,
    hasPublicationPortal: Boolean(document.querySelector(".publication-portal")),
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    heroLoaded: document.querySelector(".hero-backdrop")?.complete || false,
    profileLoaded: document.querySelector(".identity-line img")?.complete || false,
    canvasPainted: (() => {
      const canvas = document.querySelector("#cosmic-canvas");
      if (!canvas) return false;
      const ctx = canvas.getContext("2d");
      const sample = ctx.getImageData(
        Math.floor(canvas.width * 0.25),
        Math.floor(canvas.height * 0.25),
        Math.max(1, Math.floor(canvas.width * 0.5)),
        Math.max(1, Math.floor(canvas.height * 0.5))
      ).data;
      for (let i = 3; i < sample.length; i += 4) {
        if (sample[i] > 0) return true;
      }
      return false;
    })(),
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
  await mobile.waitForTimeout(600);
  await mobile.screenshot({ path: path.join(qaDir, "mobile.png"), fullPage: true });

  const mobileLayout = await mobile.evaluate(() => ({
    width: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    publications: document.querySelectorAll(".publication-card").length,
    hasPublicationPortal: Boolean(document.querySelector(".publication-portal")),
  }));

  const publicationsPage = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await publicationsPage.goto(publicationsUrl, { waitUntil: "networkidle" });
  await publicationsPage.waitForTimeout(600);
  await publicationsPage.screenshot({ path: path.join(qaDir, "publications.png"), fullPage: true });
  const publicationsLayout = await publicationsPage.evaluate(() => ({
    publications: document.querySelectorAll(".publication-card").length,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    heading: document.querySelector(".publication-page-heading h1:not([data-lang='en'])")?.textContent || "",
  }));

  await browser.close();

  const result = {
    url,
    desktop,
    english,
    mobile: mobileLayout,
    publicationsPage: publicationsLayout,
    errors,
    mobileErrors,
    screenshots: ["qa/desktop.png", "qa/mobile.png", "qa/publications.png"],
  };

  console.log(JSON.stringify(result, null, 2));

  if (
    errors.length ||
    mobileErrors.length ||
    desktop.publications !== 0 ||
    !desktop.hasPublicationPortal ||
    publicationsLayout.publications !== 9 ||
    publicationsLayout.horizontalOverflow ||
    english.hasFilters ||
    english.hasCv ||
    desktop.horizontalOverflow ||
    mobileLayout.horizontalOverflow ||
    !mobileLayout.hasPublicationPortal ||
    !desktop.heroLoaded ||
    !desktop.profileLoaded ||
    !desktop.canvasPainted ||
    english.lang !== "en"
  ) {
    process.exit(1);
  }
})();
