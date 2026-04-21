# Betaroo RN Test Task

React Native + TypeScript project for the Betaroo mobile test assignment.

## Current Status

- Project baseline cleanup
- Single app shell route in `app/index.tsx`
- Token refactor

## Run

```bash
npm install
npm run ios
```

Alternative:

```bash
npm start
```

## Token Architecture

The token system is organized for scalability and type safety:

```txt
tokens/
  index.ts
  primitives/
    colors.ts
    spacing.ts
    radius.ts
    shadows.ts
    typography.ts
  semantic/
    dark.ts
    light.ts
    index.ts
```

- `primitives`: raw, reusable values (palette, spacing scale, radii, shadows, typography)
- `semantic`: usage-oriented theme tokens (`background`, `text`, `border`, `state`, etc.)
- `index.ts`: clean public API for token imports

## Notes

- No external UI library is used for core UI.
- Styling is intended via `StyleSheet.create`.
- Current branch focus: baseline + token foundation before component implementation.
