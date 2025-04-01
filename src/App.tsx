import { ErrorBoundary } from 'react-error-boundary'
import { Content } from './components/content'
import { Header } from './components/header'

import './App.css'

function App() {
  return (
    <ErrorBoundary fallback={<div>Sorry, but everything just went wrong!</div>}>
      <Header />

      <Content />
    </ErrorBoundary>
  )
}

export default App
