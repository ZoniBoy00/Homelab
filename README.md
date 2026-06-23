```text

  ╔══════════════════════════════════════════════╗
  ║          ⬡ HOMELAB DASHBOARD v3.2.0          ║
  ║     Private Infrastructure Dashboard         ║
  ╚══════════════════════════════════════════════╝

  root@homelab:~$ cat README.md

```

A cyber/terminal-themed dashboard for homelab services. Built with React 18, TypeScript, and Tailwind CSS 3.

---

## 🚀 Live Demo

Visit the live dashboard at: **`https://homelab.cfd/readme`**

---

## Services

| Service | Address | Description |
|---------|---------|-------------|
| Jellyfin | `jelly.homelab.cfd:443` | Media streaming · movies, TV series & music |
| UptimeMon | `uptime.homelab.cfd:443` | Service monitoring · real-time status & latency |
| CasaOS | `casa.homelab.cfd:443` | Server management · system control & apps |
| Twitch Drops | `twitch-drops.homelab.cfd:443` | AFK drop miner · auto-claim Tarkov drops |
| Byte Dashboard | `byte.homelab.cfd:443` | AI assistant dashboard · Hermes agent control |

## Features

### 🔧 UI & Visuals
- **Matrix rain** canvas background with katakana + ASCII
- **CRT scanlines** + vignette overlay
- **Glitch text** title animation with dual-layer chromatic offset
- **Corner decorations** — quadrant border accents
- **Terminal window title bar** with macOS-style traffic light dots
- **SVG icons** throughout

### ⚡ Dashboard
- **Typing animation** — terminal commands cycle automatically with typewriter effect
- **Live clock** + **uptime counter** (HH:MM:SS)
- **Simulated system stats** (CPU, RAM, DISK) with animated progress bars
- **Network activity** visualization with fluctuating frequency bars + RX/TX traffic
- **Live activity log** — themed entries cycling every 3–5s, fixed 200px height with scroll
- **Service ping** on hover (simulated latency)
- **Copy protocol** — click any address to clipboard
- **Keyboard shortcuts** — `J` Jellyfin · `U` Uptime · `C` CasaOS
- **Client-side error routing** — `/401`, `/404`, `/500`, `/502`, `/503` render themed React error components

### 🌐 README Page
- **Self-documenting** README page accessible at `/readme`
- **Themed interface** matching dashboard's cyber/terminal aesthetic
- **Live navigation** back to dashboard
- **Dark theme** with matrix rain background and CRT effects
- **Service overview** with technical specifications
- **Interactive controls** and keyboard shortcuts guide

### ⌨️ Error Pages
Client-side error pages as React components (themed with the same cyber/terminal style):
- **401** — `AccessDenied.tsx`
- **404** — `NotFound.tsx` (also fallback for unmatched routes including `/admin`, `/dashboard`, etc.)
- **500** — `ServerError.tsx`
- **502** — `BadGateway.tsx`
- **503** — `ServiceUnavailable.tsx`

**URL Structure:**
- `/` → Dashboard (after boot sequence)
- `/readme` → Self-documenting README page
- `/admin`, `/dashboard`, `/anything-else` → 404 error page with custom boot screen
- `/401`, `/404`, `/500`, `/502`, `/503` → Themed error pages with custom boot screens

All error pages use a shared `ErrorPage` base component with matrix rain, CRT effects, glitch error codes, and navigation actions. Custom boot screens for error routes with red theme and longer delay.

### 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript 5.9 |
| Build | Vite 8 |
| Styles | Tailwind CSS 3 |
| Analytics | @vercel/analytics |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the dashboard
Visit `http://localhost:5173/readme` to see the README page
Visit `http://localhost:5173/admin` to see the 404 error page with custom boot screen

## Build

```bash
npm run build    # tsc + vite build
npm run preview  # serve production build locally
```

## Deploy

Deploy to Vercel:

```bash
npx vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
The `vercel.json` handles SPA rewrites; `/404.html` from `public/` is auto-served on 404.

**Domain Setup:**
- Dashboard: `https://yourdomain.com/`
- README: `https://yourdomain.com/readme`
- Error pages: `https://yourdomain.com/404`, etc.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `J` | Open Jellyfin |
| `U` | Open UptimeMon |
| `C` | Open CasaOS |
| `D` | Open Twitch Drops |
| `B` | Open Byte Dashboard |

