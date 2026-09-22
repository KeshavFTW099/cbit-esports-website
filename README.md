# CBIT Esports Official Website

The official website for **CBIT Esports**, the premier collegiate esports and competitive gaming organization of **Chaitanya Bharathi Institute of Technology (CBIT)**, Gandipet, Hyderabad.

---

## Overview

Designed with an original, human-crafted, matte-black aesthetic, warm gold accents, and disciplined typography hierarchy inspired by minimalist editorial principles. The site serves as the official digital hub for campus tournaments, historic archives, publisher activations, community scrimmage circuits, and institutional affiliations.

### Key Highlights
- **Authentic Institutional Affiliation**: Clean dual branding featuring the official CBIT College Emblem and the CBIT Esports Crest sitting directly on the matte-black backdrop.
- **Introductory Video Showcase**: Faststart-optimized introductory showcase stream with custom controls and poster fallback.
- **Editorial Past Events Archive**: Year-based chronological timeline track (2025–2026) featuring authentic campus event photography, confirmed participant metrics (Monster × BGMI 128 players), and official partner brand logos (KRAFTON, Monster Energy, HP OMEN, INFINIX, Free Fire).
- **Mobile-First Responsive Engineering**: Meticulously tailored across 360px, 390px, 430px, 768px, 1024px, and 1440px with strict zero-horizontal-overflow guarantees.
- **Structured Data System**: Event and club schemas centralized in `src/data/` for streamlined seasonal archiving.

---

## Tech Stack
- **Framework**: React 19 + Vite 6
- **Routing**: React Router DOM v7
- **Styling**: Pure Vanilla CSS with design token variables (`tokens.css`, `global.css`)
- **Typography**: Inter (`wght@300;400;500;600;700;800`) with precise optical letter tracking
- **Assets**: Optimized WebP/PNG transparent graphics and Faststart MP4 media

---

## Getting Started

### Prerequisites
- Node.js 18+ or 20+ installed
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/KeshavFTW099/cbit-esports-website.git
cd cbit-esports-website

# Install dependencies
npm install

# Start local development server
npm run dev
```

The site will be available at `http://localhost:5173/`.

### Production Build
```bash
npm run build
npm run preview
```

---

## Project Structure
```
cbit-esports/
├── public/                     # Static media, transparent logos, event photos
│   ├── events/                 # Authentic campus event photography
│   ├── partners/               # Official partner brand logos (KRAFTON, OMEN, Monster, etc.)
│   ├── cbit-college-logo.png   # High-res authentic CBIT emblem
│   └── logo-transparent.png    # CBIT Esports crest
├── src/
│   ├── components/             # Reusable UI components (Header, Footer)
│   ├── data/                   # Structured event and club info archives
│   ├── pages/                  # Page routes (Home, PastEvents, Register, JoinUs, etc.)
│   └── styles/                 # CSS Design tokens and global resets
└── vite.config.js              # Vite configuration
```

---

## License & Attribution
Official web property of **CBIT Esports**, Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad. All rights reserved.
