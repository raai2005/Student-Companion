# Login Page

This folder contains all the components and data required for the login page of the AI Study Companion App.

## Structure

- `form.tsx` — Login form component
- `footer.tsx` — Footer component (shared or specific to login page)
- `hero.tsx` — Hero/banner section for login (optional)
- `page.tsx` — Main login page layout, imports and arranges all sections

## Usage

Import and use the `LoginPage` component from `page.tsx` to render the full login page. Each section is modular and can be used independently if needed.

## Notes

- All imports are relative within this folder.
- Ensure you have the required dependencies (e.g., React, any UI libraries).
- Adjust or add components as needed for your authentication flow.

## Example

```tsx
import LoginPage from "./loginPage/page";

export default function Login() {
  return <LoginPage />;
}
```

---

**Last updated:** October 17, 2025
