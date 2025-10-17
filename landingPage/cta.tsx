import Link from "next/link";

export function Cta() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5 border-y border-border">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
							Ready to Ace Your Exams?
						</h2>
						<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
							Start learning smarter, not harder. Join thousands of students already improving their grades.
						</p>
					</div>
					<div className="mx-auto w-full max-w-sm space-y-2">
						<div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
							<Link href="/register" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
								Create Your Account
							</Link>
							<Link href="/dashboard" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
								View Demo
							</Link>
						</div>
						<p className="text-xs text-muted-foreground">
							No credit card required. Start with a free account.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
