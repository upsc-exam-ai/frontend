# UPSC Prep AI — Project Conventions

These rules apply to everyone working on this project. They exist to keep the codebase consistent, maintainable, and easy to reason about. Follow them strictly. If you believe a rule needs changing, discuss it first — don't just break it silently.

---

## 1. Tech Stack — What We Use

| Concern | Choice | Reason |
|---|---|---|
| Framework | React 19 + Vite | Fast DX, modern defaults |
| Language | JSX only (no TypeScript) | Simplicity for this project |
| Routing | `react-router-dom` | Standard, already set up |
| Icons | `lucide-react` | Lightweight, consistent stroke style |
| Styling | Plain `.css` files | Full control, no framework opinions |
| State | React Context + hooks | No Redux needed at this scale |

**Nothing else gets added without discussion.** No Tailwind, no MUI, no styled-components, no Redux, no Zustand.

---

## 2. Folder Structure — The Rules

```
src/
├── assets/              # Static files only (images, SVGs not from lucide)
├── styles/              # Global styles only — reset, variables, global
├── components/
│   └── common/          # ONLY components shared across 2+ views
├── views/
│   └── ViewName/
│       ├── ViewName.jsx
│       ├── ViewName.css
│       └── components/  # Components used ONLY in this view
├── hooks/               # All custom hooks — one file per hook
├── context/             # React Context providers — one file per context
└── services/
    └── ServiceName/     # One folder per service
```

### Rules

- **`components/common/`** is for components that are genuinely shared across multiple views (e.g., `Sidebar`, `Header`, `Button`). If a component is only used in one view, it belongs inside `views/ViewName/components/`.
- **Never** create components directly in `src/components/` without putting them in `common/`. The flat root level is reserved for `assets/`, `styles/`, etc.
- **Every component lives in its own folder**: `ComponentName/ComponentName.jsx` + `ComponentName/ComponentName.css`. No component files floating at the folder level.
- **One component per file**. Never export two components from the same file.
- **Hooks and components must be in separate files** — Vite's Fast Refresh breaks if a file exports both. Hooks go in `src/hooks/`, components in their component folder.

---

## 3. Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `ChatWindow.jsx` |
| Component folders | PascalCase | `ChatWindow/` |
| Hook files | camelCase, `use` prefix | `useChat.js` |
| Service files | camelCase | `chatService.js` |
| Service folders | PascalCase | `ChatService/` |
| CSS classes | BEM | `.chat-window__bubble--ai` |
| CSS variables | kebab-case, descriptive prefix | `--color-text-muted` |
| Context files | PascalCase | `ChatContext.jsx` |

---

## 4. CSS Rules

### Always
- Write styles in the **co-located `.css` file** for that component — never in another component's file.
- Use **CSS custom properties** from `src/styles/variables.css` for all colors, spacing, font sizes, radii, and transitions.
- Use **BEM naming**: `.block__element--modifier`.
- Import the co-located CSS at the **top of the JSX file**: `import './ComponentName.css'`.

### Never
- No **Tailwind** or any utility-class framework.
- No **inline styles** in JSX (`style={{ ... }}`). The only historical exception is `display: none` on hidden inputs — even that should now be a CSS class.
- No **hardcoded hex values** in CSS. Every color must reference a variable: `var(--color-text-primary)`, not `#111111`.
- No **`!important`**.
- No **CSS-in-JS** (styled-components, emotion, etc.).
- No **global class names** that aren't in `global.css`. All component styles must be scoped via BEM block names.

### Variables reference
All design tokens live in `src/styles/variables.css`. Before adding a new hardcoded value anywhere, check if a variable already exists. If the value will be used more than once, add a variable.

---

## 5. Component Rules

- Components are **function components** only. No class components.
- Props that accept callbacks must be named `onXxx` (e.g., `onSend`, `onToggleSidebar`).
- A component should do **one thing**. If a component is handling layout, data fetching, and rendering all at once, split it.
- **No direct API calls inside components**. All network calls go through `src/services/`.
- **No `console.log` left in submitted code**. Use `// TODO:` comments to mark placeholder handlers.
- All interactive elements (`button`, `input`, `textarea`) must have an `aria-label` if they have no visible text.

---

## 6. Icons

- Use **`lucide-react`** for all icons. Import individual icons: `import { Menu } from 'lucide-react'`.
- Pass `size` as a prop to control dimensions: `<Menu size={20} />`. Do not set width/height via CSS on lucide icons.
- **No inline SVGs** in JSX. If an icon you need doesn't exist in lucide, check [lucide.dev](https://lucide.dev) — it almost certainly does.
- **No other icon libraries** (no Font Awesome, no react-icons, no MUI icons).

---

## 7. State Management

- Use **`useState`** for state that belongs to a single component.
- Use **React Context** for state shared across multiple components/views. One context per concern (e.g., `ChatContext` for chat messages, not one giant global context).
- **Never put hooks and their context in the same file.** Context provider goes in `src/context/`, its consuming hook goes in `src/hooks/`.
- **No Redux, no Zustand, no MobX** — not needed at this scale.
- Use `crypto.randomUUID()` for generating IDs. Never use module-level counters or `Math.random()`.
- Initialize state with a **function** when the initial value is non-trivial: `useState(() => computeInitial())`.

---

## 8. Services

- All API/network calls are made inside `src/services/ServiceName/serviceName.js`.
- Services export **plain async functions** — not hooks, not classes.
- During development, mock responses live in the service file with a `// TODO: replace with real API` comment.
- When the real API is integrated, only the service file changes — no component files should need to be touched.

---

## 9. What Is Strictly Forbidden

The following will be rejected in code review:

- Tailwind classes in any file
- Hardcoded hex/rgb/hsl colors in CSS
- Inline `style={{}}` props on any element
- TypeScript (`.ts`, `.tsx` files)
- Importing from `@mui/material`, `@mui/icons-material`, or any other full UI framework
- Exporting a component and a hook from the same file
- Direct `fetch()` calls inside components
- `console.log` in committed code (use `// TODO:` instead)
- CSS class names that don't follow BEM
- Module-level mutable state (e.g., `let counter = 0` at the top of a module)
