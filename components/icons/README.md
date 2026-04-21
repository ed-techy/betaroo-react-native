# SVG Icon Conventions

- Keep reusable SVGs in `components/icons`.
- Keep brand/team marks in `components/logos`.
- Export all shared icons via `components/icons/index.ts`.
- Export all logos via `components/logos/index.ts`.
- Prefer icon names by usage intent (for example `SelectTriggerBasketballIcon`).
- If an icon has multiple visual variants, create separate components instead of adding conditionals.
- Keep feature components free of inline SVG paths.
