export default function Box({
  children,
  label,
  actions
}: Readonly<{
	children?: React.ReactNode;
}> & { label?: string, actions?: React.ReactNode }) {
  return (
    <div className="m-6 p-6 flex flex-col justify-between items-center gap-6 rounded-2xl shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#231f1f,-20px_-20px_60px_#2f2b29]">
      <p className="text-stone-500 dark:text-stone-600 text-2xl">{label}</p>
      {children}
      {actions}
    </div>
  )
}