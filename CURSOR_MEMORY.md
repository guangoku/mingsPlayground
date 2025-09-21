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
- Assets: in `attached_assets/` or imported via Vite.

## Patterns

- Props first: data flows down, avoid unnecessary global state.
- Extract repeated UI into components.
- Keep files under ~300 lines; split when larger.

## Testing

- Use Vitest + React Testing Library.
- Unit tests for utilities.
- Behavior tests for important components.

## Process

- For big edits: propose a short "Change Plan" (goals, trade-offs).
- When a new convention is adopted, add it here with a short note.

## Project-Specific Patterns

### Component Organization

- **Feature-based folders**: Group related components in feature folders (e.g., `components/projects/`)
- **Feature co-location**: Keep related functionality together (constants, types, data, helpers in `lib/[feature]/`)
- **Clear separation**: General app constants/types in root `lib/`, feature-specific in `lib/[feature]/`

### Project Showcase Structure

- **Horizontal card layout**: Image on left, content on right for better space utilization
- **Tags system**: Additional metadata separate from main categories with bilingual support
- **Single color theme**: Consistent emerald color scheme across all project components
- **Tag-based filtering**: Filter projects by tags with category hiding when no matches
- **Bilingual tags**: Tags support both English and Chinese labels using constants

### Data Management

- **Feature modules**: Complete feature modules with constants, types, data, and helpers in `lib/[feature]/`
- **Type safety**: Enhanced interfaces with rich detail support for future modal/page features
- **Helper functions**: `getProjectById()`, `getProjectsByCategory()`, `searchProjects()` for data manipulation
- **Single import**: Import everything from `@/lib/projects` for project-related functionality
