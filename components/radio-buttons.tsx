import { UnitSystem } from "@/types/helpers"

export default function RadioButtons({ 
  unit, handleUnitChange 
}: { 
	unit: UnitSystem, 
	handleUnitChange: (event: React.ChangeEvent<HTMLInputElement>) => void 
}) {
  function Radio({ label, index }: { label: string, index :number }) {
    return (
      <label
        className="px-6 py-3 rounded-2xl 
				w-full h-fit text-center 
				border border-stone-300/20 dark:border-stone-700/20 
				hover:bg-stone-300/50 dark:hover:bg-stone-700/50 
				shadow-[6px_6px_12px_#c4c3c2,-6px_-6px_12px_#ffffff] 
				dark:shadow-[6px_6px_12px_#231f1f,-6px_-6px_12px_#2f2b29] 
				focus:shadow-[inset_4px_4px_12px_#c4c3c2,inset_-4px_4px_12px_#ffffff] 
				dark:focus:shadow-[inset_8px_8px_20px_#231f1f,inset_-4px_-4px_12px_#2f2b29] 
				active:shadow-[inset_4px_4px_12px_#c4c3c2,inset_-4px_-4px_12px_#ffffff] 
				dark:active:shadow-[inset_4px_4px_12px_#231f1f,inset_-4px_-4px_12px_#2f2b29] 
				has-[:checked]:shadow-[inset_4px_4px_12px_#c4c3c2,inset_-4px_-4px_12px_#ffffff] 
				dark:has-[:checked]:shadow-[inset_4px_4px_12px_#231f1f,inset_-4px_-4px_12px_#2f2b29] 
				has-[:checked]:text-blue-500 dark:has-[:checked]:text-blue-400 
				cursor-pointer 
				transition-all ease-in-out duration-300"
        htmlFor={`button-${index}`}
      >
        {label}
        <input
          checked={unit === label} 
          className="hidden"
          id={`button-${index}`}
          name={`button-${index}`}
          type="radio"
          value={label}
          onChange={handleUnitChange}
        />
      </label>
    )
  }

  return (
    <div className="flex justify-between items-center gap-6">
      {["US/Imperial", "Metric"].map((label, index) => <Radio key={index}  index={index} label={label} />)}
    </div>
  )
}