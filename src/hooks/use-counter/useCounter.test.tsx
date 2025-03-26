import { act, renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0
      }
    })

    expect(result.current.count).toBe(0)
  })

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10
      }
    })

    expect(result.current.count).toBe(10)
    expect(result.current.count).not.toBe(1)
  })

  test('should increment the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0
      }
    })

    // 'act' is a helper meant for use whenever a function causes state updates.
    act(() => result.current.increment())

    expect(result.current.count).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 0
      }
    })

    act(() => result.current.decrement())

    expect(result.current.count).toBe(-1)
  })
})