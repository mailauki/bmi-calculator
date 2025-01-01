import Box from "@/components/box";

export default function Home() {
	return (
		<div className="grid sm:grid-rows-[10%_auto_10%] grid-rows-[10%_10%_auto_10%_10%] min-h-screen bg-stone-200 text-center font-[family-name:var(--font-geist-sans)]">
			<header className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto">Header</header>
			<aside>Left</aside>
			<main className="sm:col-span-2">
				Main
				<Box/>
			</main>
			<aside>Right</aside>
			<footer className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto">Footer</footer>
		</div>
	)
}