# Kehinde Salimonu (KennyDev) — Developer Portfolio

A complete, high-performance, multi-page developer portfolio for **Kehinde Salimonu**, a Full-Stack Software Engineer & Platform Developer based in Nigeria. Built with React 19, Vite, React Router, GSAP, Framer Motion, and Tailwind CSS.

Re-engineered to reproduce the exact visual language, interaction choreography, typography, and section architecture of [KuipidDev](https://kuipiddev.vercel.app/): crisp canvas, dark slate/white typography, tactile surfaces, hairline dividers, rolling double-layer text links, sliding double-arrow hover buttons, rotating icon blocks, smooth route transitions, and **first-class Light Theme and Dark Theme support**.

---

## 🌓 Light & Dark Theme Feature

- **Theme Persistence**: Remembers visitor preference using `localStorage` (`portfolio-theme`).
- **System Theme Detection**: Automatically matches the user's OS preference (`prefers-color-scheme`) on initial visit when no preference is saved.
- **One-Click Toggle**: Accessible geometric theme switch button (`FiSun` / `FiMoon`) positioned in the desktop navigation header and mobile navigation drawer.
- **Class-Based Tailwind Integration**: Configured with `darkMode: 'class'` and synchronized with `data-theme` and `color-scheme` metadata.
- **Cohesive Aesthetics**:
  - **Light Mode**: Crisp white canvas (`#ffffff`), dark slate typography (`#171717`), `#f7f7f7` surfaces, and `#e5e5e5` hairline dividers.
  - **Dark Mode**: Deep pitch obsidian canvas (`#0c0c0c`), bright white typography (`#ededed` / `#ffffff`), subtle dark card surfaces (`#141414`), and `#222222` dark borders. Buttons and interactive arrows invert smoothly with seamless transition choreography.

---

## 🧭 Site Structure & Pages

1. **Home (`/`)**:
   - **Typographic Hero**: "Hello, I’m Kehinde Salimonu" with massive stacked `ENGINEER+` and `DEVELOPER` headlines (`text-[60px] md:text-[154px] font-black uppercase tracking-[-.08em]`).
   - **Section 1 (Digital Solutions & Services)**: "Architecting digital solutions..." narrative, rolling "Contact Now" action, 6 service capability pillars with 45° rotating square icon boxes (`Backend & APIs`, `Frontend Engineering`, `System Design`, `Full-Stack Platforms`, `UI / UX Thinking`, `Product Architecture`), and hover-zoom portrait card with slide-up location pill ("Based in Nigeria • Available for hire").
   - **Section 2 (Projects)**: 2-column grid of production projects (`aspect-[4/3]`, hover zoom, project title, and rolling double-arrow "View Project" button).
   - **Section 3 (Work Experience & Some Numbers)**: Clean list of career milestones with right-aligned organization and dates, accompanied by an editorial numbers grid (`24/7`, `4.8/5`, `98%`, `35%+`, `10+`, `4`).
   - **Section 4 (Client Reviews)**: Interactive testimonial slider with square prev/next navigation controls and authentic recommendations.

2. **About (`/about`)**:
   - High-impact `I'M Kehinde Salimonu` hero header with grayscale portrait and introduction.
   - Dual actions: "Hire me" (rolling double-arrow button) and "View CV" (direct download).
   - Infinite horizontal tools ticker marquee (`REACT`, `NEXT.JS`, `TYPESCRIPT`, `NODE.JS`, `TAILWIND CSS`, `EXPRESS`, `MONGODB`, `POSTGRESQL`, `GSAP`...).
   - Detailed career history rows with interactive hover offsets, plus verified academic background (**B.Tech. in Computer Science & Engineering, LAUTECH**).

3. **Services (`/services`)**:
   - "What's Available?" header with sticky "Choose Services" left sidebar.
   - Interactive accordion list with numbered service rows (`[ 01 ]`, `[ 02 ]`...).
   - Detailed breakdown per service: scope of work, key deliverables checklist, tech stack, and dedicated "Inquire About This" rolling action.

4. **Projects (`/projects`)**:
   - "Featured Projects" header with category tag filter pills (`All Projects`, `Full-Stack`, `Next.js`, `TypeScript`, `Node.js`, `Tailwind`, `MongoDB`, `Paystack`, `AI`).
   - Complete 2-column project showcase with image hover zoom and direct case study links.
   - Empty state fallback with one-click filter reset.

5. **Project Details (`/projects/:slug`)**:
   - Dedicated routes for each production project:
     - `/projects/lappytech` — LappyTech E-Commerce
     - `/projects/impact-clm` — Impact CLM Church Platform & CMS
     - `/projects/free-tcf` — Free TCF Exam Preparation
     - `/projects/askkenny` — AskKenny AI Conversational Assistant
   - Metadata spec grid: Role, Client / Domain, Measured Outcome, and Status badge.
   - Live external links ("Live site", "GitHub") and "Discuss a similar build" CTA.
   - Full-width hero screenshot, project challenge & overview, architectural highlights, engineering stack details, and previous/next project pagination.

6. **Contact (`/contact`)**:
   - "Contact With Me" header.
   - Left column: Office Location (Lagos, Nigeria), Office Hours (Mon–Sun 9am–6pm WAT), Support Email, and Resume link.
   - Right column: Accessible validated inquiry form (Full Name, Email, Company, Website URL, Service, Budget, Message) with transparent pre-filled email draft and clipboard copy fallback.

7. **404 Not Found (`/404` and `*`)**:
   - Designed 404 page ("Lost In The Build", "404", "This Page Took A Wrong Turn") with routes back to Home and Projects.

---

## 🛠️ Stack & Dependencies

- **Framework**: React 19 + Vite 7
- **Routing**: React Router DOM 7 (with SPA rewrites configured for Vercel in `vercel.json`)
- **Animation**:
  - **GSAP 3 + ScrollTrigger + @gsap/react**: Section reveals, timeline triggers, and smooth micro-interactions.
  - **Framer Motion 12**: Page route transitions, category filters, and mobile drawer animations.
- **Styling**: Tailwind CSS 3 + Inter Google Fonts + custom CSS for rolling button effects and infinite marquee ticker.
- **Icons**: React Icons (Feather Icons pack).
- **Code Quality**: ESLint 8 (`react-app` standard, 0 errors, 0 warnings).

---

## 🚀 Development & Verification

### Install Dependencies
```sh
npm install
```

### Run Local Development Server
```sh
npm run dev
```

### Run ESLint Verification
```sh
npm run lint
```

### Production Build
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

---

## 🌐 Deployment Configuration

Direct URL loads, route refreshes, and deep links (such as `/projects/lappytech`) are routed to `index.html` via `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
