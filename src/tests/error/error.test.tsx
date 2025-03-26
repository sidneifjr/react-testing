import { render, screen } from "@testing-library/react"
import { Content } from "../../components/content"
import userEvent from "@testing-library/user-event"
import { ErrorProvider } from "../../providers/error-provider"

describe('Error', () => {
  test('renders a error message', async () => {

    render(<Content />, {
      wrapper: ErrorProvider
    })

    const countButton = screen.getByTestId('count-button')
    await userEvent.click(countButton)

    const errorText = await screen.findByText('fallback text')
    expect(errorText).toBeInTheDocument()
  })
})