import { MouseEventHandler } from "react";

import Counter from "@/components/counter-buttons";
import Card from "@/components/card";

// export default function Height({height}: {height: number}) {
//   return (
//     <>
//       <Box label="Height">
//         <div className="relative w-full mb-6">
//           <label className="hidden" htmlFor="height-range">
// 						Height
//           </label>
//           <input readOnly className="w-full h-3 bg-stone-200 border border-stone-300/20 dark:border-stone-700/20 shadow-[inset_2px_2px_5px_#c4c3c2,inset_-2px_-2px_5px_#ffffff] rounded-lg appearance-none cursor-pointer" defaultValue={height} id="height-range" max={80} min={10} type="range" />
//           <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">10</span>
//           <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">20</span>
//           <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">40</span>
//           <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">80</span>
//         </div>
//       </Box>
//     </>
//   )
// }
export default function Height({
  height, add, minus,
}: {
	height: number,
	add: MouseEventHandler<HTMLButtonElement>,
	minus: MouseEventHandler<HTMLButtonElement>
}) {
  const feet = Math.floor(height/12)
  const inches = height-(feet*12)
  // const cm = Math.round((height*2.54)*10)/10 // cm*0.394

  return (
    <Card
      actions={<Counter add={add} minus={minus} />}
      label="Height"
    >
      <p className="font-thin">
        <span className="text-5xl">{feet}</span>
        <span className="text-xs text-stone-500 dark:text-stone-600">ft</span>
        {" "}
        <span className="text-5xl">{inches}</span>
        <span className="text-xs text-stone-500 dark:text-stone-600">in</span>
      </p>
      {/* <p className="my-6 font-extralight"><span className="text-6xl">{cm}</span><span className="text-xs text-stone-500 dark:text-stone-600">cm</span></p> */}
    </Card>
  )
}