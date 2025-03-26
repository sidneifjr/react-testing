import { CounterTwoTypes } from "./counter-two.types"

export const CounterTwo = ({ count, handleDecrement, handleIncrement }: CounterTwoTypes) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>

      {handleIncrement && (
        <button onClick={handleIncrement}>Increment</button>
      )}

      {handleDecrement && (
        <button onClick={handleDecrement}>Decrement</button>
      )}
    </div>
  )
}