const translations = {
  zh: {
    navAbout: "关于",
    navResearch: "研究",
    navPublications: "论文",
    navContact: "联系",
    ctaResearch: "查看研究",
    ctaPublications: "论文列表",
    filterAll: "全部论文",
    filterJournal: "期刊论文",
    filterPreprint: "预印本",
    source: "来源",
    date: "发表/预印本日期",
  },
  en: {
    navAbout: "About",
    navResearch: "Research",
    navPublications: "Publications",
    navContact: "Contact",
    ctaResearch: "Explore Research",
    ctaPublications: "Publications",
    filterAll: "All Publications",
    filterJournal: "Journal Articles",
    filterPreprint: "Preprints",
    source: "Source",
    date: "Publication/preprint date",
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
    summaryZh: "利用深度学习识别暗物质晕引起的多频段透镜化引力波信号，为复杂传播效应下的快速探测提供数据驱动方案。",
    summaryEn: "Uses deep learning to identify multiband lensed gravitational waves induced by dark matter halos, providing a data-driven route for fast detection under complex propagation effects.",
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
    summaryZh: "比较不同 TDI 组合下空间引力波探测器对引力波极化模式的约束能力，面向未来空间探测任务给出灵敏度评估。",
    summaryEn: "Compares the ability of different TDI combinations in space-based detectors to constrain gravitational-wave polarizations and assess future detection capability.",
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
    summaryZh: "构建条件自编码器生成包含潮汐和进动效应的双中子星波形，服务于快速波形建模和后续参数推断。",
    summaryEn: "Builds a conditional autoencoder for binary neutron star waveforms with tidal and precession effects, supporting fast waveform modeling and downstream inference.",
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
    summaryZh: "研究机器学习在宇宙弦随机引力波背景识别中的应用，面向随机背景信号的分类和探测问题。",
    summaryEn: "Applies machine learning to the identification of stochastic gravitational-wave backgrounds from cosmic strings, targeting classification and detection of background signals.",
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
    summaryZh: "利用双黑洞引力波的调制效应探测球状星团环境，为致密双星宿主环境研究提供新的观测途径。",
    summaryEn: "Uses modulated gravitational waves from binary black holes to probe globular cluster environments, offering an observational route to compact-binary host environments.",
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
    summaryZh: "分析 kick velocity 对双黑洞引力波探测的影响，连接空间和地面探测器的联合观测能力。",
    summaryEn: "Analyzes how kick velocity affects binary black hole gravitational-wave detection across space- and ground-based detectors.",
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
    summaryZh: "使用深度学习从 DECIGO 观测中预测宇宙加速参数，探索空间引力波标准警报在宇宙学约束中的应用。",
    summaryEn: "Uses deep learning to forecast cosmic acceleration parameters from DECIGO observations, exploring standard-siren cosmology with space-based gravitational waves.",
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
    summaryZh: "研究 DECIGO 对中等质量双黑洞并合的参数估计能力，面向未来空间引力波探测任务的快速推断需求。",
    summaryEn: "Studies DECIGO parameter-estimation capability for intermediate-mass binary black holes, targeting fast inference for future space-based gravitational-wave missions.",
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

      const typeLabel = publication.type === "journal"
        ? (currentLang === "zh" ? "期刊论文" : "Journal Article")
        : (currentLang === "zh" ? "预印本" : "Preprint");

      return `
        <article class="publication-card" data-type="${publication.type}">
          <div>
            <h3 class="publication-title">${publication.title}</h3>
            <p class="publication-meta">${publication.authors}</p>
            <p class="publication-meta">${publication.venue} · ${translations[currentLang].date}: ${publication.date}</p>
            <p class="publication-abstract">${currentLang === "zh" ? publication.summaryZh : publication.summaryEn}</p>
            <div class="publication-tags">
              <span>${publication.year}</span>
              <span>${typeLabel}</span>
              <span>${translations[currentLang].source}: INSPIRE</span>
            </div>
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

const menuButton = document.querySelector(".mobile-menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

setLanguage(currentLang);
