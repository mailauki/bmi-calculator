export default function BMI({ number }: { number: number }) {
  const dash = 100
  const percent = Math.round(((( number - 18.5 ) * 100) / (40 - 18.5)) * 10) / 10
  // percent accounts for the maximum percentage or bmi over 40; 
  // and the minimum percentage (46.25%) or bmi under 18.5

  function offsetDash(percent: number) {
    if (percent <= 0) return dash - (dash * 0) / 100
    else if (percent >= 100) return dash - (dash * 100) / 100
    else return dash - (dash * percent) / 100
  }

  return (
    <>
      {/* <div className="relative">
        <div className="w-40 h-40 
			border-4 border-stone-200 overflow-hidden
			bg-stone-200 rounded-full relative
			shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff,inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
			dark:shadow-[20px_20px_60px_#231f1f,-20px_-20px_60px_#2f2b29,inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29] 
			before:bg-stone-200 before:rounded-full before:absolute 
			before:content-[''] before:z-20
			before:top-4 before:left-4 before:bottom-4 before:right-4 
			before:shadow-[inset_8px_8px_20px_#c4c3c2,inset_-8px_-8px_20px_#ffffff] 
			before:dark:shadow-[inset_8px_8px_20px_#231f1f,inset_-8px_-8px_20px_#2f2b29]">
          <div className="w-40 h-40 bg-blue-500/20" />
        </div>
      </div> */}
      <div className="p-4 w-fit h-fit rounded-full shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#231f1f,-20px_-20px_60px_#2f2b29]">
        <div className="relative size-52">
          <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
	          {/* Background Circle */}
            <circle className="stroke-current text-stone-300 dark:text-neutral-700" cx="18" cy="18" fill="none" r="16" strokeWidth="2" />
		        {/* Progress Circle */}
            <circle className="stroke-current text-blue-500 dark:text-blue-400" cx="18" cy="18" fill="none" r="16" strokeDasharray={dash} strokeDashoffset={offsetDash(percent)} strokeLinecap="round" strokeWidth="2" />
          </svg>
		
		      {/* Percentage Text */}
          <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
            {/* <span className="text-center text-6xl font-extralight bg-gradient-to-br from-purple-600 to-blue-400 inline-block text-transparent bg-clip-text">{number}</span> */}
            <p className="text-center text-5xl font-thin">{number}</p>
          </div>
        </div>
      </div>
    </>
  )
}