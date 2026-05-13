const translations = {
  zh: {
    navResearch: "研究方向",
    navPublications: "论文",
    navCv: "经历",
    navContact: "联系",
    filterAll: "全部",
    filterJournal: "期刊论文",
    filterPreprint: "预印本",
    emailMe: "发送邮件",
    source: "来源",
  },
  en: {
    navResearch: "Research",
    navPublications: "Publications",
    navCv: "CV",
    navContact: "Contact",
    filterAll: "All",
    filterJournal: "Journal Articles",
    filterPreprint: "Preprints",
    emailMe: "Email Me",
    source: "Source",
  },
};

const publications = [
  {
    year: "2026",
    title: "Detection of multiband lensed gravitational waves from dark matter halos with deep learning",
    venue: "Physical Review D 113, 103004 (2026)",
    date: "2026-05-04",
    authors: "Mengfei Sun, Jie Wu, Qianning Hu, et al.",
    url: "https://inspirehep.net/literature/3082430",
    doi: "https://doi.org/10.1103/p8jc-kgp2",
    arxiv: "https://arxiv.org/abs/2511.09107",
    type: "journal",
  },
  {
    year: "2025",
    title: "Probing globular clusters using modulated gravitational waves from binary black holes",
    venue: "arXiv preprint",
    date: "2025-08-06",
    authors: "Jie Wu, Yao Xiao, Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2957968",
    doi: "",
    arxiv: "https://arxiv.org/abs/2508.04021",
    type: "preprint",
  },
  {
    year: "2025",
    title: "Conditional autoencoder for generating binary neutron star waveforms with tidal and precession effects",
    venue: "Physical Review D 112, 084016 (2025)",
    date: "2025-10-07",
    authors: "Mengfei Sun, Jie Wu, Jin Li, et al.",
    url: "https://inspirehep.net/literature/2904243",
    doi: "https://doi.org/10.1103/kmlw-y7yw",
    arxiv: "https://arxiv.org/abs/2503.19512",
    type: "journal",
  },
  {
    year: "2025",
    title: "Effect of kick velocity on gravitational wave detection of binary black holes with space- and ground-based detectors",
    venue: "Physical Review D 112, 024040 (2025)",
    date: "2025-07-18",
    authors: "Jie Wu, Mengfei Sun, Xianghe Ma, Xiaolin Liu, Jin Li, Zhoujian Cao",
    url: "https://inspirehep.net/literature/2891228",
    doi: "https://doi.org/10.1103/2qg3-w39y",
    arxiv: "https://arxiv.org/abs/2502.13710",
    type: "journal",
  },
  {
    year: "2025",
    title: "Identification of stochastic gravitational wave backgrounds from cosmic strings using machine learning",
    venue: "Physical Review D 112, 064081 (2025)",
    date: "2025-09-26",
    authors: "Xianghe Ma, Borui Wang, Nan Yang, Jin Li, Brendan McCane, Mengfei Sun, et al.",
    url: "https://inspirehep.net/literature/2885988",
    doi: "https://doi.org/10.1103/jvkp-kvpk",
    arxiv: "https://arxiv.org/abs/2502.11804",
    type: "journal",
  },
  {
    year: "2026",
    title: "Constraints and detection capabilities of GW polarizations with space-based detectors in different TDI combinations",
    venue: "Classical and Quantum Gravity 43, 065017 (2026)",
    date: "2026-03-27",
    authors: "Jie Wu, Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2846127",
    doi: "https://doi.org/10.1088/1361-6382/ae5144",
    arxiv: "https://arxiv.org/abs/2411.03631",
    type: "journal",
  },
  {
    year: "2023",
    title: "Parameter Estimation for Intermediate-Mass Binary Black Holes through Gravitational Waves Observed by DECIGO",
    venue: "arXiv preprint",
    date: "2023-12-13",
    authors: "Mengfei Sun, Jin Li",
    url: "https://inspirehep.net/literature/2736646",
    doi: "",
    arxiv: "https://arxiv.org/abs/2312.07834",
    type: "preprint",
  },
  {
    year: "2024",
    title: "Deep learning forecasts of cosmic acceleration parameters from DECi-hertz Interferometer Gravitational-wave Observatory",
    venue: "Astronomy & Astrophysics 682, A177 (2024)",
    date: "2024-02-21",
    authors: "Mengfei Sun, Jin Li, Shuo Cao, Xiaolin Liu",
    url: "https://inspirehep.net/literature/2683912",
    doi: "https://doi.org/10.1051/0004-6361/202347221",
    arxiv: "https://arxiv.org/abs/2307.16437",
    type: "journal",
  },
];

let currentLang = localStorage.getItem("site-lang") || "zh";
let currentFilter = "all";

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
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  if (!list) return;

  const filtered = publications
    .filter((publication) => currentFilter === "all" || publication.type === currentFilter)
    .sort((a, b) => b.date.localeCompare(a.date));

  list.innerHTML = filtered
    .map((publication) => {
      const links = [
        publication.url ? `<a href="${publication.url}" target="_blank" rel="noreferrer">INSPIRE</a>` : "",
        publication.doi ? `<a href="${publication.doi}" target="_blank" rel="noreferrer">DOI</a>` : "",
        publication.arxiv ? `<a href="${publication.arxiv}" target="_blank" rel="noreferrer">arXiv</a>` : "",
      ]
        .filter(Boolean)
        .join("");

      const dateLabel = currentLang === "zh" ? "发表/预印本日期" : "Publication/preprint date";
      const sourceLabel = translations[currentLang].source;

      return `
        <article class="publication-card" data-type="${publication.type}">
          <div class="publication-year">${publication.year}</div>
          <div>
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-meta">${publication.authors}</p>
            <p class="publication-meta">${publication.venue} · ${dateLabel}: ${publication.date} · ${sourceLabel}: INSPIRE</p>
          </div>
          <div class="publication-links">${links}</div>
        </article>
      `;
    })
    .join("");
}

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    renderPublications();
  });
});

setLanguage(currentLang);
