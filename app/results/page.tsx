import BMI from "./bmi";

export default function Results() {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <BMI number={18.2} />
      <p>You have <span className="font-semibold text-blue-500 dark:text-blue-400">Normal</span> body weight!</p>
    </div>
  )
}