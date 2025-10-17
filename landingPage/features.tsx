import { features } from "./features-data";

export function Features() {
	return (
		<section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
							Features
						</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Core Features
						</h2>
						<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Everything you need to excel in your studies with AI-powered learning tools
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature) => (
						<div key={feature.title} className="relative overflow-hidden rounded-lg border bg-card p-2">
							<div className="flex h-full flex-col justify-between rounded-md p-6">
								<div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
									<feature.icon className="w-6 h-6 text-primary" />
								</div>
								<div className="space-y-2">
									<h3 className="font-bold">{feature.title}</h3>
									<p className="text-sm text-muted-foreground">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
