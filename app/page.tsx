import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import RoundButton from "@/components/round-button";
import Button from "@/components/button";

import Calculator from "./calculator/page";

export default function Home() {
  return (
    <div className="min-w-sm max-w-md min-h-screen mx-auto flex flex-col justify-between">
      <header className="my-6 flex-none">
        <div className="flex justify-between items-center gap-6">
          <RoundButton>
            <ChevronLeftIcon className="size-5 text-current" />
          </RoundButton>
          <h1 className="col-span-2 text-lg font-normal">BMI Calculator</h1>
          <RoundButton>
            <ChevronRightIcon className="size-5 text-current" />
          </RoundButton>
        </div>
      </header>
      <main className="my-6 flex flex-1 flex-col justify-start gap-6">
        <Calculator />
      </main>
      <footer className="mt-6 mb-20 flex-none"><Button>Let's Begin</Button></footer>
    </div>
  )
}