import { features } from "./features-data";

export function Features() {
	return (
		<section id="features" className="w-full py-12 md:py-24 lg:py-32">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold tracking-tighter text-center mb-12">
					Core Features
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature) => (
						<div key={feature.title} className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
							<div className="mb-4 p-3 bg-blue-100 dark:bg-gray-800 rounded-full">
								<feature.icon className="w-8 h-8 text-blue-500" />
							</div>
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
