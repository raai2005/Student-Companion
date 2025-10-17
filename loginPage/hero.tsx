// Optional hero/banner for login page
export function Hero() {
  return (
    <div className="hidden flex-col p-10 text-white md:flex">
      <div className="relative z-20 mt-auto">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="text-muted-foreground">
            Log in to continue your learning journey with AI Study Companion
          </p>
        </div>
        <div className="mt-16 flex h-16 items-end justify-between lg:mt-32">
          <div className="text-sm text-muted-foreground">
            &copy; AI Study Companion {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  );
}
