# Portfolio Design Guidelines

## Design Approach
**Reference-Based:** Drawing from modern portfolio platforms (Dribbble, Behance) combined with Linear's typography clarity and Notion's approachable organization. Creating a distinctive layout that breaks from traditional hero-centered portfolios.

## Typography System
- **Primary Font:** Inter or DM Sans (Google Fonts) - clean, modern sans-serif
- **Display Font:** Space Grotesk or Outfit for large headings - distinctive personality
- **Hierarchy:**
  - Hero name: text-6xl to text-7xl (display font, font-bold)
  - Section headings: text-4xl to text-5xl (display font, font-semibold)
  - Subsections: text-2xl to text-3xl (primary font, font-medium)
  - Body text: text-base to text-lg (primary font, font-normal, leading-relaxed)
  - Supporting text: text-sm (font-normal, slight transparency)

## Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20 (e.g., p-4, gap-8, mb-12, py-20)

**Container Strategy:**
- Main container: max-w-7xl mx-auto px-6
- Content sections: py-20 (desktop), py-12 (mobile)
- Grid gaps: gap-6 to gap-8

## Page Structure & Components

### Hero Section (Alternative Layout)
Split-screen asymmetric layout breaking traditional centered hero:
- Left 40%: Large display typography with name, title/tagline, and 2-3 word descriptors of skill areas
- Right 60%: Professional photo with subtle gradient overlay (NOT full-bleed)
- Height: min-h-screen with content vertically centered
- CTA buttons: "View Projects" (primary) + "Download Resume" (secondary) positioned at bottom-left
- Buttons with backdrop blur (backdrop-blur-md bg-opacity-20)

**Image:** Professional headshot or creative portrait, subtle vignette treatment, positioned right with organic shape mask or rounded-3xl

### Skills Showcase
Grid-based card system showing diverse competencies:
- Desktop: 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each card: Icon at top (Heroicons), skill name (text-xl font-semibold), proficiency indicator (progress bar or pill badges), brief description
- Card styling: Minimal borders, generous padding (p-6), subtle hover lift effect (translate-y-[-4px])
- Group skills by category with subtle section dividers

### Projects Gallery
Masonry-style or staggered grid (not uniform):
- Alternating card sizes for visual interest
- Each project card: Featured image placeholder, title (text-2xl), tech stack tags, short description (2-3 lines), "View Project" link
- Cards: rounded-2xl, padding p-6
- Image aspect ratios: Mix of 16:9, 4:3, and square for variety
- Hover state: Subtle scale and shadow increase

**Images:** 4-6 project screenshots/mockups, varied aspect ratios, placeholder indicates content type (web, design, code)

### About Section
Two-column layout (grid-cols-1 lg:grid-cols-2):
- Left: Narrative bio (max-w-prose), educational background, current focus areas
- Right: Interests/hobbies as icon cards (2x3 grid), personality highlights
- Timeline for education/experience with minimal line connections

### Contact Section
Centered, focused layout:
- Large heading (text-5xl): "Let's Connect"
- Email as prominent clickable element (text-3xl, underline decoration)
- Social links as icon row (GitHub, LinkedIn, Twitter) - large touch targets (w-12 h-12)
- Secondary: "Open to opportunities" badge or availability status
- Optional: Simple contact form with 3 fields (Name, Email, Message) in single column

### Footer
Minimal, single-row layout:
- Left: © Year + Name
- Center: Quick navigation links (About, Projects, Skills)
- Right: Back to top link
- Padding: py-8

## Component Library

**Cards:**
- Base: rounded-2xl, padding p-6 to p-8
- Borders: Subtle, 1px solid with low opacity
- Shadows: Minimal (shadow-sm) with hover enhancement (shadow-md)

**Buttons:**
- Primary: Larger size (px-6 py-3), rounded-full, font-semibold
- Secondary: Border style (border-2), same sizing
- Link style: Underline decoration on hover

**Badges/Tags:**
- Rounded-full, px-3 py-1, text-sm, font-medium
- Used for skills, tech stack, status indicators

**Icons:**
- Library: Heroicons (outline style for consistency)
- Sizes: w-6 h-6 for inline, w-8 h-8 for featured, w-12 h-12 for section headers

## Visual Rhythm
- Section spacing: Consistent py-20 between major sections
- Element spacing: mb-12 between section title and content
- Card grids: gap-8 for breathing room
- Vertical rhythm maintained through consistent use of mb-6, mb-8, mb-12

## Animations
Minimal, purposeful motion:
- Scroll-triggered fade-ins for sections (opacity + translate)
- Hover states: Subtle lift (translate) and shadow
- Page load: Staggered reveal of hero elements
- NO parallax, NO complex scroll animations

## Accessibility
- Focus states: Visible ring (ring-2) with offset
- Skip to content link
- Semantic HTML structure
- ARIA labels for icon-only buttons
- Sufficient text contrast (will be ensured with pale palette)

## Images Summary
**Hero:** 1 professional portrait (right-aligned, organic shape or rounded)
**Projects:** 4-6 project screenshots/mockups (varied sizes)
**About:** Optional personal photo or workspace image
**Skills:** Icon-based (no photos)

Total: 6-8 images for complete, polished portfolio