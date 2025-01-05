export type CounterAction = "add" | "subtract"

export type CounterType = "height" | "weight" | "age"

export type UnitSystem = "US/Imperial" | "Metric"

export type PageType = "calculator" | "results" | "details" | "info"

export type Category = "Underweight" | "Healthy Weight" | "Overweight" | "Obesity" | "Severe Obesity"

export interface CounterProps {
	number: number,
	action: CounterAction,
	type: CounterType
}