import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../store"

type ReduxProviderTypes = {
  children: ReactNode
}

export function ReduxProvider({ children }: ReduxProviderTypes) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}