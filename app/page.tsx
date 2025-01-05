"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import RoundButton from "@/components/round-button";
import Button from "@/components/button";
import { Category, CounterProps, PageType, UnitSystem } from "@/types/helpers";

import Calculator from "./calculator/calculator";
import Results from "./results/results";
import Details from "./details/details";

export default function Home() {
  const [page, setPage] = useState<PageType>("calculator")

  const [unit, setUnit] = useState<UnitSystem>("US/Imperial")

  function handleUnitChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUnit((event.target as HTMLInputElement).value as UnitSystem)
  }

  const [weight, setWeight] = useState(200)
  const [age, setAge] = useState(20)
  const [height, setHeight] = useState((5*12)+8)

  const bmi = (weight/(height*height))*703
  const rounded = Math.round(bmi*10)/10

  const category = (() => {
    switch (true) {
    case bmi < 18.5:
      return "Underweight";
    case bmi > 18.5 && bmi < 24.9:
      return "Healthy Weight";
    case bmi > 25 && bmi < 29.9:
      return "Overweight";
    case bmi > 30 && bmi < 40:
      return "Obesity";
    case bmi > 40:
      return "Severe Obesity";
    default:
      return <></>;
    }
  })() as Category
	
  function handleCount({ number, action, type }: CounterProps) {
    if (type === "weight") {
      if (action === "add" && number >= 0) setWeight(number+1)
      if (action === "subtract" && weight > 0) setWeight(weight-1)
    }
    if (type === "height") {
      if (action === "add" && number >= 0) setHeight(number+1)
      if (action === "subtract" && number > 0) setHeight(number-1)
    }
    if (type === "age") {
      if (action === "add" && number >= 0) setAge(number+1)
      if (action === "subtract" && number > 0) setAge(number-1)
    }
  }

  return (
    <div className="min-w-sm max-w-md min-h-screen mx-auto px-6 flex flex-col justify-between">
      <header className="my-4 flex-none">
        <div className="flex justify-between items-center gap-6">
          <RoundButton onClick={() => setPage("calculator")}>
            <ChevronLeftIcon className="size-5 text-current" />
          </RoundButton>
          <h1 className="col-span-2 text-lg font-semibold text-stone-500 dark:text-stone-600">
            {(() => {
              switch (page) {
              case "results":
                return "BMI Results";
              case "calculator":
                return "BMI Calculator";
              case "details":
                return "BMI Info";
              case "info":
                return "BMI Info";
              default:
                return <></>;
              }
            })()}
          </h1>
          <RoundButton onClick={() => setPage("info")}>
            <ChevronRightIcon className="size-5 text-current" />
          </RoundButton>
        </div>
      </header>
      <main className={`my-4 flex flex-1 flex-col ${page === "results" ? "justify-center": "justify-start"} gap-6`}>
        {/* {page === "results" ? (
          <Results bmi={rounded} />
        ) : (
          <Calculator age={age} handleCount={handleCount} height={height} weight={weight} />
        )} */}
        {(() => {
          switch (page) {
          case "results":
            return <Results bmi={rounded} category={category} />;
          case "calculator":
            return <Calculator age={age} handleCount={handleCount} handleUnitChange={handleUnitChange} height={height} unit={unit} weight={weight} />;
          case "details":
            return <Details bmi={rounded} category={category} />;
          case "info":
            return <Details />;
          default:
            return <Details />;
          }
        })()}
      </main>
      <footer className="mt-4 mb-40 flex-none">
        {(() => {
          switch (page) {
          case "results":
            return <Button onClick={() => setPage("details")}>Details</Button>;
          case "calculator":
            return <Button onClick={() => setPage("results")}>Let's Begin</Button>;
          default:
            return <></>;
          }
        })()}
      </footer>
    </div>
  )
}