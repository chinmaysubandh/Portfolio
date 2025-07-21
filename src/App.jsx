import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className='min-h-screen w-screen overflow-x-hidden relative text-neutral-300 antialiased selection:bg-cyan-300 selection:text-shadow-cyan-900'>
      <div className=' fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        </div>
      </div>
      <div className=' container mx-auto px-8'>
        <NavBar />
        <Hero/>
      </div>
    </div>
  )
}

export default App