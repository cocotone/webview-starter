import { useState } from 'react'
import { Button } from '@headlessui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
        <div className="flex h-96 w-96 items-center justify-center border-4 border-cyan-100">
          <div className="flex-1 m-10">
            <a href="https://vitejs.dev" target="_blank" >
              <img src={viteLogo} alt="Vite logo" className="m-10"/>
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} alt="React logo" className="m-10"/>
            </a>
            <h1 className="text-3xl font-bold text-white underline m-10">
              Vite + React
            </h1>
            <Button className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500 m-10">
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
