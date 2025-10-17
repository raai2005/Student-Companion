// Optional hero/banner for register page
export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          Create Your Free Account
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
          Sign up to start generating flashcards, quizzes, and more with AI Study Companion.
        </p>
      </div>
    </section>
  );
}
