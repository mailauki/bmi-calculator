import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { MouseEventHandler } from "react";

import RoundButton from "@/components/round-button";

export default function Counter({add, minus}: {add: MouseEventHandler<HTMLButtonElement>, minus: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <div className="flex justify-center gap-12 w-full">
      <RoundButton onClick={add}>
        <PlusIcon className="size-5 text-current" />
      </RoundButton>
      <RoundButton onClick={minus}>
        <MinusIcon className="size-5 text-current" />
      </RoundButton>
    </div>
  )
}