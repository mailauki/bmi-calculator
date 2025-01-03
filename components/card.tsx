export default function Card({
  children,
  label,
  actions
}: Readonly<{
	children?: React.ReactNode;
}> & {
	label?: string, actions?: React.ReactNode
}) {
  return (
    <div
      className="p-6 h-full w-full 
			flex flex-col justify-between items-center 
			gap-6 rounded-2xl 
			shadow-[10px_10px_20px_#c4c3c2,-10px_-10px_20px_#ffffff] 
			dark:shadow-[10px_10px_20px_#231f1f,-10px_-10px_20px_#2f2b29]"
    >
      <p className="text-xl text-stone-500 dark:text-stone-600">{label}</p>
      {children}
      {actions}
    </div>
  )
}