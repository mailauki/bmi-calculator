import { MouseEventHandler } from "react";

export default function RoundButton({
  children,
	onClick,
}: Readonly<{
  children: React.ReactNode;
}> & { onClick: MouseEventHandler<HTMLButtonElement> }) {
	return (
		<button
			onClick={onClick}
			className="p-6 rounded-full border border-stone-300/20 hover:bg-stone-300/50 shadow-[10px_10px_20px_#c4c3c2,-10px_-10px_20px_#ffffff] focus:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] active:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff]"
		>
			{children}
		</button>
	)
}