import { Hero } from "./hero";
import { LoginForm } from "./form";
import { Footer } from "./footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container grid flex-1 items-center justify-center">
        <div className="mx-auto grid w-full max-w-[900px] gap-6 py-10 md:grid-cols-2 md:gap-16">
          <Hero />
          <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[400px] space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                <p className="text-sm text-muted-foreground">
                  Enter your credentials to access your account
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
