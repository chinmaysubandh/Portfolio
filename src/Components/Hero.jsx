import React from 'react'
import profile from '../assets/Profile2.jpg'
import { motion } from 'motion/react'
import { ScrollTo } from './NavBar'

import { saveAs } from 'file-saver'

 export const Container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }

    }
})
const Hero = () => {

    const ResumeHandler = () => {
        try {
            const resumeUrl = '/Resume.pdf';
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'ChinmaySubandh.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            saveAs('/resume.pdf', 'john_doe_resume.pdf');
        }
    }

    
    return (
        <div  className=' pb-8 my-32  mx-8 sm:mx-16 lg:mx-32'>
            <div className='flex flex-wrap  '>
                <div className='w-full lg:w-1/2 flex items-center max-lg:justify-center'>
                    <div className='flex flex-col max-lg:items-center  justify-between gap-2 max-md:text-center '>
                        <motion.h6
                            
                            variants={Container(0)}
                            initial="hidden"
                            animate="visible"



                            className=' text-2xl font-serif text-neutral-300 md:ps-1 '>Namaste Dosto <span className='text-4xl'>&#128075;</span></motion.h6>

                        <motion.h1
                            variants={Container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className=' text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-slate-500 to-purple-700 bg-clip-text py-1.5
                       tracking-tight text-transparent '>Chinmay Subandh.</motion.h1>

                        <motion.p
                            variants={Container(0.6)}
                            initial="hidden"
                            animate="visible"
                            className='text-sm font-sans ps-1 max-sm:text-center text-rose-400 flex justify-start  items-center'>&#10084;Building fast, clean, and user-first web experiences......</motion.p>

                        <motion.p
                            variants={Container(0.7)}
                            initial="hidden"
                            animate="visible"
                            className='text-sm lg:text-xl ps-1'><span className='text-sm lg:text-xl font-bold text-white pr-2'>Fullstack Developer</span>from India<span className='text-2xl'>&#128640;</span></motion.p>

                        <motion.div
                            variants={Container(0.7)}
                            initial="hidden"
                            animate="visible"
                            className='flex items-center justify-start gap-3 py-4'>
                            <motion.button
                                onClick={()=>ScrollTo('Contact')}
                                className='px-4 py-2 bg-orange-600 hover:bg-orange-700 shrink-0 rounded-3xl hover:scale-105 text-white ease-in-out duration-600'>Contact Me</motion.button>
                            <motion.button
                                onClick={ResumeHandler}
                                className='px-4 py-2 bg-transparent rounded-3xl hover:scale-105 shrink-0 text-white border border-stone-500 ease-in-out duration-600'>Download Resume</motion.button>
                        </motion.div>

                    </div>
                </div>
                <div className=' hidden lg:flex justify-end w-1/2 lg:p-2 '>
                    <div className='flex justify-center '>
                        <motion.img
                            
                            initial={{x:100,opacity:0}}
                            animate={{x:0,opacity:1}}
                            transition={{duration:1,delay:1.2}}
                            src={profile} alt="Profile Picture"
                            className=' overflow-hidden rounded-2xl size-80 hover:scale-110 duration-700   '
                        />
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Hero