# Virtec Instruments – EM760 HVAC VFD Homepage

A modern, production-grade Next.js 15 homepage for Virtec Instruments' EM760 HVAC Inverter product line.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion** (via CSS animations in this version)
- **Lucide React** icons

## Design System

- **Primary color**: Yellow `#F5C200`
- **Background**: Deep charcoal `#1A1A2E`
- **Typography**: Bebas Neue (display) + DM Sans (body) + DM Mono (accents)
- **Aesthetic**: Industrial / brutalist-refined, dark theme

## Pages & Sections

### Home Page (`/`)
1. **Hero Section** – Full-viewport with animated particle canvas, ticker strip, diagonal accents
2. **Company Overview** – Stats counter, 6-feature grid, vision quote
3. **Featured Products** – Interactive product category cards, spec table
4. **Contact / CTA** – Contact channels + quote request form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Navbar & Footer
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles + CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with mobile menu
│   │   └── Footer.tsx    # Footer with links and contact
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CompanyOverview.tsx
│   │   ├── FeaturedProducts.tsx
│   │   └── ContactCTA.tsx
│   └── ui/
│       ├── Button.tsx    # Primary/outline/ghost button
│       ├── Badge.tsx     # Label badges
│       ├── Reveal.tsx    # Scroll-triggered reveal wrapper
│       └── StatCard.tsx  # Animated number counter
├── lib/
│   └── utils.ts          # cn() helper
└── types/
    └── index.ts          # Shared TypeScript types
```

## Contact

**Virtec Instruments Inc.**  
2005 E 2700 S, STE 200, Salt Lake City, UT 84109  
sales@virtec.us | +1 (304) 519-4567  
www.virtec.us
