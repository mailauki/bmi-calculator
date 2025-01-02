import { MouseEventHandler } from "react";

import Box from "@/components/box";
import Counter from "@/components/counter-buttons";

export default function Weight({weight, add, minus}: {weight: number, add: MouseEventHandler<HTMLButtonElement>, minus: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <Box
      actions={<Counter add={add} minus={minus} />}
      label="Weight"
    >
      <p className="text-6xl font-extralight">{weight}</p>
    </Box>
  )
}