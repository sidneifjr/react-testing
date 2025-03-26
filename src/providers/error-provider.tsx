import { ReactNode } from "react"
import { ErrorBoundary } from "react-error-boundary"

type ErrorProviderTypes = {
  children: ReactNode
}

export const ErrorProvider = ({ children }: ErrorProviderTypes) => {
  return (
    <ErrorBoundary fallback={<p>fallback text</p>}>
      {children}
    </ErrorBoundary>
  )
}