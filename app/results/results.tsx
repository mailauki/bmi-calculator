import BMI from "./bmi";

export default function Results({ bmi }: { bmi: number }) {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <BMI number={bmi} />
      <p>You have <span className="font-semibold text-blue-500 dark:text-blue-400">Normal</span> body weight!</p>
    </div>
  )
}