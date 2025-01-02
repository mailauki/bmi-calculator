"use client"

import { useState } from "react"

export default function RadioButtons() {
	const [selected, setSelected] = useState("button-0")

	function Radio({label, index}: {label: string, index :number}) {
		return (
		<label
		htmlFor={`button-${index}`}
		className="px-6 py-3 rounded-2xl 
		border border-stone-300/20 dark:border-stone-700/20 
		hover:bg-stone-300/50 dark:hover:border-stone-700/50 
		shadow-[10px_10px_20px_#c4c3c2,-10px_-10px_20px_#ffffff] 
		dark:shadow-[10px_10px_20px_#231f1f,-10px_-10px_20px_#2f2b29] 
		focus:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
		dark:focus:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
		active:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
		dark:active:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
		has-[:checked]:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
		has-[:checked]:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
		has-[:checked]:ring-2 
		ring-inset ring-indigo-300"
	>
		{label}
		<input
			type="radio"
			className="hidden"
			name={`button-${index}`}
			value={`button-${index}`}
			id={`button-${index}`}
			checked={selected === `button-${index}`}
			onChange={() => setSelected(`button-${index}`)}
		/>
	</label>
		)
	}

	return (
		<div className="flex justify-center items-center gap-12">
			{["US/Imperial", "Metric"].map((label, index) => <Radio key={index} index={index} label={label} />)}
	</div>
	)
}