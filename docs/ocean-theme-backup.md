# Ocean Theme Colors - Phase 2 Restoration

This document contains the original ocean theme colors that were used before Phase 1 changes.

## Light Mode Ocean Theme Colors

```css
/* Primary Colors */
--primary: 205 75% 45%; /* Ocean blue */
--primary-foreground: 190 60% 95%;

/* Secondary Colors */
--secondary: 190 60% 40%; /* Teal */
--secondary-foreground: 190 60% 95%;

/* Accent Colors */
--accent: 15 85% 55%; /* Coral accent */
--accent-foreground: 190 60% 95%;
```

## Dark Mode Ocean Theme Colors

```css
/* Primary Colors */
--primary: 205 60% 60%; /* Ocean blue */
--primary-foreground: 210 60% 8%;

/* Secondary Colors */
--secondary: 190 50% 50%; /* Teal */
--secondary-foreground: 210 60% 8%;

/* Accent Colors */
--accent: 15 75% 65%; /* Coral accent */
--accent-foreground: 210 60% 8%;
```

## Custom Ocean Tokens (Preserved)

These tokens are kept for the hero section and can be used for the full ocean theme:

```css
/* Light Mode */
--ocean: 205 75% 45%; /* Main ocean blue */
--deep-sea: 210 50% 18%; /* Deep ocean */
--teal: 190 60% 40%; /* Teal waters */
--foam: 190 60% 95%; /* Foam white */
--coral: 15 85% 55%; /* Coral accent */

/* Dark Mode */
--ocean: 205 60% 60%; /* Lighter ocean blue */
--deep-sea: 210 60% 8%; /* Very deep */
--teal: 190 50% 50%; /* Brighter teal */
--foam: 190 40% 15%; /* Dark foam */
--coral: 15 75% 65%; /* Bright coral */
```

## Hero Section Background

The hero section uses these gradients:

- Light: `linear-gradient(135deg, hsl(var(--deep-sea)) 0%, hsl(var(--ocean)) 100%)`
- Dark: `linear-gradient(135deg, hsl(210 60% 6%) 0%, hsl(205 60% 50%) 100%)`

## Restoration Instructions

To restore the ocean theme in Phase 2:

1. Replace the neutral primary colors with the ocean colors above
2. Update secondary and accent colors accordingly
3. The hero section will automatically use the ocean theme since it uses the custom ocean tokens
