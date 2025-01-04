import { Category } from "@/types/helpers";

import BMI from "./bmi";

export default function Results({ bmi, category }: { bmi: number, category: Category }) {

  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <BMI number={bmi} />
      <p>You have a <span className="font-semibold text-blue-500 dark:text-blue-400">{category}</span> body weight!</p>
    </div>
  )
}