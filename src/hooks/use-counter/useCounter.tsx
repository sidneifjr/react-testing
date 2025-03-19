import { useState } from "react"

type UseCounterTypes = {
  initialCount?: number
}

export function useCounter({ initialCount = 0 }: UseCounterTypes) {
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}