# Rizz Pharma Landing Page

Hey there! This is the landing page for Rizz Pharma, built with React, TypeScript, and Mantine UI.

## What's This About?

This is a modern, responsive pharmaceutical e-commerce landing page featuring:

- Beautiful hero sections with custom backgrounds
- Product catalogs with filtering
- Testimonials carousel
- Mobile-friendly navigation with a drawer menu
- Smooth scroll effects and animations
- HIPAA compliance badges and proper footer info

## Getting Started

### Prerequisites

You'll need Node.js (v18 or higher recommended) and Yarn installed on your machine.

### Installation

1. Clone this repo
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Copy `.env.example` to `.env` and update with your API URL:

   ```bash
   cp .env.example .env
   ```

4. Fire it up:

   ```bash
   yarn dev
   ```

The site should now be running at `http://localhost:5173` 🎉

## Project Structure

```
src/
├── api/           # API client and types
├── assets/        # Images, fonts, logo
├── components/
│   ├── Home/      # Hero section components
│   ├── landing/   # Main landing page components
│   ├── layout/    # Page shell, navbar, footer
│   │   └── nav/   # Navigation sub-components
│   └── ui/        # Reusable UI components
├── pages/         # Page components
├── static-const/  # Constants and static data
├── styles/        # Global styles and theme
└── utils/         # Helper utilities
```

## Key Features

### Responsive Design

- Mobile-first approach with Mantine's responsive props
- Different layouts for mobile and desktop
- Touch-friendly navigation on mobile devices

### Performance

- Optimized images with different versions for mobile/desktop
- Lazy loading and code splitting where possible
- Blur effects and smooth transitions

### API Integration

- Vite proxy setup for development
- Environment-based API configuration
- TypeScript types for all API responses

## Building for Production

```bash
yarn build
```

The built files will be in the `dist` directory, ready to deploy!

### Build Optimization

The build is configured to split code into smaller chunks:

- React and ReactDOM are bundled separately
- Mantine core and hooks are split into their own chunks
- Icons are bundled together
- This improves initial load time and allows better caching

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Mantine v8** - Component library
- **Axios** - HTTP client
- **React Icons** - Icon library

## Development Tips

- **Global styles** are in `src/index.css` - we've consolidated most repeated styles here
- **Theme configuration** is in `src/styles/theme.ts`
- **CSS variables** are defined in `index.css` for borders, backgrounds, blur values, etc.
- The navbar shows a subtle background when you scroll past 20px - check `PageShell.tsx`

## Environment Variables

- `VITE_API_TARGET` - Backend API URL (defaults to production if not set)

## Common Tasks

### Adding a new page

1. Create a component in `src/pages/`
2. Add it to your router (if using one)
3. Import in `App.tsx`

### Modifying the navbar

Navigation items are defined in `src/components/layout/nav/navData.ts`

### Changing colors/theme

Check out `src/styles/theme.ts` and the CSS variables in `src/index.css`

## Need Help?

If something's not working:

1. Make sure all dependencies are installed (`yarn install`)
2. Check that your `.env` file has the correct API target
3. Clear your browser cache and restart the dev server
4. Check the browser console for any errors

---

Built with ❤️ by Devvify
