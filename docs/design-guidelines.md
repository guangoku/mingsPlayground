# Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from creative portfolio websites like Behance, Dribbble, and modern developer portfolios (Linear, Notion) to balance artistic expression with technical professionalism.

## Core Design Elements

### Color Palette

**Light Mode:**

- Primary: 220 85% 20% (deep blue for trust and professionalism)
- Secondary: 350 70% 55% (warm coral for artistic flair)
- Background: 220 15% 98% (soft off-white)
- Text: 220 25% 15% (rich dark blue-gray)

**Dark Mode:**

- Primary: 220 80% 70% (bright blue for visibility)
- Secondary: 350 65% 65% (soft coral accent)
- Background: 220 20% 8% (deep charcoal)
- Text: 220 15% 88% (warm light gray)

**Gradients**: Subtle diagonal gradients from primary to secondary colors for hero backgrounds and section dividers.

### Typography

- **Headers**: Inter (700-800 weight) for clean, modern impact
- **Body**: Inter (400-500 weight) for excellent readability
- **Code/Technical**: JetBrains Mono for code snippets and technical content

### Layout System

Primary Tailwind spacing units: **2, 4, 6, 8, 12, 16** (p-2, m-4, gap-6, h-8, etc.)

### Component Library

**Navigation**: Sticky header with language toggle, smooth scrolling navigation, and mobile hamburger menu with slide-out drawer

**Hero Section**: Large hero with animated typography, subtle particle effects, and professional headshot with artistic border treatment

**Blog System**:

- Card-based layout with category tags
- "Subway map" style tag connections showing related posts
- Search and filter functionality
- Reading time indicators

**Projects Gallery**:

- Masonry grid layout for varied image sizes
- Lightbox modal for detailed viewing
- Collection/series grouping with themed headers
- Zoom and pan capabilities for detailed artwork
- Category filtering (Art & Illustration, Graphic Novels, Tech Innovation, Social Impact)
- Like functionality for user engagement (future consideration)

**Resume Section**:

- Timeline-style layout for experience
- Skill visualization with progress indicators
- Downloadable PDF with matching design
- Interactive elements showing project details

### Accessibility Features

- High contrast ratios (4.5:1 minimum)
- Keyboard navigation for all interactive elements
- Screen reader optimized with proper ARIA labels
- Focus indicators with 2px blue outline
- Reduced motion options for animations
- Consistent dark mode across all form inputs

### Mobile-First Responsive Design

- Touch-friendly 44px minimum tap targets
- Swipe gestures for gallery navigation
- Collapsible sections for content organization
- Optimized image loading with progressive enhancement

### Animations

**Minimal and purposeful only:**

- Subtle fade-in on scroll for sections
- Smooth hover states for interactive elements
- Loading states for content transitions
- Page transition animations between sections

### Images

**Hero Image**: Large, artistic background image showcasing your creative work with gradient overlay for text readability

**Profile Images**: Professional headshot with creative border treatment, smaller artistic thumbnails throughout

**Gallery Images**: High-quality artwork and project screenshots with consistent aspect ratios where possible

**Blog Images**: Featured images for posts, icons for categories, and inline illustrations for technical content

The design balances your technical expertise with artistic sensibility, creating a professional yet playful experience that showcases your diverse skills while maintaining excellent usability and accessibility.

## Future Considerations

### User Engagement Features

**Like Functionality for Projects**:

- **Current Status**: Not implemented (low priority)
- **Purpose**: Allow visitors to show appreciation for specific projects
- **Technical Options Evaluated**:
  - **Local Storage**: Per-browser only, no global counts
  - **Firebase**: Real-time global counts, free tier available
  - **Supabase**: Open source alternative with PostgreSQL
  - **GitHub Gists**: Creative free solution using public gists
  - **Airtable**: Simple database with visual interface
  - **Google Sheets API**: Free spreadsheet-based solution
- **Decision**: Deferred for future consideration
- **Rationale**: Not critical for portfolio functionality, external dependencies add complexity
