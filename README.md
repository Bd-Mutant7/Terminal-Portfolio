# 🖥️ Bd-Mutant7 — Terminal Cybersecurity Portfolio

> An interactive terminal-based portfolio website built for a cybersecurity student.  
> Simulates a real Unix shell environment with commands, education content, and project showcases.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Bd-Mutant7/terminal-portfolio)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖥️ **Terminal UI** | Authentic Unix terminal feel with CRT scanlines & matrix rain |
| ⌨️ **Command System** | 25+ commands with tab-autocomplete & command history |
| 🔐 **Cybersecurity Education** | Interactive `learn` command for OWASP, XSS, SQLi, Crypto & more |
| 📁 **Project Showcase** | Detailed project viewer with `ls projects` / `cat project <id>` |
| 🏆 **CTF History** | Competition results and platform links |
| 📊 **Skill Matrix** | Visual progress bars across languages, tools & domains |
| 🎓 **Certifications** | Learning path tracker with progress |
| 📱 **Mobile-Responsive** | Quick-command bar for touch devices |
| 🌧️ **Matrix Rain** | Toggle-able animated matrix background |
| ⚡ **Boot Sequence** | Realistic boot animation on first load |

---

## 🚀 Quick Deploy to Vercel

### Option 1 — Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Clone and deploy
git clone https://github.com/Bd-Mutant7/terminal-portfolio
cd terminal-portfolio
npm install
vercel

# For production
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to your GitHub account
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your `terminal-portfolio` repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Your site is live at `https://terminal-portfolio-xxx.vercel.app`

### Option 3 — One-click deploy button

Click the **Deploy with Vercel** button above ↑

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Type check
npx tsc --noEmit

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🎮 Terminal Commands

```
whoami              ─ Display identity card & stats
ls projects         ─ List all projects
cat project <id>    ─ View project details
skills              ─ View skill matrix with progress bars
ctf                 ─ CTF competition history
certs               ─ Certifications & learning roadmap
topics              ─ List cybersecurity topics
learn <topic>       ─ Study a topic (owasp, xss, sqli, recon, crypto, netpentesting)
contact             ─ Contact information
social              ─ Social media & platform links
matrix              ─ Toggle matrix rain effect
banner              ─ Redisplay ASCII banner
clear               ─ Clear the terminal
help                ─ Show all commands

# Easter eggs
sudo rm -rf /       ─ (try it 😉)
ssh <anything>      ─ Nice try
nmap                ─ Real nmap tips
ping <host>         ─ Mock ping
```

---

## 🗂️ Project Structure

```
terminal-portfolio/
├── src/
│   ├── components/
│   │   ├── Terminal.tsx          # Main terminal container
│   │   ├── TerminalInput.tsx     # Input with history & autocomplete
│   │   ├── TerminalHeader.tsx    # Title bar with controls
│   │   ├── OutputLine.tsx        # Colored output renderer
│   │   ├── MobileCommands.tsx    # Touch-friendly quick commands
│   │   └── BootSequence.tsx      # Boot animation
│   ├── data/
│   │   └── terminalData.ts       # All content: projects, skills, topics
│   ├── hooks/
│   │   └── useMatrixRain.ts      # Canvas matrix rain effect
│   ├── utils/
│   │   └── commandProcessor.ts   # Command parser & response logic
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # CRT effects, glows, animations
├── public/
│   └── favicon.svg
├── vercel.json                   # Vercel deployment config
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 Tech Stack

- **React 18** + **TypeScript** — Type-safe component architecture
- **Tailwind CSS** — Utility-first styling with custom terminal theme
- **Vite** — Lightning-fast build tooling
- **Canvas API** — Matrix rain animation
- **CSS Animations** — CRT scanlines, glow effects, typewriter

---

## 🔧 Customisation

Edit `src/data/terminalData.ts` to update:
- Your profile info, stats & bio
- Projects (add/remove from `PROJECTS` array)
- CTF competition history
- Skills and proficiency levels
- Certifications & learning path
- Cybersecurity topic content

---

## 📜 License

MIT — Free to use and modify for your own portfolio.

---

*Built with ❤️ and a healthy dose of terminal nostalgia.*
