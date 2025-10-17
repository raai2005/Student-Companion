# Dashboard Module

The dashboard is the main hub of the AI Study Companion App. It provides navigation and access to all study features, analytics, and user settings in a modular, extensible way.

## Complete Folder Structure

```
dashboard/
├── components/
│   ├── DashboardWrapper.tsx
│   ├── Sidebar.tsx
│   ├── StatsCard.tsx
│   └── Topbar.tsx
├── features/
│   ├── Analytics/
│   │   ├── AnalyticsDashboard.tsx
│   │   ├── index.ts
│   │   ├── ProgressGraph.tsx
│   │   └── TopicChart.tsx
│   ├── Favorites/
│   │   ├── FavoriteCard.tsx
│   │   ├── FavoritesList.tsx
│   │   ├── index.ts
│   │   └── RemoveButton.tsx
│   ├── Flashcards/
│   │   ├── Flashcard.tsx
│   │   ├── flashcardApi.ts
│   │   ├── FlashcardDeck.tsx
│   │   ├── FlipButton.tsx
│   │   ├── index.ts
│   │   └── SaveButton.tsx
│   ├── Help/
│   │   ├── FaqList.tsx
│   │   ├── HelpGuide.tsx
│   │   └── index.ts
│   ├── MockInterview/
│   │   ├── FeedbackPanel.tsx
│   │   ├── index.ts
│   │   ├── InterviewChat.tsx
│   │   ├── MockInterview.tsx
│   │   ├── mockInterviewApi.ts
│   │   └── QuestionBubble.tsx
│   ├── Profile/
│   │   ├── ApiKeyInput.tsx
│   │   ├── index.ts
│   │   ├── ProfileSettings.tsx
│   │   └── ThemeToggle.tsx
│   ├── QuickQuiz/
│   │   ├── index.ts
│   │   ├── QuestionCard.tsx
│   │   ├── QuickQuiz.tsx
│   │   ├── quickQuizApi.ts
│   │   ├── ResultSummary.tsx
│   │   ├── SubmitButton.tsx
│   │   └── types.ts
│   └── Roadmap/
│       ├── index.ts
│       ├── roadmapApi.ts
│       ├── RoadmapView.tsx
│       ├── StartButton.tsx
│       └── TopicCard.tsx
├── utils/
│   ├── constants.ts
│   ├── fetchLLMData.ts
│   ├── formatData.ts
│   └── localStorageUtils.ts
├── layout.tsx
├── page.tsx
└── Readme.md
```

## Key Components

- **Sidebar**: Persistent navigation for all dashboard features.
- **Topbar**: Search, notifications, and user profile access.
- **DashboardWrapper**: Main content area, displays stats and feature modules.
- **StatsCard**: Reusable card for displaying key metrics.

## Feature Modules

Each feature is a folder in `features/` and is fully modular:

- **Analytics**: Progress graphs, topic charts, and performance metrics.
- **Favorites**: Save and manage important study items.
- **Flashcards**: Create, review, and flip through study flashcards.
- **Help**: FAQ and user guides.
- **MockInterview**: AI-powered interview practice and feedback.
- **Profile**: User settings, theme toggle, and API key management.
- **QuickQuiz**: Take quick quizzes, view results, and submit answers.
- **Roadmap**: Visualize and manage your study plan.

Each feature folder typically contains:

- Main component (e.g., `QuickQuiz.tsx`)
- Supporting components (e.g., `QuestionCard.tsx`, `ResultSummary.tsx`)
- API utilities (e.g., `flashcardApi.ts`, `mockInterviewApi.ts`)
- `index.ts` for exports

## Workflow

1. **Layout**: The dashboard uses a layout wrapper (`layout.tsx`) that places the sidebar, topbar, and main content grid.
2. **Navigation**: Sidebar links allow users to switch between features. Topbar provides search and profile access.
3. **Feature Display**: The main area (`DashboardWrapper`) shows stats and renders the selected feature module.
4. **State & Data**: Each feature manages its own state and data fetching, using utilities from `utils/` as needed.
5. **Styling**: All components use Tailwind CSS and Shadcn UI for a modern, consistent look.

## Adding or Extending Features

- Create a new folder in `features/` for your feature.
- Add your main component and any supporting files.
- Export the main component via `index.ts`.
- Import and use your feature in `DashboardWrapper` or wherever needed.
- Use shared UI from `components/` for consistency.
- Add utility functions to `utils/` if needed for API calls, formatting, or storage.

## Utilities

- **constants.ts**: Shared constants for dashboard features.
- **fetchLLMData.ts**: Utility for fetching data from language model APIs.
- **formatData.ts**: Helpers for formatting data for display.
- **localStorageUtils.ts**: Utilities for saving and loading data from local storage.

## Styling

- All dashboard components use Tailwind CSS utility classes and Shadcn UI patterns.
- Theme colors and dark mode are supported via Tailwind’s class strategy.
- No CSS modules—styling is fully utility-based for maintainability.

## Example: Adding a New Feature

1. Create `dashboard/features/MyFeature/` and add `MyFeature.tsx`.
2. Export it in `dashboard/features/MyFeature/index.ts`.
3. Import and render `<MyFeature />` in `DashboardWrapper.tsx`.
4. Add a navigation link in `Sidebar.tsx` if needed.

---

**This modular approach makes it easy to add, remove, or update features without affecting the rest of the dashboard.**
