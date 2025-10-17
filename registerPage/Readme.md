# Register Page

This folder contains all the components and data required for the register (sign up) page of the AI Study Companion App.

## Structure

- `form.tsx` — Registration form component
- `footer.tsx` — Footer component (shared or specific to register page)
- `hero.tsx` — Hero/banner section for register (optional)
- `page.tsx` — Main register page layout, imports and arranges all sections

## Usage

Import and use the `RegisterPage` component from `page.tsx` to render the full register page. Each section is modular and can be used independently if needed.

## Notes

- All imports are relative within this folder.
- Ensure you have the required dependencies (e.g., React, any UI libraries).
- Adjust or add components as needed for your registration flow.

## Example

```tsx
import RegisterPage from "./registerPage/page";

export default function Register() {
  return <RegisterPage />;
}
```

---

**Last updated:** October 17, 2025
