import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
        <div className="flex h-96 w-96 items-center justify-center border-4 border-cyan-100">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </a>
          <h1 className="text-3xl font-bold text-white underline">
            Vite + React
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
