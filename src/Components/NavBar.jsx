import { motion } from 'motion/react'
import { nav } from 'motion/react-client'
import React, { useEffect, useRef, useState } from 'react'
import CSLogo from '../assets/CSLogo.png'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import About from './About'

export const ScrollTo = (id) => {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            
        }
    }
};
const NavBar = () => {
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        const ScrollDownHandler = () => {
            if (window.scrollY > 20) {
                setScrollDown(true);
            } else {
                setScrollDown(false)
            }
        }
        window.addEventListener('scroll', ScrollDownHandler)
        return ()=> window.removeEventListener('scroll',ScrollDownHandler)

    },[])




    return <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
/* */
        className={`mb-16  px-4 gap-4 md:gap-8  flex justify-between items-center py-2 md:my-2
              ${scrollDown ? 'mx-16 sm:mx-24 md:mx-30 lg:mx-60 xl:mx-82 ease-in-out duration-700  ' : 'mx-2 sm:mx-24 md:mx-24 lg:mx-28 ease-in-out duration-700 bg-gray-900 '}
         md:px-8 md:mb-16 fixed top-0 right-0 left-0 backdrop-blur-lg rounded-full z-50   `}>
        <div className='hidden  max-md:flex shrink-0 items-center md:rounded-full'>
            <img src={CSLogo} alt="CSLogo"
                height={55}
                width={55}
                onClick={() => ScrollTo('top')}
                className=' rounded-full border-orange-600 border-2'
            />
        </div>
        <motion.div

            className=' hidden md:flex justify-between items-center gap-4'>
            <button

                onClick={() => ScrollTo('top')}
                className='px-3 py-1 bg-orange-600 rounded-3xl hover:scale-115 duration-700 backdrop-blur-2xl ' >Home</button>
            <button className='px-3 py-1 bg-transparent rounded-3xl hover:scale-115 duration-700 backdrop-blur-2xl ' onClick={() => ScrollTo('About')} >About</button>
            <button className='px-3 py-1 bg-transparent rounded-3xl hover:scale-115 duration-700 backdrop-blur-2xl' onClick={() => ScrollTo('Project')} >Projects</button>
            <button className='px-3 py-1 bg-transparent rounded-3xl hover:scale-115 duration-700 backdrop-blur-2xl ' onClick={() => ScrollTo('Contact')} >Contact</button>
        </motion.div>
        <div className=' flex justify-center items-center gap-6 py-1 text-2xl'>

            <a href="https://www.linkedin.com/in/chinmay-subandh/" target={'_blank'}
                className='hover:scale-115 duration-700 backdrop-blur-2xl rotate-4 hover:rotate-0'
            ><BsLinkedin className='text-blue-500 ' /></a>

            <motion.a href="https://x.com/ChinmaySubandh" target={'_blank'}


                className='hover:scale-115 duration-700 backdrop-blur-2xl rotate-4 hover:rotate-0'
            ><BsTwitterX className='text-white' /></motion.a>

            <a href="https://www.github.com/chinmaysubandh" target={'_blank'}
                className='hover:scale-115 duration-700 backdrop-blur-2xl rotate-4 hover:rotate-0'
            ><BsGithub className='text-white' /></a>



        </div>
    </motion.nav>
}

export default NavBar