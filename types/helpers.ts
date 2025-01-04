type CounterAction = "add" | "subtract"

type CounterType = "height" | "weight" | "age"

export interface CounterProps {
	number: number,
	action: CounterAction,
	type: CounterType
}