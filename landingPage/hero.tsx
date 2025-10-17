import Link from "next/link";

export function Hero() {
	return (
		<section className="w-full py-20 md:py-32 lg:py-40 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto text-center px-4">
				<h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
					Your Personal AI Study Companion
				</h1>
				<p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
					Generate flashcards, quizzes, and learning materials on any topic instantly. Master your subjects faster than ever before.
				</p>
						<Link href="/dashboard">
							<button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
								Get Started for Free
							</button>
						</Link>
			</div>
		</section>
	);
}
