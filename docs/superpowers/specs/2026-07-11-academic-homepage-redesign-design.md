# Academic Homepage Redesign

## Objective

Redesign Mengfei Sun's bilingual academic homepage as a vertically scrolling research portfolio that communicates the intersection of gravitational-wave astrophysics and machine learning within the first screen. Preserve the existing content, external links, publication data, language switching, and static-site architecture.

## Chosen Direction

Use the approved "Research Observatory" visual direction: deep near-black navy surfaces, spectral cyan for navigation and scientific signals, and a restrained warm amber accent for waveform peaks. The page should feel like a precise scientific observatory interface rather than a science-fiction dashboard.

Typography combines a scholarly serif for major headings with a readable humanist sans serif for navigation, metadata, and body text. Effects remain restrained: fine grid lines, subtle texture, lightweight dividers, limited glow, and minimal card framing.

## Page Structure

The homepage remains one continuous vertical document:

1. A compact sticky header with identity, primary navigation, and language controls.
2. A hero section containing the profile photograph, name, research identity, concise introduction, research keywords, profile links, and one dominant compact-binary visualization.
3. Four numbered research directions arranged as an editorial list or a two-column grid on wide screens and a single column on narrow screens.
4. A scientific visual narrative containing three independent figures, each with a concise bilingual caption and a clear relationship to the adjacent research content.
5. A prominent publications portal showing the current publication count and linking to the existing publications page.
6. A concise contact section and footer.

The hero must not contain the entire page's information. Later content is revealed naturally through vertical scrolling.

## Scientific Image Set

All newly generated project images are saved as PNG files and contain no embedded explanatory text. Labels and explanations belong in HTML captions so they remain accurate, editable, bilingual, and accessible.

### Binary Neutron Star Tidal Evolution

A cinematic but physically grounded sequence from inspiral to tidal deformation and merger. The composition emphasizes spacetime-wave propagation, neutron-star deformation, and the transition toward the merger remnant without presenting unsupported internal detail.

### Multidetector Reconstruction

An observatory-scale scientific image connecting a compact-binary source to a geographically distributed detector network and reconstructed strain signals. The image communicates coherent inference across detectors without using a generic neural-network illustration.

### Equation of State Inference

A research-oriented composition linking neutron-star internal structure, tidal deformability, posterior contours, and equation-of-state constraints. The visual should read as a scientifically meaningful conceptual synthesis rather than a literal data figure.

## Publications Page

Retain the existing data-driven publication rendering and bilingual controls. Restyle the page to share the homepage typography, spacing, colors, header, and archive-like visual language. Publication entries remain readable list rows rather than isolated decorative cards.

## Responsive Behavior

On desktop, use a wide asymmetric hero and a restrained two-column research layout. On mobile, stack the portrait, identity, hero visual, research entries, scientific figures, publications portal, and contact actions in reading order. Navigation must remain usable without horizontal page overflow, and scientific images must crop intentionally rather than shrink into unreadable diagrams.

## Accessibility and Performance

Maintain the skip link, semantic headings, meaningful image alternative text, visible keyboard focus, reduced-motion behavior, and sufficient text contrast. Use responsive image sizing and avoid unnecessary duplicated backgrounds. Motion is limited to subtle waveform or reveal effects and is disabled when reduced motion is requested.

## Implementation Scope

Update the homepage markup, shared stylesheet, and shared JavaScript only where required by the approved layout. Update the publications markup only when necessary for shared navigation or presentation. Add the three generated PNG images under the existing image asset directory. Preserve publication records, external URLs, email address, bilingual copy, and publication-count behavior.

## Acceptance Criteria

The finished site must present a coherent vertical reading experience, clearly communicate the research identity within the first screen, integrate three scientifically meaningful new images, remain legible on desktop and mobile, preserve all current links and bilingual behavior, and keep the publications page visually consistent with the homepage.
