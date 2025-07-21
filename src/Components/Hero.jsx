import React from 'react'
import profile from '../assets/Profile2.jpg'
const Hero = () => {
  return (
      <div className=' pb-8 my-18  mx-8 sm:mx-16 lg:mx-32'>
          <div className='flex flex-wrap  '>
              <div className='w-full lg:w-1/2 flex items-center max-lg:justify-center'>
                  <div className='flex flex-col max-lg:items-center  justify-between gap-2 '>
                      <h6 className=' text-2xl font-serif text-neutral-300 md:ps-1'>Namaste Dosto <span className='text-4xl'>&#128075;</span></h6>

                      <h1 className=' text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-slate-500 to-purple-700 bg-clip-text py-1.5
                       tracking-tight text-transparent'>Chinmay Subandh.</h1>

                      <p className='text-sm font-sans ps-1 text-rose-400 flex justify-start items-center'><span>&#10084;</span>Building fast, clean, and user-first web experiences......</p>

                      <p className='text-sm lg:text-xl ps-1'><span className='text-sm lg:text-xl font-bold text-white pr-2'>Fullstack Developer</span>from India<span className='text-2xl'>&#128640;</span></p>

                      <div className='flex items-center justify-start gap-3'>
                          <button className='px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-3xl hover:scale-105 text-white ease-in-out duration-600'>Contact Me</button>
                          <button className='px-4 py-2 bg-transparent rounded-3xl hover:scale-105 text-white border border-stone-500 ease-in-out duration-600'>Download Resume</button>
                      </div>
                      
              </div>
              </div>
              <div className=' hidden lg:flex justify-end w-1/2 lg:p-2 '>
                  <div className='flex justify-center relative '>
                      <img src={profile} alt="Profile Picture"
                      className=' overflow-hidden rounded-2xl size-80 hover:scale-110 duration-700 shrink-0  '
                      />
              </div>
              </div>
              <div></div>
          </div>
    </div>
  )
}

export default Hero