# Shared interface styles

Update `app/design-system.css` to change the site's font family, type scale, brand colors, button dimensions, corner radii, and interaction states. `app/globals.css` uses these tokens for page layouts and semantic text roles. Adjust the responsive tokens rather than adding individual font sizes to pages.

Use `Button` from `components/ui/button.tsx` for actions and `ButtonLink` for navigation. Both share the same styles. Supported variants are `default` (green), `secondary` (dark), `inverse` (white), `outline`, `ghost`, `destructive`, and `link`. Use `size="icon"` with an accessible label for icon-only actions. Buttons default to `type="button"`; forms must explicitly use `type="submit"`.

Example:

```tsx
<ButtonLink href="/apply">Apply for accreditation</ButtonLink>
<Button variant="ghost" onClick={openMenu} aria-label="Open menu">...</Button>
```

Keep page-specific classes for placement and spacing. Use the shared variants for control colors, typography, height, and shape. Link destinations remain links, and native disclosure controls retain their keyboard behavior.
