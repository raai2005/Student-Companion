# Landing Page

This folder contains all the components and data required for the landing page of the AI Study Companion App.

## Structure

- `cta.tsx` — Call to Action section component
- `features-data.ts` — Data for the features section (icons, titles, descriptions)
- `features.tsx` — Features section component
- `footer.tsx` — Footer component
- `hero.tsx` — Hero (main banner) section component
- `page.tsx` — Main landing page layout, imports and arranges all sections

## Usage

Import and use the `LandingPage` component from `page.tsx` to render the full landing page. Each section is modular and can be used independently if needed.

## Notes

- All imports are relative within this folder.
- Ensure you have the required dependencies (e.g., React, any UI libraries, and icon libraries like `lucide-react`).
- If you use Next.js, you may need to adjust import paths for `Link` and other framework-specific components.
- The original files were moved from the project root to this folder for better organization.

## Example

```tsx
import LandingPage from "./landingPage/page";

export default function Home() {
  return <LandingPage />;
}
```

---

**Last updated:** October 17, 2025
