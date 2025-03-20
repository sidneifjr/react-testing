import { render, screen } from '@testing-library/react'

import App from "../../App"

describe('App-related tests', () => {
  test('renders page title', () => {
    render(<App />)

    const pageTitle = screen.getByText('Vite + React')
    expect(pageTitle).toBeInTheDocument()
  })
})