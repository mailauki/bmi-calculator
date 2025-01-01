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
			className="p-6 rounded-full hover:bg-stone-300/50 shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff]"
		>
			{children}
		</button>
	)
}