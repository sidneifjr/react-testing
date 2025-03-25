import { useState, useEffect } from 'react'

import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { useErrorBoundary } from 'react-error-boundary'

export function Content() {
  const [count, setCount] = useState<number>(0)

  const { showBoundary } = useErrorBoundary()

  useEffect(() => {
    if(count >= 1) {
      showBoundary('Apologies, please reload the page')
    }
  }, [count, showBoundary])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button data-testid="count-button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}