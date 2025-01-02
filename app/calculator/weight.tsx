"use client"
import Box from "@/components/box";
import RoundButton from "@/components/round-button";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Weight() {
	const [count, setCount] = useState(0)
	function addCount() {
		if (count >= 0) setCount(count+1)
	}
	function minusCount() {
		if (count > 0) setCount(count-1)
	}

	return (
		<Box
		label="Weight"
		actions={
			<div className="flex justify-center gap-12 w-full">
				<RoundButton onClick={addCount}>
					<PlusIcon className="size-5 text-current" />
				</RoundButton>
				<RoundButton onClick={minusCount}>
					<MinusIcon className="size-5 text-current" />
				</RoundButton>
			</div>}>
			<p className="text-7xl font-extralight">{count}</p>
		</Box>
	)
}