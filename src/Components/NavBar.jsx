import { motion } from 'motion/react'
import { nav } from 'motion/react-client'
import React, { useRef } from 'react'
import CSLogo from '../assets/CSLogo.png'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
const NavBar = () => {
    
   
    


    return <motion.nav className=' mb-8  px-4  flex justify-between items-center py-6 mx-8 sm:mx-16 lg:mx-32   '>
        <div className='flex shrink-0 items-center'>
            <img src={CSLogo} alt="CSLogo"
                height={55}
                width={55}
                className=' rounded-4xl border-orange-600 border-8'
            />
        </div>
        <motion.div  className=' hidden md:flex justify-between items-center gap-2'>
            <button
                
                className='px-4 py-2 bg-orange-600 rounded-3xl animate-bounce duration-1500'>Home</button>
            <button className='px-4 py-2 bg-transparent rounded-3xl ' >About</button>
            <button className='px-4 py-2 bg-transparent rounded-3xl' >Projects</button>
            <button className='px-4 py-2 bg-transparent rounded-3xl' >Contact</button>
        </motion.div>
        <div className='mb-8 flex justify-center items-center gap-6 pt-8 text-2xl'>
            <a href="https://www.linkedin.com/in/chinmay-subandh/" target={'_blank'}><BsLinkedin className='text-blue-500' /></a>
            <a href="https://x.com/ChinmaySubandh" target={'_blank'}><BsTwitterX className='text-white' /></a>
            <a href="https://www.github.com/chinmaysubandh" target={'_blank'}><BsGithub className='text-white' /></a>
            
            
            
      </div>
  </motion.nav>
}

export default NavBar