import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { div } from 'motion/react-client'
import { DiHtml5 } from 'react-icons/di'
import { FaCss3Alt, FaNodeJs } from 'react-icons/fa'
import { TbBrandFramerMotion, TbBrandRedux, TbBrandTypescript } from 'react-icons/tb'
import { RiBootstrapFill, RiNextjsLine, RiReactjsLine, RiTailwindCssFill, RiTailwindCssLine } from 'react-icons/ri'
import { MdMotionPhotosAuto } from 'react-icons/md'
import { SiAxios, SiCssmodules, SiJest, SiReactrouter, SiRecoil } from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FiFigma, FiGithub } from 'react-icons/fi'
import { IoIosGitBranch } from 'react-icons/io'

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
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm
       text-slate-200 font-light font-mono flex items-center '> <DiHtml5 className='text-xl text-orange-500' />HTML</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm
       text-slate-200 font-light font-mono flex items-center '><FaCss3Alt className='text-xl text-blue-500'/>CSS</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm
       text-slate-200 font-light font-mono flex items-center'><FaNodeJs className='text-xl text-yellow-300' />JAVASCRIPT</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm
       text-slate-200 font-light font-mono flex items-center'><TbBrandTypescript className='text-xl text-blue-400' />TYPESCRIPT</span>

    </div>
  </div>
}

export const FrontEndFrameWorks = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>FrontEnd Frameworks</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><RiReactjsLine className='text-xl text-blue-500'/> ReactJS</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><RiNextjsLine className='text-xl text-black'/> NextJS</span>



    </div>
  </div>
}

export const ReactEcosystem = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><TbBrandFramerMotion className='text-xl text-yellow-300' /> Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiReactrouter className='text-xl text-red-500' />React-Router-Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiRecoil className='text-xl text-blue-400' /> Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><TbBrandRedux className='text-xl text-purple-500' />Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiJest className='text-xl text-orange-600'/> Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiAxios className='text-xl text-blue-200'/> Axios</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><TbBrandFramerMotion className='text-xl text-yellow-300' /> Motion</span>



    </div>
  </div>
}

export const ComponentLibraries = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Axios</span>


    </div>
  </div>
}

export const CssStyling = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>CSS Styling</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><RiTailwindCssFill className='text-xl text-cyan-400'/> TailwindCss</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiCssmodules className='text-xl text-emerald-400'/> Css Module</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><RiBootstrapFill className='text-xl text-purple-700'/> Bootstrap</span>


    </div>
  </div>
}


export const BackEnd = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Axios</span>


    </div>
  </div>
}

export const DataBases = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Motion</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>React Router Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'>Axios</span>


    </div>
  </div>
}

export const OtherTools = () => {
  return <div className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>Other Tools</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><VscCode className='text-xl text-cyan-400'/> VS Code</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><IoIosGitBranch className='text-xl text-orange-500' /> Git</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><FiGithub className='text-xl text-white'/> GitHub</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><FiFigma className='text-xl text-blue-600' /> Figma</span>


    </div>
  </div>
}