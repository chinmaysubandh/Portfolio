import React from 'react'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div className='min-h-screen w-screen overflow-x-hidden relative'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className=' relative z-10'>
          <NavBar/>
        </div>
      </div>
    </div>
  )
}

export default App