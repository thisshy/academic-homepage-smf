const translations = {
  zh: {
    navResearch: "研究方向",
    navPublications: "论文",
    navContact: "联系",
    emailMe: "发送邮件",
    date: "日期",
  },
  en: {
    navResearch: "Research",
    navPublications: "Publications",
    navContact: "Contact",
    emailMe: "Email Me",
    date: "Date",
  },
};

const publications = [
  {
    year: "2026",
    title: "Effects of Solar Wind Plasma Noise on Stochastic Gravitational Wave Background Searches with the LISA-Taiji Network",
    venue: {
      zh: "arXiv:2607.05368 (2026)",
      en: "arXiv:2607.05368 (2026)",
    },
    date: "2026-07-06",
    authors: "Mengfei Sun, Borui Wang, Jie Wu, Jin Li, Shengyi Ye",
    url: "https://inspirehep.net/literature/3177617",
    doi: "",
    arxiv: "https://arxiv.org/abs/2607.05368",
    type: "preprint",
  },
  {
    year: "2026",
    title: "Tests of general relativity using analytic derivatives of parametrized post-Einsteinian gravitational waveforms within the Fisher-matrix framework",
    venue: {
      zh: "arXiv:2607.04238 (2026)",
      en: "arXiv:2607.04238 (2026)",
    },
    date: "2026-07-05",
    authors: "Jie Wu, Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/3177550",
    doi: "",
    arxiv: "https://arxiv.org/abs/2607.04238",
    type: "preprint",
  },
  {
    year: "2026",
    title: "Constraining Kerr supermassive black hole properties using gravitational waves from inspiraling stellar-mass binary black holes",
    venue: {
      zh: "Physical Review D 113, 124024 (2026)",
      en: "Physical Review D 113, 124024 (2026)",
    },
    date: "2026-06-11",
    authors: "Jie Wu, Jintao Yao, Mengfei Sun, Jin Li, Zhoujian Cao",
    url: "https://inspirehep.net/literature/3167941",
    doi: "https://doi.org/10.1103/c4jy-7b9k",
    arxiv: "https://arxiv.org/abs/2606.12784",
    type: "journal",
  },
  {
    year: "2026",
    title: "Identifiability of g-mode Resonances in Eccentric Binary Neutron Stars with Multidetector Observations",
    venue: {
      zh: "arXiv:2606.11959; PRD 在投 (2026)",
      en: "arXiv:2606.11959; PRD under review (2026)",
    },
    date: "2026-06-10",
    authors: "Mengfei Sun, Jie Wu, Qianning Hu, et al.",
    url: "https://inspirehep.net/literature/3167665",
    doi: "",
    arxiv: "https://arxiv.org/abs/2606.11959",
    type: "preprint",
  },
  {
    year: "2026",
    title: "Detection of multiband lensed gravitational waves from dark matter halos with deep learning",
    venue: {
      zh: "Physical Review D 113, 103004 (2026)",
      en: "Physical Review D 113, 103004 (2026)",
    },
    date: "2026-05-04",
    authors: "Mengfei Sun, Jie Wu, Qianning Hu, et al.",
    url: "https://inspirehep.net/literature/3082430",
    doi: "https://doi.org/10.1103/p8jc-kgp2",
    arxiv: "https://arxiv.org/abs/2511.09107",
    type: "journal",
  },
  {
    year: "2026",
    title: "Constraints and detection capabilities of GW polarizations with space-based detectors in different TDI combinations",
    venue: {
      zh: "Classical and Quantum Gravity 43, 065017 (2026)",
      en: "Classical and Quantum Gravity 43, 065017 (2026)",
    },
    date: "2026-03-27",
    authors: "Jie Wu, Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2846127",
    doi: "https://doi.org/10.1088/1361-6382/ae5144",
    arxiv: "https://arxiv.org/abs/2411.03631",
    type: "journal",
  },
  {
    year: "2025",
    title: "Conditional autoencoder for generating binary neutron star waveforms with tidal and precession effects",
    venue: {
      zh: "Physical Review D 112, 084016 (2025)",
      en: "Physical Review D 112, 084016 (2025)",
    },
    date: "2025-10-07",
    authors: "Mengfei Sun, Jie Wu, Jin Li, et al.",
    url: "https://inspirehep.net/literature/2904243",
    doi: "https://doi.org/10.1103/kmlw-y7yw",
    arxiv: "https://arxiv.org/abs/2503.19512",
    type: "journal",
  },
  {
    year: "2025",
    title: "Identification of stochastic gravitational wave backgrounds from cosmic strings using machine learning",
    venue: {
      zh: "Physical Review D 112, 064081 (2025)",
      en: "Physical Review D 112, 064081 (2025)",
    },
    date: "2025-09-26",
    authors: "Xianghe Ma, Borui Wang, Nan Yang, Jin Li, Brendan McCane, Mengfei Sun, et al.",
    url: "https://inspirehep.net/literature/2885988",
    doi: "https://doi.org/10.1103/jvkp-kvpk",
    arxiv: "https://arxiv.org/abs/2502.11804",
    type: "journal",
  },
  {
    year: "2025",
    title: "Probing globular clusters using modulated gravitational waves from binary black holes",
    venue: {
      zh: "arXiv:2508.04021 (2025)",
      en: "arXiv:2508.04021 (2025)",
    },
    date: "2025-08-06",
    authors: "Jie Wu, Yao Xiao, Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2957968",
    doi: "",
    arxiv: "https://arxiv.org/abs/2508.04021",
    type: "preprint",
  },
  {
    year: "2025",
    title: "Effect of kick velocity on gravitational wave detection of binary black holes with space- and ground-based detectors",
    venue: {
      zh: "Physical Review D 112, 024040 (2025)",
      en: "Physical Review D 112, 024040 (2025)",
    },
    date: "2025-07-18",
    authors: "Jie Wu, Mengfei Sun, Xianghe Ma, Xiaolin Liu, Jin Li, Zhoujian Cao",
    url: "https://inspirehep.net/literature/2891228",
    doi: "https://doi.org/10.1103/2qg3-w39y",
    arxiv: "https://arxiv.org/abs/2502.13710",
    type: "journal",
  },
  {
    year: "2024",
    title: "Deep learning forecasts of cosmic acceleration parameters from DECi-hertz Interferometer Gravitational-wave Observatory",
    venue: {
      zh: "Astronomy & Astrophysics 682, A177 (2024)",
      en: "Astronomy & Astrophysics 682, A177 (2024)",
    },
    date: "2024-02-21",
    authors: "Mengfei Sun, Jin Li, Shuo Cao, Xiaolin Liu",
    url: "https://inspirehep.net/literature/2683912",
    doi: "https://doi.org/10.1051/0004-6361/202347221",
    arxiv: "https://arxiv.org/abs/2307.16437",
    type: "journal",
  },
  {
    year: "2023",
    title: "Parameter Estimation for Intermediate-Mass Binary Black Holes through Gravitational Waves Observed by DECIGO",
    venue: {
      zh: "arXiv:2312.07834 (2023)",
      en: "arXiv:2312.07834 (2023)",
    },
    date: "2023-12-13",
    authors: "Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2736646",
    doi: "",
    arxiv: "https://arxiv.org/abs/2312.07834",
    type: "preprint",
  },
];

