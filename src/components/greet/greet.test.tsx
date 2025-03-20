/**
 * 1) Greet should render the text 'hello';
 * 2) If a name is passed into the component, it should render 'hello', followed by the name;
*/
import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet-related testing', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)
  
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })
  
  test('Greet renders with a name', () => {
    render(<Greet name="Sidnei" />)
  
    const textElement = screen.getByText('Hello Sidnei')
    expect(textElement).toBeInTheDocument()
  })
})