import { Hero } from "./hero";
import { RegisterForm } from "./form";
import { Footer } from "./footer";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
