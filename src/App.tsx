import { ErrorBoundary } from 'react-error-boundary'
import { Content } from './components/content'

import './App.css'

function App() {
  return (
    <ErrorBoundary fallback={<div>Sorry, but everything just went wrong!</div>}>
      <Content />
    </ErrorBoundary>
  )
}

export default App
