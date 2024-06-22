import { Button } from '@headlessui/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { R3FScene } from './r3f/Scene'
import MyCheckbox from './components/MyCheckbox'

function App() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-500">
        <div className="fixed bottom-0 left-0 right-0 top-0 z-0">
          <R3FScene />
        </div>
        <div className="fixed bottom-36 left-36 right-36 top-36 z-10 border-4 border-cyan-100 bg-gray-500">
          <div className="m-10 flex-1 select-none">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} alt="Vite logo" className="m-10" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} alt="React logo" className="m-10" />
            </a>
            <h1 className="m-10 text-3xl font-bold text-white underline">
              Vite + React
            </h1>
            <Button className="m-10 rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500">
              Save changes
            </Button>
            <MyCheckbox />
          </div>
          <div className="absolute left-1/3 top-1/3 z-20 h-1/3 w-1/3 border-4 border-emerald-200">
            <R3FScene />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
