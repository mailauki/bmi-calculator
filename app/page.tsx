import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import RoundButton from "@/components/round-button";

import Calculator from "./calculator/page";
// import Results from "./results/page";

export default function Home() {
  return (
    <div className="grid sm:grid-rows-[10%_auto_10%] grid-rows-[10%_10%_auto_10%_10%] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto">
        <div className="flex justify-center items-center h-full gap-12">
          <RoundButton>
            <ChevronLeftIcon className="size-5 text-current" />
          </RoundButton>
          <h1 className="text-lg font-normal">BMI Calculator</h1>
          <RoundButton>
            <ChevronRightIcon className="size-5 text-current" />
          </RoundButton>
        </div>
      </header>
      <aside />
      <main className="sm:col-span-2 py-12 flex flex-col gap-6">
        <Calculator />
        {/* <Results /> */}
      </main>
      <aside />
      <footer className="sm:col-start-1 sm:col-end-5 col-start-auto col-end-auto" />
    </div>
  )
}