import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'

import App from "../App"
import '@testing-library/jest-dom'

describe('App-related tests', () => {
  test('renders page title', () => {
    render(<App />)

    const pageTitle = screen.getByText('Vite + React')
    expect(pageTitle).toBeInTheDocument()
  })
})