# Portfolio Website

## Overview

This is a modern student portfolio website built to showcase creative work, skills, and projects. The application presents a personal brand through a visually engaging interface with sections for hero introduction, skills showcase, and projects gallery. The portfolio is designed for Alex Chen (as indicated in the meta tags) and emphasizes a clean, modern aesthetic drawing inspiration from platforms like Dribbble, Behance, Linear, and Notion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Stack

**React with TypeScript**: The application uses React 18+ with TypeScript for type safety and modern component development. The frontend is built with Vite as the build tool, providing fast hot module replacement during development.

**UI Component Library**: Utilizes shadcn/ui (New York style variant) built on Radix UI primitives. This provides a comprehensive set of accessible, customizable components including dialogs, dropdowns, cards, forms, and navigation elements. All UI components follow a consistent design system with proper accessibility support.

**Styling Approach**: Tailwind CSS serves as the utility-first CSS framework with custom design tokens defined in CSS variables. The design system includes:
- Custom color palette using HSL values for light/dark mode support
- Typography system using DM Sans (primary) and Space Grotesk (display/headings) fonts from Google Fonts
- Consistent spacing scale based on Tailwind's spacing units
- Custom border radius values and shadow definitions
- Elevation system for hover and active states

**State Management**: TanStack Query (React Query) handles server state management with configured defaults for query behavior, including disabled refetch on window focus and infinite stale time. The application uses a custom query client with standardized error handling.

**Routing**: Wouter provides lightweight client-side routing. Currently implements a simple route structure with a home page and 404 fallback.

**Theme System**: Custom dark/light mode implementation using localStorage persistence and CSS class toggling on the document root. Respects system preferences on initial load.

### Backend Stack

**Express Server**: Node.js server using Express 4.x with TypeScript. The server is configured to:
- Serve the built React application as static files
- Handle JSON and URL-encoded request bodies
- Log all API requests with timing information
- Support both development and production modes

**Development vs Production**: In development, the application uses Vite's dev server with middleware mode for HMR. In production, it serves pre-built static assets from the dist directory.

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. The server build bundles specific dependencies (like database drivers, auth libraries) to reduce cold start times while keeping others external.

### Data Layer

**Database ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definitions in TypeScript
- Type-safe query building
- Zod integration for runtime validation
- Migration support via drizzle-kit

**Schema Design**: Currently includes a basic users table with id, username, and password fields. The schema uses PostgreSQL-specific features like `gen_random_uuid()` for automatic ID generation.

**Storage Interface**: Implements a storage abstraction layer (IStorage interface) that supports:
- In-memory storage implementation (MemStorage) for development/testing
- Methods for user CRUD operations
- Easy swapping between storage backends

The in-memory implementation currently serves as a placeholder, allowing the application to run without a database connection during initial development.

### Design System

**Component Architecture**: All UI components follow the shadcn/ui pattern:
- Composition using Radix UI primitives
- Styled with Tailwind utilities
- Variants managed through class-variance-authority
- Forwarded refs for proper React patterns
- Consistent prop interfaces

**Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop viewports. Uses Tailwind's responsive utilities and a custom `useIsMobile` hook for JavaScript-based responsive logic.

**Accessibility**: Components include proper ARIA attributes, keyboard navigation support, and focus management through Radix UI primitives.

### Path Aliases

TypeScript path aliases configured for cleaner imports:
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`
- `@assets/*` maps to `attached_assets/*`

## External Dependencies

**UI & Styling**:
- Radix UI component primitives for accessible headless components
- Tailwind CSS for utility-first styling
- class-variance-authority for managing component variants
- clsx and tailwind-merge for conditional class handling
- Google Fonts (DM Sans, Space Grotesk) for typography

**Forms & Validation**:
- React Hook Form for form state management
- Zod for schema validation
- @hookform/resolvers for integrating Zod with React Hook Form

**Data Fetching**:
- TanStack Query (React Query) for server state management
- Native Fetch API for HTTP requests

**Database & ORM**:
- PostgreSQL as the target database (configured but not yet implemented)
- Drizzle ORM for database interactions
- pg driver for PostgreSQL connections
- drizzle-kit for migrations and schema management

**Development Tools**:
- Vite for build tooling and dev server
- esbuild for server bundling
- tsx for TypeScript execution in Node.js
- TypeScript for type checking
- Replit-specific plugins for development experience

**Icons**:
- Lucide React for icon components

**Session Management**:
- express-session (configured in dependencies)
- connect-pg-simple for PostgreSQL session storage

The application is structured to easily add authentication, API routes, and database persistence as development progresses, with the foundational architecture already in place.