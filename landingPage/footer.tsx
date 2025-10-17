export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full py-6 bg-white dark:bg-gray-950 border-t">
			<div className="container mx-auto text-center">
				<p className="text-sm text-gray-500 dark:text-gray-400">
					&copy; {currentYear} AI Study Companion. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
