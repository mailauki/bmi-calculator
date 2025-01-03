import { MouseEventHandler } from "react";

import Counter from "@/components/counter-buttons";
import Card from "@/components/card";

export default function Weight({
  weight, add, minus,
}: {
	weight: number,
	add: MouseEventHandler<HTMLButtonElement>,
	minus: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Card
      actions={<Counter add={add} minus={minus} />}
      label="Weight"
    >
      <p className="my-4 font-extralight">
        <span className="text-6xl">{weight}</span>
        <span className="text-xs text-stone-500 dark:text-stone-600">lbs</span>
      </p>
    </Card>
  )
}