export default function RoundButton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<button
			className="p-6 rounded-full hover:bg-stone-300/50 shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff]"
			// className="p-6 rounded-full bg-gradient-[145deg] from-[#f7f5f4] to-[#d0cecd] shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff]"
		>
			{children}
		</button>
	)
}