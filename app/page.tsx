"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import RoundButton from "@/components/round-button";
import Button from "@/components/button";
import { CounterProps } from "@/types/helpers";

import Calculator from "./calculator/page";
import Results from "./results/page";

export default function Home() {
  const [isCalculated, setIsCalculated] = useState(false)

  const [weight, setWeight] = useState(200)
  const [height, setHeight] = useState((5*12)+8)

  const bmi = (weight/(height*height))*703
  const rounded = Math.round(bmi*10)/10
	
  function handleCount({ number, action, type }: CounterProps) {
    if (type === "weight") {
      if (action === "add" && number >= 0) setWeight(number+1)
      if (action === "subtract" && weight > 0) setWeight(weight-1)
    }
    if (type === "height") {
      if (action === "add" && number >= 0) setHeight(number+1)
      if (action === "subtract" && number > 0) setHeight(number-1)
    }
  }

  return (
    <div className="min-w-sm max-w-md min-h-screen mx-auto px-6 flex flex-col justify-between">
      <header className="my-4 flex-none">
        <div className="flex justify-between items-center gap-6">
          <RoundButton onClick={() => setIsCalculated(false)}>
            <ChevronLeftIcon className="size-5 text-current" />
          </RoundButton>
          <h1 className="col-span-2 text-lg font-semibold text-stone-500 dark:text-stone-600">BMI Calculator</h1>
          <RoundButton onClick={() => setIsCalculated(true)}>
            <ChevronRightIcon className="size-5 text-current" />
          </RoundButton>
        </div>
      </header>
      <main className={`my-4 flex flex-1 flex-col ${isCalculated ? "justify-center": "justify-start"} gap-6`}>
        {isCalculated ? (
          <Results bmi={rounded} />
        ) : (
          <Calculator handleCount={handleCount} height={height} weight={weight} />
        )}
      </main>
      <footer className="mt-4 mb-40 flex-none"><Button onClick={() => setIsCalculated(true)}>Let's Begin</Button></footer>
    </div>
  )
}