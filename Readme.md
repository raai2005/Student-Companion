# AI Study Companion App

A modern, modular, and extensible study companion web application built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. This app is designed to help students organize, learn, and track their study progress with features like flashcards, quizzes, roadmaps, analytics, and more.

## Project Structure

```
AiStudyCompanionApp/
├── dashboard/           # Main dashboard and all feature modules
│   ├── components/      # Shared dashboard UI components (Sidebar, Topbar, etc.)
│   ├── features/        # Feature modules (QuickQuiz, Flashcards, Roadmap, etc.)
│   ├── utils/           # Utility functions for dashboard features
│   ├── layout.tsx       # Dashboard layout wrapper
│   └── page.tsx         # Dashboard entry point
├── landingPage/         # Landing page sections (Hero, Features, CTA, Footer)
├── loginPage/           # Login page components and layout
├── registerPage/        # Register page components and layout
├── pages/               # Next.js routing pages (_app.tsx, index.tsx, etc.)
├── styles.css           # Tailwind CSS and Shadcn UI theme variables
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies and scripts
└── Readme.md            # Project documentation (this file)
```

## Key Features

- **Dashboard**: Central hub for all study tools and analytics
- **Flashcards**: Create, review, and manage study flashcards
- **Quick Quiz**: Take quick quizzes to test your knowledge
- **Roadmap**: Visualize your study plan and progress
- **Analytics**: Track your learning performance with charts and stats
- **Favorites**: Save and organize important study items
- **Mock Interview**: Practice with AI-powered interview simulations
- **Profile**: Manage user settings, theme, and API keys
- **Help**: Access guides and FAQs

## Styling & UI

- **Tailwind CSS**: Utility-first CSS for rapid UI development
- **Shadcn UI**: Modern, accessible component design system
- **Dark Mode**: Fully supported via Tailwind's class strategy

## Workflow

1. **Landing Page**: Users are greeted with a modern landing page highlighting features.
2. **Authentication**: Users can register or log in via dedicated pages.
3. **Dashboard**: After login, users access the dashboard with sidebar navigation to all features.
4. **Feature Modules**: Each feature (Flashcards, Quiz, etc.) is modular and can be extended independently.
5. **Styling**: All components use Tailwind CSS classes and Shadcn UI patterns for consistency.

## Development

- Start the dev server: `npm run dev`
- Build for production: `npm run build`
- Lint code: `npm run lint`

## Extending the App

- Add new features as modules in `dashboard/features/`
- Create shared UI in `dashboard/components/`
- Use utility functions from `dashboard/utils/`
- Update theme and styles in `styles.css` and `tailwind.config.js`

## License

MIT
