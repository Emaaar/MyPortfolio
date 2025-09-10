## Portfolio Website

A modern, responsive portfolio built with Next.js and Tailwind CSS, featuring reusable UI components and dark mode support.

### Tech Stack
- **Language**: TypeScript
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18, Tailwind CSS v4, Radix UI primitives, shadcn-style components
- **Theming**: `next-themes`
- **Forms & Validation**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **Charts & Carousel**: `recharts`, `embla-carousel-react`
- **Icons**: `lucide-react`
- **Analytics**: `@vercel/analytics`

Note: The `package.json` includes some extra libraries (e.g., Vue, Svelte) that are not used by default. You can remove them if unnecessary.

### Getting Started
Requirements:
- Node.js 18+ (recommended 20+)
- npm or pnpm

Install dependencies:
```bash
# with npm
npm install

# or with pnpm
pnpm install
```

Run the development server:
```bash
# with npm
npm run dev

# or with pnpm
pnpm dev
```

Open `http://localhost:3000` in your browser.

Build for production:
```bash
# with npm
npm run build

# or with pnpm
pnpm build
```

Start the production server:
```bash
# with npm
npm start

# or with pnpm
pnpm start
```

### Scripts
- `dev`: Start Next.js in development mode
- `build`: Create an optimized production build
- `start`: Run the production server
- `lint`: Run Next.js ESLint

### Project Structure
```text
app/                # App Router pages, layouts, and routes
  globals.css       # Global Tailwind styles
  layout.tsx        # Root layout
  page.tsx          # Home page
components/         # Reusable UI components
  ui/               # Radix/shadcn-style UI primitives
hooks/              # React hooks
lib/                # Utilities (e.g., className helper)
public/             # Static assets (images, fonts)
styles/             # Additional global styles
```

### Styling
- Tailwind CSS v4 is configured via `postcss` plugins (`@tailwindcss/postcss`).
- Global styles live in `app/globals.css` and `styles/globals.css` (if used).

### Theming
- Dark/light mode is provided by `next-themes` (`ThemeProvider` in `components/theme-provider.tsx`).

### UI Components
- Built on Radix UI and shadcn-style components located under `components/ui`.

### Deployment
This project is optimized for deployment on Vercel.
```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy
vercel
```
Alternatively, any platform that supports Node.js can run the built output (`npm run build` then `npm start`).

### Customization
- Replace images in `public/` with your own assets.
- Update copy and sections in `app/page.tsx`.
- Customize theme and component styles via Tailwind classes.

### License
Add a `LICENSE` file if you intend to open-source. If unsure, keep it private.
