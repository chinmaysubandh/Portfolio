import React from 'react'
import { PROJECTS } from '../constants'
import { div, span } from 'motion/react-client'
import project1 from '../assets/projects/project-1.jpg'
import { SiRefinedgithub } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { MdArrowOutward } from 'react-icons/md'
const Projects = () => {
  return (
      <div className='py-4 mx-8 sm:mx-16 lg:mx-32 overflow-x-hidden'>
          <h2 className='my-20 text-4xl text-center text-slate-100 font-bold'>Projects</h2>
          <div>
              {PROJECTS.map((items, index) => (
                   <div key={index} className='my-8 flex flex-wrap justify-between lg:justify-center'>
                      <div className=' w-full lg:w-1/4 flex flex-wrap '>
                          <img src={items.image} alt={items.title}
                              height={150}
                              width={250}
                              className=' rounded-2xl mb-6 '
                          />
                      </div>
                      <div className='w-full max-w-xl lg:w-3/4'>
                          <h2 className='my-2 font-semibold text-2xl'>{items.title}</h2>
                          <p className='my-4 font-normal '>{items.description}</p>
                          <div className=' flex gap-4 py-2 '>
                              {items.technologies.map((tech, index) => {
                                  return <div className='flex flex-col gap-4'>
                                      <span className='px-4 py-2 gap-4 rounded-2xl overflow-auto bg-gray-900 hover:bg-gray-800 text-sm text-center font-semibold'>
                                          {tech}
                                      </span>
                                      
                              </div>
                                  
                              })}
                          </div>
                          <div className='flex flex-wrap gap-4 py-2 px-4 my-4 '>
                              <FaGithub className='bg-black text-3xl text-white rounded-full hover:scale-105 duration-700' />
                              <MdArrowOutward className='text-white text-3xl rounded-full hover:scale-105 duration-700 bg-slate-800' />
                          </div>
                          
                      </div>
                  </div>
                 
              ))}
          </div>
      </div>
  )
}

export default Projects