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
import { motion } from 'motion/react'

const About = () => {
  return (
    <div id='About' className=' py-10 mx-8 sm:mx-16 lg:mx-32 overflow-x-hidden '>
      <div className='flex flex-col flex-wrap py-20 w-full h-full '>
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{duration:0.5}}
          className='text-4xl text-center text-slate-100 pb-8 font-semibold'>About<span className='text-slate-500'>Me</span></motion.h1>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{duration:1}}
          className='text-xl pb-12 text-justify'>{ABOUT_TEXT}</motion.p>

        <div className='flex flex-col pt-8 pb-2 flex-wrap w-full h-full'>
          <motion.h3
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className='text-3xl text-slate-100 font-semibold'>Skills</motion.h3>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className='text-xl py-2'>I craft smooth, user-centric applications with the power of modern web technologies. My tech stack includes:</motion.p>
        </div>
        <Languages
        />
        <FrontEndFrameWorks 
        />
        <ReactEcosystem />
        <CssStyling />
        <OtherTools/>

      </div>
    </div>
  )
}

export default About

export const Languages = React.memo(() => {
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='flex flex-col flex-wrap py-18 gap-4'>
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
  </motion.div>
})

export const FrontEndFrameWorks = React.memo(() => {
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>FrontEnd Frameworks</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><RiReactjsLine className='text-xl text-blue-500'/> ReactJS</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><RiNextjsLine className='text-xl text-black'/> NextJS</span>



    </div>
  </motion.div>
})

export const ReactEcosystem = React.memo(() => {
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>React Ecosystems</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><TbBrandFramerMotion className='text-xl text-yellow-300' /> Framer Motion</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiReactrouter className='text-xl text-red-500' />React-Router-Dom</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiRecoil className='text-xl text-blue-400' /> Recoil</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><TbBrandRedux className='text-xl text-purple-500' />Redux</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiJest className='text-xl text-orange-600'/> Jest</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiAxios className='text-xl text-blue-400'/> Axios</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center '><TbBrandFramerMotion className='text-xl text-yellow-300' /> Motion</span>



    </div>
  </motion.div>
})

export const ComponentLibraries =React.memo( () => {
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='flex flex-col flex-wrap py-8 gap-4'>
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
  </motion.div>
})

export const CssStyling = React.memo(() => {
  return <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    
    className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>CSS Styling</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><RiTailwindCssFill className='text-xl text-cyan-400'/> TailwindCss</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><SiCssmodules className='text-xl text-emerald-400'/> Css Module</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><RiBootstrapFill className='text-xl text-purple-700'/> Bootstrap</span>


    </div>
  </motion.div>
})


export const BackEnd = React.memo(() => {
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
})

export const DataBasses = () => {
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

export const OtherTools = React.memo(() => {
  return <motion.div
    
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    className='flex flex-col flex-wrap py-8 gap-4'>
    <h4 className='text-2xl text-slate-100 font-semibold'>Other Tools</h4>
    <div className='flex flex-wrap items-center justify-baseline gap-2'>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><VscCode className='text-xl text-cyan-400' /> VS Code</span>

      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><IoIosGitBranch className='text-xl text-orange-500' /> Git</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><FiGithub className='text-xl text-white' /> GitHub</span>
      <span className='py-0.5 px-4 rounded-full bg-slate-700 hover:bg-slate-800 text-sm text-slate-200 font-light font-mono flex items-center'><FiFigma className='text-xl text-blue-600' /> Figma</span>


    </div>
  </motion.div>
})