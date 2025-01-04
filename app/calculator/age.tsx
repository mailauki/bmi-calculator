import { MouseEventHandler } from "react";

import Counter from "@/components/counter-buttons";
import Card from "@/components/card";

export default function Age({
  age, add, minus,
}: {
	age: number,
	add: MouseEventHandler<HTMLButtonElement>,
	minus: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <Card
      actions={<Counter add={add} minus={minus} />}
      label="Age"
    >
      <p className="font-thin">
        <span className="text-5xl">{age}</span>
        <span className="text-xs text-stone-500 dark:text-stone-600">yrs</span>
      </p>
    </Card>
  )
}