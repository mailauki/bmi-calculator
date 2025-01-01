export default function Home() {
	return (
		<div
			className="grid sm:grid-rows-[10%_auto_10%] grid-rows-[10%_10%_auto_10%_10%] min-h-screen text-center font-[family-name:var(--font-geist-sans)]"
			// className="grid sm:grid-rows-[80px_auto_80px] sm:grid-cols-[20%_auto_20%] grid-rows-[80px_80px_auto_80px_80px] grid-cols-1 h-screen"
		>
			<header className="bg-indigo-200 sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto">Header</header>
			<aside className="bg-amber-200">Left</aside>
			<main className="bg-green-200 sm:col-span-2">Main</main>
			<aside className="bg-amber-200">Right</aside>
			<footer className="bg-indigo-200 sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto">Footer</footer>
		</div>
	)
}