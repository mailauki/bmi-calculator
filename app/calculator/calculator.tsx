import RadioButtons from "@/components/radio-buttons";
import { CounterProps } from "@/types/helpers";

import Weight from "./weight";
import Height from "./height";
import Age from "./age";

export default function Calculator({
  height, weight, age, handleCount,
}: {
	height: number, 
	weight: number, 
	age: number,
	handleCount: ({ number, action, type }: CounterProps) => void,
}) {

  return (
    <>
      <RadioButtons />
      <div className="grid grid-cols-2 auto-rows-[minmax(0,_1fr)] gap-6">
        <div className="row-span-2">
          <Height add={() => handleCount({ number: height, action: "add", type: "height" })} height={height} minus={() => handleCount({ number: height, action: "subtract", type: "height" })} />
        </div>
        <Weight add={() => handleCount({ number: weight, action: "add", type: "weight" })} minus={() => handleCount({ number: weight, action: "subtract", type: "weight" })} weight={weight} />
        <Age add={() => handleCount({ number: age, action: "add", type: "age" })} age={age} minus={() => handleCount({ number: age, action: "subtract", type: "age" })} />
      </div>
    </>
  )
}