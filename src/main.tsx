import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { scan } from 'react-scan'

import './index.css'
import { ReduxProvider } from './providers/redux-provider.tsx'

scan({
  enabled: true
})

const root = document.getElementById('root')!

createRoot(root).render(
  <ReduxProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ReduxProvider>,
)
