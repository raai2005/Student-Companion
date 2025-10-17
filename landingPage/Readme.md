# Landing Page

The landing page introduces users to the AI Study Companion App, highlighting its features and benefits.

## Structure

```
landingPage/
├── hero.tsx         # Main hero section
├── features.tsx     # Features overview section
├── cta.tsx          # Call-to-action section
├── footer.tsx       # Landing page footer
├── features-data.ts # Data for features section
└── landingPage.module.css (removed, now using Tailwind)
```

## Workflow

- The landing page is composed of modular sections (Hero, Features, CTA, Footer).
- Each section is a React component styled with Tailwind CSS and Shadcn UI.
- Data for the features section is managed in `features-data.ts`.

## Styling

- All sections use Tailwind CSS utility classes and Shadcn UI design patterns.
