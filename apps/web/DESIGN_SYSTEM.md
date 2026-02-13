# KodNest Premium Build System

A premium SaaS design system for B2C product quality. Calm, intentional, coherent, confident.

---

## Design philosophy

- **Calm, intentional, coherent, confident**
- Not flashy, not loud, not playful, not hackathon-style
- No gradients, no glassmorphism, no neon colors, no animation noise
- One mind designed it. No visual drift.

---

## Color system (max 4 colors)

| Role       | Token             | Value     | Usage                    |
|-----------|-------------------|-----------|--------------------------|
| Background| `--color-bg`      | `#F7F6F3` | Page, cards, inputs      |
| Primary   | `--color-text`    | `#111111` | Primary text             |
| Accent    | `--color-accent`  | `#8B0000` | Primary buttons, links   |
| Success   | `--color-success` | Muted green | Success states, badges |
| Warning   | `--color-warning` | Muted amber | Warnings, badges      |
| Border    | `--color-border`  | `#E0DED9` | Borders, dividers        |
| Muted     | `--color-muted`   | `#6B6B6B` | Secondary text           |

Use only these. No extra palette colors.

---

## Typography

- **Headings**: Serif font (`Source Serif 4`), large, confident, generous spacing
- **Body**: Sans-serif (`Source Sans 3`), 16–18px, line-height 1.6–1.8
- **Text blocks**: Max width `720px` for readability
- No decorative fonts, no random sizes

Tokens: `--font-serif`, `--font-sans`, `--text-heading-size`, `--text-heading-size-lg`, `--text-body-size`, `--text-body-max-width`, `--text-body-line-height`, `--text-heading-line-height`, `--text-heading-spacing`.

---

## Spacing system (strict scale)

Only these values: **8px, 16px, 24px, 40px, 64px**

Tokens: `--space-1` (8px), `--space-2` (16px), `--space-3` (24px), `--space-4` (40px), `--space-5` (64px).

Never use random spacing (e.g. 13px, 27px). Whitespace is part of the design.

---

## Global layout structure

Every page must follow this order:

1. **Top Bar** → 2. **Context Header** → 3. **Primary Workspace + Secondary Panel** → 4. **Proof Footer**

### Top Bar

- **Left**: Project name
- **Center**: Progress indicator (Step X / Y)
- **Right**: Status badge (Not Started / In Progress / Shipped)

### Context Header

- Large serif headline
- One-line subtext
- Clear purpose, no hype language

### Primary Workspace (70% width)

- Main product interaction
- Clean cards, predictable components, no crowding

### Secondary Panel (30% width)

- Step explanation (short)
- Copyable prompt box
- Buttons: Copy, Build in Lovable, It Worked, Error, Add Screenshot (calm styling)

### Proof Footer (persistent bottom)

Checklist: □ UI Built □ Logic Working □ Test Passed □ Deployed  
Each checkbox requires user proof input.

---

## Component rules

- **Primary button**: Solid deep red (`--color-accent`). **Secondary**: Outlined, border only.
- Same hover effect and border radius (`--radius`) everywhere.
- **Inputs**: Clean borders, no heavy shadows, clear focus state (accent ring).
- **Cards**: Subtle border, no drop shadows, balanced padding (`--space-3`).

Tokens: `--radius`, `--input-border`, `--input-focus-ring`, `--transition-duration`, `--transition-ease`.

---

## Interaction rules

- Transitions: **150–200ms**, **ease-in-out**. No bounce, no parallax.

---

## Error & empty states

- **Errors**: Explain what went wrong and how to fix it. Never blame the user.
- **Empty states**: Provide the next action. Never feel dead.

---

## File map

| Item              | Location |
|-------------------|----------|
| Design tokens     | `src/styles/design-tokens.css` |
| Global styles     | `src/styles/globals.css` |
| Layout & components | `src/components/design-system/` |
| Page shell        | `PageShell.tsx` composes TopBar, ContextHeader, WorkspaceLayout, ProofFooter |

---

## Usage

Import global styles in the root layout:

```ts
import "@/styles/globals.css";
```

Use the design system components from `@/components/design-system`. Compose pages with `PageShell` and the layout primitives; fill primary/secondary and proof items as needed.
