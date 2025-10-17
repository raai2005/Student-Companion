// Optional hero/banner for register page
export function Hero() {
  return (
    <div className="hidden flex-col p-10 text-white md:flex">
      <div className="relative z-20 mt-auto">
        <blockquote className="space-y-3">
          <p className="text-lg text-foreground">
            "AI Study Companion has transformed my study sessions. I've improved my grades by 20% in just one semester!"
          </p>
          <footer className="text-sm text-muted-foreground">
            Alex Chen, Computer Science Student
          </footer>
        </blockquote>
        <div className="mt-16 flex h-16 items-end justify-between lg:mt-32">
          <div className="text-sm text-muted-foreground">
            Join thousands of students already using our platform
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M12 4v16m-8-8h16"></path>
            </svg>
            <span>100% Free Basic Plan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
