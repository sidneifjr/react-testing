import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { scan } from 'react-scan'
import { ReduxProvider } from './providers/redux-provider.tsx'

import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { SecondCounter } from './pages/second-counter.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { BaseLayout } from './pages/layout/base-layout.tsx'

scan({
  enabled: true
})

const root = document.getElementById('root')!

createRoot(root).render(
  <StrictMode>
    <ErrorBoundary fallback={<div>Sorry, but everything just went wrong!</div>}>
      <ReduxProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<BaseLayout />}>
              <Route path='/' element={<App />} />

              <Route path='/counter-two' element={<SecondCounter />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReduxProvider>
    </ErrorBoundary>
  </StrictMode>
)
