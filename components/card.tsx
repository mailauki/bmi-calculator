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
      className="p-4 px-6 h-full w-full 
			flex flex-col justify-between items-center 
			gap-4 rounded-2xl 
			shadow-[6px_6px_12px_#c4c3c2,-6px_-6px_12px_#ffffff] 
			dark:shadow-[6px_6px_12px_#231f1f,-6px_-6px_12px_#2f2b29]"
    >
      {label && (
        <p className="text-lg text-stone-500 dark:text-stone-600">{label}</p>
      )}
      {children}
      {actions}
    </div>
  )
}