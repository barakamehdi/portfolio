# SPEC.md - Developer Portfolio Specification

## 1. Project Overview

**Project Name**: Elite Portfolio - 42 Network Developer  
**Type**: Modern Developer Portfolio Website  
**Core Functionality**: Showcase technical projects and engineering mindset with premium, product-like experience  
**Target Users**: Tech recruiters, hiring managers, fellow developers

---

## 2. Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel-ready |

---

## 3. Design System

### Color Palette

```
--bg-primary: #0A0A0B (near black)
--bg-secondary: #111113 (card backgrounds)
--bg-tertiary: #1A1A1D (elevated surfaces)
--text-primary: #FAFAFA (white)
--text-secondary: #A1A1A6 (muted)
--text-tertiary: #52525B (subtle)
--accent: #22D3EE (cyan accent)
--accent-glow: rgba(34, 211, 238, 0.15)
--border: rgba(255, 255, 255, 0.08)
--gradient-start: #6366F1 (indigo)
--gradient-end: #22D3EE (cyan)
```

### Typography

- **Display/Headings**: Geist (via CDN)
- **Mono**: JetBrains Mono
- **Body**: System font stack (fallback)

### Layout

- **Max Width**: 1200px (centered)
- **Responsive**: Mobile, Tablet, Desktop
- **Spacing**: 4px base scale

---

## 4. Sections Overview

| Section | Key Features |
|---------|--------------|
| Hero | Animated mesh gradient, typewriter text, scroll indicator |
| About | Value-driven storytelling, animated cards |
| Projects | Scroll-driven switcher, animated previews, tech badges |
| Skills | Animated progress bars, category grid |
| Experience | Timeline view of 42 curriculum |
| Contact | Minimal links, resume download |

---

## 5. Animation Strategy

- **Scroll Progress**: Top bar indicates scroll position
- **Entrance**: Staggered fade-up on viewport entry
- **Hover**: Scale + border color transitions
- **Project Switcher**: Crossfade with scale animation

---

## 6. Project Structure

```
src/
├── app/
│   ├── layout.tsx      - Root layout with metadata
│   ├── page.tsx      - Main page with all sections
│   └── globals.css   - Design system & global styles
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       └── Contact.tsx
```

---

## 7. Running the Project

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start
```

---

## 8. Deployment (Vercel)

1. Push to GitHub
2. Connect repository to Vercel
3. Click Deploy
4. Custom domain available

---

## 9. Customization

Update content in each section component:
- **Hero.tsx**: Name, role, tagline
- **About.tsx**: Personal story
- **Projects.tsx**: Projects array with real links
- **Skills.tsx**: Skills array with levels
- **Experience.tsx**: 42 projects list
- **Contact.tsx**: Links and contact info

---

## 10. Performance Targets

| Metric | Value |
|--------|-------|
| Lighthouse | 90+ |
| FCP | < 1.5s |
| TTI | < 3s |
| CLS | < 0.1 |