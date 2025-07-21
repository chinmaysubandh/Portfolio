import { motion } from 'motion/react'
import { nav } from 'motion/react-client'
import React from 'react'
import CSLogo from '../assets/CSLogo.png'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
const NavBar = () => {
    return <motion.nav className='text-white mb-8 flex justify-between items-center py-6 mx-18'>
        <div className='flex shrink-0 items-center'>
            <img src={CSLogo} alt=""
                height={55}
                width={55}
                className=' rounded-4xl border-orange-600 border-8'
            />
        </div>
        <div className=' hidden sm:flex justify-between items-center gap-4'>
            <button className='px-6 py-2 bg-orange-600 rounded-3xl animate-bounce duration-1000'>Home</button>
            <button className='px-6 py-2 bg-transparent rounded-3xl' >About</button>
            <button className='px-6 py-2 bg-transparent rounded-3xl' >Projects</button>
            <button className='px-6 py-2 bg-transparent rounded-3xl' >Contact</button>
        </div>
        <div className='mb-8 flex justify-center items-center gap-4 pt-8 text-2xl'>
            <BsLinkedin />
            <BsTwitterX />
            <BsGithub/>
      </div>
  </motion.nav>
}

export default NavBar