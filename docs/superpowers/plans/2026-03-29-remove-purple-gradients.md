# Neutral Ink Gradient Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the site's purple/violet gradients and replace them with a restrained neutral-ink palette without changing layout, content, or motion.

**Architecture:** Update the shared accent tokens and gradient utilities in `src/app/globals.css` so accent-driven UI elements automatically inherit the new monochrome look. Then retone the two ambient background orbs in `src/app/layout.tsx` so the page keeps its atmospheric depth without the current purple branding.

**Tech Stack:** Next.js 14, React 18, Tailwind CSS, next-themes, TypeScript

---

## File Map

- Modify `src/app/globals.css:30-39` to replace the light-theme accent tokens and ring color.
- Modify `src/app/globals.css:74-83` to replace the dark-theme accent tokens and ring color.
- Modify `src/app/globals.css:101-164` to retone selection, gradient text, glow, and shimmer utilities.
- Modify `src/app/layout.tsx:58-68` to swap the ambient purple orbs for neutral haze.
- Verify `src/components/header.tsx:8-11` to confirm the name shimmer still reads clearly with the new tonal highlight.
- Verify `src/components/contact.tsx:30` to confirm hover states inherit the neutral accent instead of purple.

### Task 1: Refresh Shared Accent Tokens

**Files:**

- Modify: `src/app/globals.css:30-39`
- Modify: `src/app/globals.css:74-83`
- Modify: `src/app/globals.css:101-164`
- Verify: `src/components/header.tsx:8-11`
- Verify: `src/components/contact.tsx:30`

- [ ] **Step 1: Capture the current purple touchpoints**

```bash
rg -n "accent-primary|accent-secondary|text-gradient|text-shimmer|glow-sm|glow-md" src/app/globals.css src/components/header.tsx src/components/contact.tsx
```

Expected: matches in `src/app/globals.css`, one `text-shimmer` usage in `src/components/header.tsx`, and one `hover:bg-accent-primary/10` usage in `src/components/contact.tsx`.

- [ ] **Step 2: Replace the shared accent palette with neutral ink values**

```css
/* Accent colors - neutral ink */
--accent-primary: 215 12% 28%;
--accent-secondary: 215 10% 46%;

--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;

--border: 210 15% 90%;
--input: 210 15% 90%;
--ring: 215 12% 28%;
```

```css
/* Accent colors - neutral ink */
--accent-primary: 210 8% 72%;
--accent-secondary: 215 8% 58%;

--destructive: 0 62.8% 30.6%;
--destructive-foreground: 210 20% 98%;

--border: 220 15% 18%;
--input: 220 15% 18%;
--ring: 210 8% 72%;
```

```css
/* Selection color with accent */
::selection {
  background: hsl(var(--accent-primary) / 0.18);
  color: hsl(var(--foreground));
}
```

```css
.text-gradient {
  background: linear-gradient(
    135deg,
    hsl(var(--foreground)) 0%,
    hsl(var(--accent-secondary)) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glow-sm {
  box-shadow: 0 0 20px -5px hsl(var(--accent-primary) / 0.16);
}

.glow-md {
  box-shadow: 0 0 40px -10px hsl(var(--accent-primary) / 0.22);
}

.text-shimmer {
  background: linear-gradient(
    120deg,
    hsl(var(--foreground)) 0%,
    hsl(var(--foreground)) 38%,
    hsl(var(--accent-secondary)) 50%,
    hsl(var(--foreground)) 62%,
    hsl(var(--foreground)) 100%
  );
  background-size: 300% 100%;
  background-position: 100% 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-position 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
```

- [ ] **Step 3: Verify the old violet values are gone**

```bash
rg -n "250 75% 55%|280 65% 50%|250 85% 65%|280 75% 60%|blue-violet" src/app/globals.css
```

Expected: no output.

- [ ] **Step 4: Commit the shared palette refresh**

```bash
git add src/app/globals.css
git commit -m "refine site accents with neutral ink palette"
```

### Task 2: Retone The Ambient Background Orbs

**Files:**

- Modify: `src/app/layout.tsx:58-68`
- Verify: `src/app/page.tsx:7-19`

- [ ] **Step 1: Confirm the current orb classes are accent-driven**

```bash
rg -n "bg-accent-primary|bg-accent-secondary|gradient orb" src/app/layout.tsx
```

Expected: matches for the two orb comments and their `bg-accent-primary/10` and `bg-accent-secondary/8` classes.

- [ ] **Step 2: Replace the branded orbs with neutral haze**

```tsx
<div className='absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-foreground/[0.04] blur-3xl animate-glow-pulse dark:bg-foreground/[0.08]' />
<div
  className='absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-muted-foreground/[0.08] blur-3xl animate-glow-pulse dark:bg-muted-foreground/[0.12]'
  style={{ animationDelay: '2s' }}
/>
```

- [ ] **Step 3: Run lint after the layout update**

```bash
npm run lint
```

Expected: lint completes successfully with no new errors.

- [ ] **Step 4: Commit the ambient background update**

```bash
git add src/app/layout.tsx
git commit -m "soften homepage background ambience"
```

### Task 3: Verify The Neutral-Ink Refresh End-To-End

**Files:**

- Verify: `src/app/globals.css`
- Verify: `src/app/layout.tsx`
- Verify: `src/components/header.tsx:8-11`
- Verify: `src/components/contact.tsx:30`

- [ ] **Step 1: Run the production build**

```bash
npm run build
```

Expected: Next.js completes the production build successfully.

- [ ] **Step 2: Start the local dev server for visual review**

```bash
npm run dev
```

Expected: the dev server starts successfully and serves the site locally without CSS or Tailwind compilation errors.

- [ ] **Step 3: Verify the visual checklist in both themes**

```text
Light theme checklist:
- Drag-select body text and confirm the selection highlight reads as soft charcoal instead of purple.
- Hover the name in the header and confirm the shimmer is tonal gray, not violet.
- Confirm the top-right and bottom-left background haze reads as subtle smoke, not colored blobs.
- Hover a social button in the contact section and confirm the hover fill is neutral.

Dark theme checklist:
- Toggle dark mode and confirm the same interactions stay legible.
- Make sure the ambient haze remains low-contrast and does not bloom too brightly.
- Confirm there are no obvious purple artifacts anywhere on the homepage.
```

Expected: all checks pass and no purple gradients remain on the homepage.
