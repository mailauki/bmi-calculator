import RadioButtons from "@/components/radio-buttons";

import Weight from "./weight";
import Height from "./height";

export default function Calculator() {
  return (
    <>
      <RadioButtons />
      <div className="">
        <Height />
        <Weight />
      </div>
    </>
  )
}