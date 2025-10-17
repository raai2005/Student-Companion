import { Hero } from "./hero";
import { LoginForm } from "./form";
import { Footer } from "./footer";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
