# Academic Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved vertically scrolling Research Observatory homepage and add three scientifically meaningful PNG figures while preserving the existing bilingual and publication behavior.

**Architecture:** Keep the static HTML/CSS/JavaScript architecture. Recompose the homepage with semantic vertical sections, reuse the existing language and publication functions in `assets/js/main.js`, and express the new visual system through the shared stylesheet so the publications page remains consistent.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript, PNG assets, GitHub Pages.

## Global Constraints

- Preserve all publication records, external profile URLs, email address, bilingual copy, language switching, and publication-count behavior.
- Save newly generated project images only as PNG files under `assets/img/`.
- Use one continuous vertical reading order on desktop and mobile.
- Keep scientific explanations in editable HTML captions rather than embedding labels in generated images.
- Do not add runtime dependencies or a build step.

---

### Task 1: Generate the scientific image set

**Files:**
- Create: `assets/img/science-tidal-evolution.png`
- Create: `assets/img/science-multidetector-reconstruction.png`
- Create: `assets/img/science-eos-inference.png`

**Interfaces:**
- Consumes: the palette and scientific themes defined in the approved design specification.
- Produces: three landscape PNG assets referenced by the homepage visual narrative.

- [ ] **Step 1: Generate the tidal-evolution image**

Create a text-free, physically grounded binary-neutron-star inspiral and tidal-deformation scene in the approved navy, cyan, and amber palette.

- [ ] **Step 2: Generate the multidetector image**

Create a text-free observatory-scale composition linking a compact-binary source, multiple detectors, and reconstructed strain signals.

- [ ] **Step 3: Generate the equation-of-state image**

Create a text-free conceptual composition linking neutron-star internal structure, tidal deformability, posterior contours, and equation-of-state constraints.

### Task 2: Recompose the homepage markup

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: existing `data-lang`, `data-i18n`, `data-lang-switch`, `#cosmic-canvas`, and `#publication-count` hooks used by `assets/js/main.js`.
- Produces: semantic sections and figure markup styled by Task 3.

- [ ] **Step 1: Replace the hero structure**

Use a two-column hero with a compact identity block and a dedicated scientific visual panel. Retain the existing profile links and all language hooks.

- [ ] **Step 2: Convert research cards into an editorial index**

Keep the four existing research descriptions and order while adding short visual markers and a section introduction.

- [ ] **Step 3: Add the scientific narrative**

Reference the three new PNG files in independent `<figure>` elements with bilingual titles, captions, and accurate alternative text.

- [ ] **Step 4: Refine publications and contact markup**

Keep `#publication-count`, the publications link, the existing email address, and GitHub link while improving hierarchy and calls to action.

### Task 3: Implement the shared visual system

**Files:**
- Modify: `assets/css/styles.css`
- Modify: `publications.html`

**Interfaces:**
- Consumes: the semantic class names created in Task 2 and the existing publication cards rendered by `assets/js/main.js`.
- Produces: the responsive Research Observatory presentation shared by both pages.

- [ ] **Step 1: Define typography and tokens**

Replace the existing generic font stack and token set with scholarly serif and humanist sans stacks, navy/cyan/amber color variables, precise spacing, dividers, focus states, and restrained surfaces.

- [ ] **Step 2: Style vertical homepage sections**

Implement the sticky header, asymmetric hero, editorial research list, alternating scientific figures, publication portal, contact band, and footer without compressing the document into a single viewport.

- [ ] **Step 3: Restyle publication rows**

Present the generated publication entries as archive rows with clear year, title, metadata, and links while preserving the renderer's existing class names.

- [ ] **Step 4: Implement responsive behavior**

At `980px` and `700px`, stack content in reading order, keep the header usable, preserve readable captions, prevent horizontal overflow, and disable nonessential motion for reduced-motion users.

### Task 4: Version-control closeout

**Files:**
- Include: all files created or modified by Tasks 1-3.

**Interfaces:**
- Consumes: the completed static site and image assets.
- Produces: a committed and pushed `main` branch.

- [ ] **Step 1: Stage the scoped files**

```powershell
git add -- index.html publications.html assets/css/styles.css assets/img/science-tidal-evolution.png assets/img/science-multidetector-reconstruction.png assets/img/science-eos-inference.png docs/superpowers/plans/2026-07-11-academic-homepage-redesign.md
```

- [ ] **Step 2: Commit the implementation**

```powershell
git commit -m "Redesign academic homepage"
```

- [ ] **Step 3: Push the current branch**

```powershell
git push origin main
```
