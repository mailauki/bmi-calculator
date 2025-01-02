"use client"
import { useState } from "react";

import RadioButtons from "@/components/radio-buttons";

import BMI from "../results/bmi";

import Weight from "./weight";
import Height from "./height";

export default function Calculator() {

  const [weight, setWeight] = useState(200)
  const [height, setHeight] = useState((5*12)+8)

  const bmi = (weight/(height*height))*703
  const rounded = Math.round(bmi*10)/10

  function addWeight() {
    if (weight >= 0) setWeight(weight+1)
  }
  function minusWeight() {
    if (weight > 0) setWeight(weight-1)
  }
	
  function addHeight() {
    if (height >= 0) setHeight(height+1)
  }
  function minusHeight() {
    if (height > 0) setHeight(height-1)
  }

  return (
    <>
      <RadioButtons />
      <div className="flex flex-row justify-center items-center gap-6">
        <Height add={addHeight} height={height} minus={minusHeight} />
        <Weight add={addWeight} minus={minusWeight} weight={weight} />
      </div>
      <div className="flex flex-row justify-center items-center gap-6">
        <BMI number={rounded} />
      </div>
    </>
  )
}