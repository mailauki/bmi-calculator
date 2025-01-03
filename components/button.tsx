import { MouseEventHandler } from "react";

export default function RoundButton({
  children,
  onClick,
}: Readonly<{
	children: React.ReactNode;
}> & {
	onClick?: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <button
      className="px-6 py-3 rounded-2xl 
			w-full h-fit 
			border border-stone-300/20 dark:border-stone-700/20 
			hover:bg-stone-300/50 dark:hover:bg-stone-700/50 
			shadow-[10px_10px_20px_#c4c3c2,-10px_-10px_20px_#ffffff] 
			dark:shadow-[10px_10px_20px_#231f1f,-10px_-10px_20px_#2f2b29] 
			focus:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
			dark:focus:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
			active:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
			dark:active:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
			cursor-pointer 
			transition-all ease-in-out duration-300"
      onClick={onClick}
    >
      <span className="font-semibold text-blue-500 dark:text-blue-400">
        {children}
      </span>
    </button>
  )
}