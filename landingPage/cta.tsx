import Link from "next/link";

export function Cta() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto text-center px-4">
				<h2 className="text-3xl font-bold tracking-tighter mb-4">
					Ready to Ace Your Exams?
				</h2>
				<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Start learning smarter, not harder. Join now!</p>
						<Link href="/dashboard">
							<button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
								Create Your First Study Set
							</button>
						</Link>
			</div>
		</section>
	);
}