let currentLang = localStorage.getItem("site-lang") || "zh";

function highlightAuthor(authors) {
  return authors.replaceAll("Mengfei Sun", '<strong class="author-self">Mengfei Sun</strong>');
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("site-lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.classList.toggle("lang-zh", lang === "zh");
  document.body.classList.toggle("lang-en", lang === "en");

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langSwitch === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });

  renderPublications();
  updatePublicationCount();
}

function updatePublicationCount() {
  const count = document.querySelector("#publication-count");
  if (count) count.textContent = publications.length;
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  if (!list) return;

  const filtered = publications.slice().sort((a, b) => b.date.localeCompare(a.date));

  list.innerHTML = filtered
    .map((publication) => {
      const links = [
        publication.url ? `<a href="${publication.url}" target="_blank" rel="noreferrer">INSPIRE</a>` : "",
        publication.doi ? `<a href="${publication.doi}" target="_blank" rel="noreferrer">DOI</a>` : "",
        publication.arxiv ? `<a href="${publication.arxiv}" target="_blank" rel="noreferrer">arXiv</a>` : "",
      ]
        .filter(Boolean)
        .join("");

      const venue = typeof publication.venue === "string" ? publication.venue : publication.venue[currentLang];
      const dateLabel = translations[currentLang].date;

      return `
        <article class="publication-card" data-type="${publication.type}">
          <div class="publication-year">${publication.year}</div>
          <div class="publication-content">
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-meta">${highlightAuthor(publication.authors)}</p>
            <p class="publication-venue">${venue} · ${dateLabel}: ${publication.date}</p>
          </div>
          <div class="publication-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

function initCosmicCanvas() {
  const canvas = document.querySelector("#cosmic-canvas");
  if (!canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const ctx = canvas.getContext("2d", { alpha: true });
  const pointer = { x: 0, y: 0, active: false };
  const hero = document.querySelector(".hero-section");
  let width = 0;
  let height = 0;
  let dpr = 1;
  let stars = [];
  let raf = 0;
  let start = performance.now();

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, Math.floor(rect.width));
    height = Math.max(1, Math.floor(rect.height));
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = width < 700 ? 70 : 140;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.7 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.14,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function drawParticles(time) {
    ctx.save();
    for (const star of stars) {
      const mousePull = pointer.active ? Math.max(0, 1 - Math.hypot(pointer.x - star.x, pointer.y - star.y) / 240) : 0;
      star.x += star.vx + mousePull * (pointer.x - star.x) * 0.002;
      star.y += star.vy + mousePull * (pointer.y - star.y) * 0.002;

      if (star.x < -20) star.x = width + 20;
      if (star.x > width + 20) star.x = -20;
      if (star.y < -20) star.y = height + 20;
      if (star.y > height + 20) star.y = -20;

      const pulse = 0.45 + Math.sin(time * 0.004 + star.phase) * 0.28 + mousePull * 0.6;
      ctx.beginPath();
      ctx.fillStyle = `rgba(132, 247, 255, ${Math.max(0.18, pulse)})`;
      ctx.arc(star.x, star.y, star.r + mousePull * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  function frame(now) {
    const time = now - start;
    ctx.clearRect(0, 0, width, height);
    drawParticles(time);
    raf = requestAnimationFrame(frame);
  }

  function startAnimation() {
    cancelAnimationFrame(raf);
    resize();
    start = performance.now();
    if (!reduceMotion.matches) raf = requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = event.clientX - rect.left;
    pointer.y = event.clientY - rect.top;
    pointer.active = true;

    if (hero) {
      const nx = (pointer.x / Math.max(1, rect.width) - 0.5) * 40;
      const ny = (pointer.y / Math.max(1, rect.height) - 0.5) * 40;
      hero.style.setProperty("--parallax-a-x", `${-nx * 0.18}px`);
      hero.style.setProperty("--parallax-a-y", `${-ny * 0.12}px`);
      hero.style.setProperty("--parallax-b-x", `${-nx * 0.28}px`);
      hero.style.setProperty("--parallax-b-y", `${-ny * 0.18}px`);
      hero.style.setProperty("--parallax-c-x", `${-nx * 0.36}px`);
      hero.style.setProperty("--parallax-c-y", `${-ny * 0.22}px`);
    }
  });
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
    if (hero) {
      ["--parallax-a-x", "--parallax-a-y", "--parallax-b-x", "--parallax-b-y", "--parallax-c-x", "--parallax-c-y"].forEach((name) => {
        hero.style.setProperty(name, "0px");
      });
    }
  });
  reduceMotion.addEventListener?.("change", startAnimation);

  startAnimation();
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

setLanguage(currentLang);
initCosmicCanvas();
