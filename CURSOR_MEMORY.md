# Project Conventions (Living)

This file captures conventions that we follow (or adopt over time).  
Update when new patterns emerge.

## Non-negotiables

- Favor modularization: split code into small, composable parts.
- Use function components with hooks; avoid class components.
- TypeScript strict mode: no `any` unless justified.
- Tailwind for styling; shadcn/ui for primitives.

## Structure

- Pages: under `src/pages/`, each represents a route.
- Components: under `src/components/`, small and reusable.
- Utilities: under `src/lib/`, pure functions, no React imports.
- Assets: in `public/` or imported via Vite.

## Patterns

- Props first: data flows down, avoid unnecessary global state.
- Extract repeated UI into components.
- Keep files under ~300 lines; split when larger.

## Testing

- Use Vitest + React Testing Library.
- Unit tests for utilities.
- Behavior tests for important components.

## Process

- For big edits: propose a short “Change Plan” (goals, trade-offs).
- When a new convention is adopted, add it here with a short note.
