import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

import '@testing-library/jest-dom'

describe('Greet related tests', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)

    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })
})