import Link from "next/link";

export function Hero() {
	return (
		<section className="w-full py-20 md:py-32 lg:py-40 bg-background">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-foreground">
								Your Personal AI Study Companion
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
								Generate flashcards, quizzes, and learning materials on any topic instantly. Master your subjects faster than ever before.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
							<Link href="/login" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
								Get Started
							</Link>
							<Link href="/dashboard" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
								View Demo
							</Link>
						</div>
					</div>
					<div className="mx-auto lg:mx-0 rounded-xl overflow-hidden border border-border bg-card p-2">
						<div className="aspect-video overflow-hidden rounded-lg bg-muted/30">
							{/* Replace with an image if you have one */}
							<div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
								<div className="px-8 py-12 text-center">
									<h3 className="text-lg font-medium text-foreground mb-2">Enhanced Learning Experience</h3>
									<p className="text-sm text-muted-foreground">AI-powered study tools that adapt to your learning style</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
