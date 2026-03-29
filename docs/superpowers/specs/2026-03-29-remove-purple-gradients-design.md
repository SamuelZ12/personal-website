# Remove Purple Gradients Design

## Goal

Remove the site's current purple/violet gradient branding and replace it with a neutral ink visual direction while preserving the existing layout, motion, and overall atmosphere.

## Context

The current purple look comes from a small set of shared accent tokens and effects:

- `src/app/globals.css` defines the violet accent palette through `--accent-primary`, `--accent-secondary`, and `--ring`.
- `src/app/globals.css` also applies those accent tokens in `::selection`, `.text-gradient`, `.glow-sm`, `.glow-md`, and `.text-shimmer`.
- `src/app/layout.tsx` uses accent-based ambient orbs in the page background.

Because these styles are centralized, the change should stay focused on the shared visual system rather than component structure.

## Chosen Direction

Use a quiet monochrome "neutral ink" palette.

- Replace violet accent tokens with slate and graphite values in both light and dark themes.
- Keep gradient-based effects where they add depth, but make them tonal instead of colorful.
- Keep the ambient background treatment, but change it from colored blobs to subtle neutral haze.

This preserves the site's polished feel without leaving obvious purple branding behind.

## Scope

### In Scope

- Update accent token values in `src/app/globals.css`.
- Re-tone accent-driven utilities so they use neutral ink shades.
- Update the background orb styling in `src/app/layout.tsx`.
- Preserve existing animations, spacing, layout, and component hierarchy.

### Out of Scope

- Changing typography, layout, content, or component structure.
- Refactoring unrelated gradient uses such as simple border fades that are not purple-coded.
- Introducing a new brand color beyond the neutral ink direction.

## File-Level Design

### `src/app/globals.css`

- Change the accent token comments and values from blue-violet to neutral ink / slate.
- Update `--ring` to match the new neutral accent tone.
- Keep `::selection`, `.text-gradient`, and `.text-shimmer`, but make them use low-contrast grayscale transitions.
- Keep glow utilities, but ensure they read as soft charcoal illumination rather than colorful glow.

### `src/app/layout.tsx`

- Keep the two existing ambient background shapes and their animation timing.
- Replace `bg-accent-primary/...` and `bg-accent-secondary/...` with restrained neutral overlays that blend into the current light and dark backgrounds.
- Preserve blur, positioning, and non-interactive behavior.

## Behavior And Data Flow

There is no functional behavior change. The page continues to read the same theme classes and utility classes; only the color values behind those utilities change.

## Error Handling And Risk

Primary risk is over-flattening the page and making it feel visually dead. To avoid that:

- Keep tonal gradients instead of removing every gradient entirely.
- Keep ambient background haze at low opacity so the page still has depth.
- Verify both light and dark themes still maintain contrast and readable hover/focus states.

## Testing

- Run `npm run lint`.
- Run `npm run build`.
- Manually verify the homepage in light and dark themes, focusing on the name shimmer, selection color, and background ambience.

## Implementation Notes

- This should be a small styling pass, not a redesign.
- If any purple remains after the shared token updates, search for hard-coded accent classes and convert only the remaining purple-specific instances.
