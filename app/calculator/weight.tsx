import { MouseEventHandler } from "react";

import Counter from "@/components/counter-buttons";
import Card from "@/components/card";
import { UnitSystem } from "@/types/helpers";

export default function Weight({
  weight, add, minus, unit,
}: {
	weight: number,
	add: MouseEventHandler<HTMLButtonElement>,
	minus: MouseEventHandler<HTMLButtonElement>,
	unit: UnitSystem,
}) {
  const pounds = weight
  const kilos = weight*0.45

  return (
    <Card
      actions={<Counter add={add} minus={minus} />}
      label="Weight"
    >
      
      {unit === "US/Imperial" && (
        <p className="font-thin">
          <span className="text-5xl">{pounds}</span>
          <span className="text-xs text-stone-500 dark:text-stone-600">lbs</span>
        </p>
      )}
      {unit === "Metric" && (
        <p className="font-thin">
          <span className="text-5xl">{kilos}</span>
          <span className="text-xs text-stone-500 dark:text-stone-600">kgs</span>
        </p>
      )}
    </Card>
  )
}