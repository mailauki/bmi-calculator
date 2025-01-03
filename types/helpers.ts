type CounterAction = "add" | "subtract"

type CounterType = "height" | "weight"

export interface CounterProps {
	number: number,
	action: CounterAction,
	type: CounterType
}