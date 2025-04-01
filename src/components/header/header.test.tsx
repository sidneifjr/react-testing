import { screen, fireEvent, render } from '@testing-library/react'
import { Header } from '.'
import { ReduxProvider } from '../../providers/redux-provider'

describe('header', () => {
  test('change username', () => {
    render(<Header />, {
      wrapper: ReduxProvider
    })

    const headerWelcomeText = screen.getByTestId('header-welcome')
    const headerInput = screen.getByTestId('header-input')
    fireEvent.change(headerInput, { target: { value: 'Ayre' }})

    expect(headerWelcomeText).toHaveTextContent('Welcome, Ayre')
  })
})