export default function BMI({ number }: { number: number }) {
  const percent = (number*100)/40
  const offset = `${ percent >= 100 ? 0 : number <= 18.5 ? 100 : 100-percent+46.25 }`
  // offset accounts for the maximum percentage or bmi over 40; 
  // and the minimum percentage (46.25%) or bmi under 18.5
	
  return (
    <div className="p-4 w-fit h-fit rounded-full shadow-[20px_20px_60px_#c4c3c2,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#231f1f,-20px_-20px_60px_#2f2b29]">
      <div className="relative size-52">
        <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          {/* Background Circle */}
          <circle className="stroke-current text-stone-300 dark:text-neutral-700" cx="18" cy="18" fill="none" r="16" strokeWidth="2" />
          {/* Progress Circle */}
          <circle className="stroke-current text-blue-500 dark:text-blue-400" cx="18" cy="18" fill="none" r="16" strokeDasharray="100" strokeDashoffset={offset} strokeLinecap="round" strokeWidth="2" />
        </svg>

        {/* Percentage Text */}
        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-6xl font-extralight">{number}</span>
        </div>
      </div>
    </div>
  )
}