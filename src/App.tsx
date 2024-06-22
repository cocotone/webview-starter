import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen bg-gray-500 flex justify-center items-center">
        <div className="h-96 w-96 border-4 border-cyan-100 flex justify-center items-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </a>
          <h1 className="text-3xl font-bold underline text-white">
            Vite + React
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
