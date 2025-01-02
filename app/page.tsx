import Box from "@/components/box";
import RadioButtons from "@/components/radio-buttons";

export default function Home() {
	return (
		<div className="grid sm:grid-rows-[10%_auto_10%] grid-rows-[10%_10%_auto_10%_10%] min-h-screen bg-stone-200 text-center text-black font-[family-name:var(--font-geist-sans)]">
			<header className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto"></header>
			<aside></aside>
			<main className="sm:col-span-2 py-3 flex flex-col gap-4">
				<RadioButtons />
				<Box/>
			</main>
			<aside></aside>
			<footer className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto"></footer>
		</div>
	)
}