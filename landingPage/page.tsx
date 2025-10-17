import { Hero } from "./hero";
import { Features } from "./features";
import { Cta } from "./cta";
import { Footer } from "./footer";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-grow">
				<Hero />
				<Features />
				<Cta />
			</main>
			<Footer />
		</div>
	);
}
