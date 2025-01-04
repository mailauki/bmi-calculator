import Card from "@/components/card";
import { Category } from "@/types/helpers";

export default function Details({ bmi, category }: { bmi?: number, category?: Category }) {

  return (
    <>
      {bmi && (
        <Card>
          <div className="my-6 w-full flex justify-between items-center">
            <p className="font-thin">Your BMI</p>
            <p className="font-thin">
              <span className="text-5xl">{bmi}</span>
            </p>
            <p className="font-semibold text-blue-500 dark:text-blue-400">{category}</p>
          </div>
        </Card>
      )}
      <Card>
        <ul className="w-full flex flex-col justify-between divide-y divide-stone-400 dark:divide-stone-700">
          <li className="py-3 flex flex-row-reverse justify-between"><span>Underweight</span> <span className="font-thin">Less than 18.5</span></li>
          <li className="py-3 flex flex-row-reverse justify-between"><span>Healthy Weight</span> <span className="font-thin">18.5 to 24.9</span></li>
          <li className="py-3 flex flex-row-reverse justify-between"><span>Overweight</span> <span className="font-thin">25 to 29.9</span></li>
          <li className="py-3 flex flex-row-reverse justify-between"><span>Obesity</span> <span className="font-thin">30 or greater</span></li>
          <li className="py-3 flex flex-row-reverse justify-between"><span>Severe Obesity</span> <span className="font-thin">40 or greater</span></li>
        </ul>
      </Card>
    </>
  )
}