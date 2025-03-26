import { render, screen } from "@testing-library/react"
import { CounterTwo } from "."

import user from '@testing-library/user-event'

describe("counter-two", () => {
  test("handlers are called", async () => {
    // remember: all user APIs are async!
    user.setup()

    // mock functions allow you to test your code without having to worry about the actual implementation of a function.
    const incrementHandler = vi.fn()
    const decrementHandler = vi.fn()

    render(<CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />)

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })

    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})