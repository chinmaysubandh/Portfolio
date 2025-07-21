import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { div } from 'motion/react-client'

const About = () => {
  return (
    <div className=' py-10 mx-8 sm:mx-16 lg:mx-32 overflow-x-hidden '>
      <div className='flex flex-col flex-wrap py-20 w-full h-full '>
        <h1 className='text-4xl text-center text-slate-100 pb-8 font-semibold'>About<span className='text-slate-500'>Me</span></h1>
        <p className='text-xl pb-12'>{ABOUT_TEXT}</p>

        <div className='flex flex-col pt-8 pb-2 flex-wrap w-full h-full'>
          <h3 className='text-3xl text-slate-100 font-semibold'>Skills</h3>
          <p className='text-xl py-2'>I craft smooth, user-centric applications with the power of modern web technologies. My tech stack includes:</p>
        </div>
        <Languages />
        <FrontEndFrameWorks />
        <ReactEcosystem />
        <CssStyling />
        <OtherTools/>

      </div>
    </div>
  )
}

export default About

export const Languages = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>Languages</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>HTML</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>CSS</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>JAVASCRIPt</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>TYPESCRIPT</span>

    </div>
  </div>
}

export const FrontEndFrameWorks = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>FrontEnd Frameworks</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>ReactJS</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>NextJS</span>



    </div>
  </div>
}

export const ReactEcosystem = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Axios</span>


    </div>
  </div>
}

export const ComponentLibraries = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Axios</span>


    </div>
  </div>
}

export const CssStyling = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>Css Styling</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>TailwindCss</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Css Module</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Bootstrap</span>


    </div>
  </div>
}


export const BackEnd = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Axios</span>


    </div>
  </div>
}

export const DataBases = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Axios</span>


    </div>
  </div>
}

export const OtherTools = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>Other Tools</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>VS Code</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Git</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>GitHub</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono '>Figma</span>


    </div>
  </div>
}