import { PROJECTS } from '../constants'
import { FaGithub } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'motion/react'

const Projects = () => {
  return (
      <div id='Project' className='py-4 mx-8 sm:mx-16 lg:mx-32 overflow-x-hidden'>
          <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1 }}
              className='my-20 text-4xl text-center text-slate-100 font-bold'>Projects</motion.h2>
          <div>
              {PROJECTS.map((items, index) => (
                   <div key={index} className='my-8 flex flex-wrap justify-between lg:justify-center'>
                      <div className=' w-full lg:w-1/4 flex flex-wrap mx-4'>
                          <motion.img
                              whileInView={{ opacity: 1, x: 0 }}
                              initial={{ opacity: 0, x: -100 }}
                              transition={{ duration: 1 }}
                              src={items.image} alt={items.title}
                              
                              className=' rounded-2xl mb-6 '
                          />
                      </div>
                      <motion.div
                          whileInView={{ opacity: 1, x: 0 }}
                          initial={{ opacity: 0, x:100 }}
                          transition={{ duration: 1 }}
                          className='w-full max-w-xl lg:w-3/4'>
                          <h2 className='my-2 font-semibold text-2xl'>{items.title}</h2>
                          <p className='my-4 font-normal '>{items.description}</p>
                          <div className=' flex flex-wrap gap-1 my-auto overflow-auto py-2 items-center justify-start '>
                              {items.technologies.map((tech, index) => {
                                  return <div className='flex'>
                                      <span className='px-4 py-2  rounded-2xl overflow-auto bg-gray-900 hover:bg-gray-800 text-sm text-center font-semibold'>
                                          {tech}
                                      </span>
                                      
                              </div>
                                  
                              })}
                          </div>
                          <div className='flex flex-wrap gap-4 py-2 px-4 my-4 '>
                              <a href={items.Github} target={'_blank'}><FaGithub className='bg-black text-3xl text-white rounded-full hover:scale-125 duration-700' /></a>
                              <a href={items.Github} target={'_blank'}><MdArrowOutward className='text-white text-3xl rounded-full hover:scale-125 duration-700 bg-slate-800' /></a>
                          </div>
                          
                      </motion.div>
                  </div>
                 
              ))}
          </div>
      </div>
  )
}

export default Projects