## Project Structure

```
src/
├── App.tsx                    # Root — boot screen, router, layout, shortcuts
├── main.tsx                   # Entry point with console easter egg
├── index.css                  # Tailwind directives, glitch animation, CRT utilities
├── components/
│   ├── common/                # Shared visual effects
│   │   ├── Icons.tsx              # SVG icon components (hexagon, play, bolt, check, ...)
│   │   ├── MatrixRain.tsx         # Canvas matrix rain background
│   │   ├── Scanlines.tsx          # CRT scanlines + vignette overlay
│   │   └── CornerDecorations.tsx  # Corner border accent marks
│   ├── layout/                # Structural layout components
│   │   ├── TerminalBar.tsx        # Terminal window title bar
│   │   ├── Header.tsx             # PGP badge, typing animation, glitch title, sys-info
│   │   ├── Footer.tsx             # Terminal prompt + session ID
│   │   └── KeyboardHint.tsx       # Floating keyboard shortcut indicator
│   ├── dashboard/             # Dashboard widgets
│   │   ├── BootScreen.tsx         # Linux systemd-style boot sequence
│   │   ├── ServiceCard.tsx        # Service link card with ping, clipboard, hover glow
│   │   ├── SystemStats.tsx        # CPU / RAM / DISK animated bars
│   │   ├── NetworkActivity.tsx    # Real-time network frequency visualization
│   │   ├── QuickLinks.tsx         # Quick-access tag links
│   │   └── ActivityLog.tsx        # Live-scrolling activity log feed
│   ├── error/                 # Error page components
│   │   ├── ErrorPage.tsx          # Base error page component (shared)
│   │   ├── ErrorBootScreen.tsx    # Custom boot screen for error routes
│   │   ├── NotFound.tsx           # 404 — Resource Not Found
│   │   ├── AccessDenied.tsx       # 401 — Access Denied
│   │   ├── ServerError.tsx        # 500 — Internal Server Error
│   │   ├── BadGateway.tsx         # 502 — Bad Gateway
│   │   └── ServiceUnavailable.tsx # 503 — Service Unavailable
│   └── readme/               # README page component
│       └── READMEPage.tsx        # Themed README page with navigation
├── hooks/
│   ├── useInterval.ts         # Stable setInterval hook
│   ├── useUptime.ts           # Live uptime counter hook
│   └── useTypingAnimation.ts  # Typewriter typing/deleting animation hook
├── data/
│   └── services.ts            # Service definitions, log messages, typing commands
└── types/
    └── index.ts               # Service, LogMessage, SystemStats interfaces

public/
├── 401.html                   # Minimal JS redirect → React error page
├── 404.html                   # Minimal JS redirect → React error page
├── 500.html                   # Minimal JS redirect → React error page
├── 502.html                   # Minimal JS redirect → React error page
└── 503.html                   # Minimal JS redirect → React error page

vercel.json                    # SPA rewrites configuration
.env.example                  # Environment variable template
```

## Git

```bash
git init
git add .
git commit -m "feat: upgrade to Vite 8.1.0 and strict TypeScript v3.2.0"
```

The project includes a `.gitignore` pre-configured for Node, Vite, and common OS/IDE artifacts. No `node_modules`, `dist/`, or build artifacts are tracked.

## Legacy

The original static HTML/CSS version is preserved in [`old/`](../old/) (outside this project).

---

## 🌐 README Page Features

The README page is accessible at `/readme` and provides:
- **Project overview** with cyber/terminal theme
- **Live navigation** back to dashboard
- **Service information** and quick links
- **Technical documentation** embedded in the UI
- **Dark theme** with matrix rain background matching the dashboard
- **Interactive controls** and keyboard shortcuts guide
- **Auto-updating copyright year** (`© {new Date().getFullYear()}`)

Visit `https://homelab.cfd/readme` to see it live!

---

```text
  root@homelab:~$ systemctl status — all systems nominal
```