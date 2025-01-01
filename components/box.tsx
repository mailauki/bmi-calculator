import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import RoundButton from "./round-button";


export default function Box() {
	return (
		<div className="m-6 p-6 flex flex-col justify-between items-center gap-6 rounded-2xl shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff]">
			<p className="text-2xl">Box</p>
			<p className="text-7xl font-extralight">42</p>
			<div className="mb-3 flex justify-center gap-12 w-full">
				<RoundButton>
					<PlusIcon className="size-6 text-current" />
				</RoundButton>
				<RoundButton>
					<MinusIcon className="size-6 text-current" />
				</RoundButton>
			</div>
		</div>
	)
}