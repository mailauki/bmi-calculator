import RadioButtons from "@/components/radio-buttons";
import { CounterProps, UnitSystem } from "@/types/helpers";

import Weight from "./weight";
import Height from "./height";
import Age from "./age";

export default function Calculator({
  height, weight, age, unit, handleCount, handleUnitChange,
}: {
	height: number, 
	weight: number, 
	age: number,
	unit: UnitSystem,
	handleCount: ({ number, action, type }: CounterProps) => void,
	handleUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}) {

  return (
    <>
      <RadioButtons handleUnitChange={handleUnitChange} unit={unit} />
      <div className="grid grid-cols-2 auto-rows-[minmax(0,_1fr)] gap-6">
        <div className="row-span-2">
          <Height add={() => handleCount({ number: height, action: "add", type: "height" })} height={height} minus={() => handleCount({ number: height, action: "subtract", type: "height" })} unit={unit} />
        </div>
        <Weight add={() => handleCount({ number: weight, action: "add", type: "weight" })} minus={() => handleCount({ number: weight, action: "subtract", type: "weight" })} unit={unit} weight={weight} />
        <Age add={() => handleCount({ number: age, action: "add", type: "age" })} age={age} minus={() => handleCount({ number: age, action: "subtract", type: "age" })} />
      </div>
    </>
  )
}