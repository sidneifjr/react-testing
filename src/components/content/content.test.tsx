import { render, screen } from '@testing-library/react'

import { Content } from '.'
import { ErrorBoundary } from 'react-error-boundary'

describe('App', () => {
  test('renders content title', () => {
    render(
      <ErrorBoundary fallback={''}>
        <Content />
      </ErrorBoundary>
    )

    const pageTitle = screen.getByText('Vite + React')
    expect(pageTitle).toBeInTheDocument()
  })
})