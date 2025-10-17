// Footer component for login page
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} AI Study Companion. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="underline-offset-4 hover:underline">Terms</a>
          <a href="#" className="underline-offset-4 hover:underline">Privacy</a>
          <a href="#" className="underline-offset-4 hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
