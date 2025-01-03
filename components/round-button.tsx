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
      className="p-3 w-fit h-fit rounded-full 
			border border-stone-300/20 dark:border-stone-700/20 
			hover:bg-stone-300/50 dark:hover:bg-stone-700/50 
			shadow-[6px_6px_12px_#c4c3c2,-6px_-6px_12px_#ffffff] 
			dark:shadow-[6px_6px_12px_#231f1f,-6px_-6px_12px_#2f2b29] 
			focus:shadow-[inset_4px_4px_12px_#c4c3c2,inset_-4px_-4px_12px_#ffffff] 
			dark:focus:shadow-[inset_4px_4px_12px_#231f1f,inset_-4px_-4px_12px_#2f2b29] 
			active:shadow-[inset_4px_4px_12px_#c4c3c2,inset_-4px_-4px_12px_#ffffff] 
			dark:active:shadow-[inset_4px_4px_12px_#231f1f,inset_-4px_-4px_12px_#2f2b29] 
			cursor-pointer 
			transition-all ease-in-out duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  )
}