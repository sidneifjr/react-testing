import { render, screen } from '@testing-library/react'

import { Content } from '.'
import { ErrorProvider } from '../../providers/error-provider'

describe('App', () => {
  test('renders content title', () => {
    render(<Content />, {
        wrapper: ErrorProvider
      }
    )

    const pageTitle = screen.getByText('Vite + React')
    expect(pageTitle).toBeInTheDocument()
  })
})