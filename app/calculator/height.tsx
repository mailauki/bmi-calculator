import Box from "@/components/box";

export default function Height() {
  return (
    <>
      <Box label="Height">
        <div className="relative w-full mb-6">
          <label className="hidden" htmlFor="height-range">
						Height
          </label>
          <input readOnly className="w-full h-3 bg-stone-200 border border-stone-300/20 dark:border-stone-700/20 shadow-[inset_2px_2px_5px_#c4c3c2,inset_-2px_-2px_5px_#ffffff] rounded-lg appearance-none cursor-pointer" defaultValue={170} id="height-range" max={400} min={100} type="range" />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">100</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">200</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">300</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">400</span>
        </div>
      </Box>
    </>
  )
}