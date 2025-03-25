import { render, screen } from "@testing-library/react"
import { Content } from "../../components/content"
import { ErrorBoundary } from "react-error-boundary"
import userEvent from "@testing-library/user-event"

describe('Error', () => {
  test('renders a error message', async () => {
    const errorMessage = 'Something went wrong!'

    render(
      <ErrorBoundary fallback={<p>{errorMessage}</p>}>
        <Content />
      </ErrorBoundary>
    )

    const countButton = screen.getByTestId('count-button')
    await userEvent.click(countButton)

    const errorText = await screen.findByText(errorMessage)
    expect(errorText).toBeInTheDocument()
  })
})