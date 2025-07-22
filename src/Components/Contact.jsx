import React from 'react'
import { CONTACT } from '../constants'
import { div } from 'motion/react-client'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import CSLogo from '../assets/CSLogo.png'

const Contact = () => {


    /* bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] */
    return (
        <div className={`w-full h-full mt-16 flex flex-wrap flex-col `}>
            <div className='py-4  px-8 sm:px-16 lg:px-32 overflow-x-hidden '>
                <h2 className='pt-4 mb-4 text-4xl text-center text-slate-100 font-bold'>Get in Touch</h2>
                <div className='flex flex-col flex-wrap items-center justify-center'>
                    
                    <div className='py-4 w-full h-full flex flex-wrap items-center justify-evenly'>
                        
                        <div className='flex shrink-0 items-center w-[25%] max-sm:hidden'>
                                    <img src={CSLogo} alt="CSLogo"
                                        height={55}
                                        width={55}
                                        className=' rounded-4xl border-orange-600 border-8'
                                    />
                                </div>
                        <div className='flex flex-col flex-wrap items-center justify-between w-[50%]'>
                            <p>{CONTACT.address }</p>
                            <p>{ CONTACT.phoneNo}</p>
                            <p>{CONTACT.email }</p>
                        </div>
                        <div className='mb-4 flex justify-center items-center gap-6 pt-4 text-2xl w-[25%]'>
                                    <a href="https://www.linkedin.com/in/chinmay-subandh/" target={'_blank'}><BsLinkedin className='text-blue-500' /></a>
                                    <a href="https://x.com/ChinmaySubandh" target={'_blank'}><BsTwitterX className='text-white' /></a>
                                    <a href="https://www.github.com/chinmaysubandh" target={'_blank'}><BsGithub className='text-white' /></a>
                        </div>
                        
                    </div>
                    </div>
            </div> 
            <h2 className='text-sm w-full font-semibold px-2  text-slate-100 text-end'>Made with ❤️ by <span className='text-orange-500'>Chinmay Subandh</span>.</h2>

      </div>
      
  )
}

export default Contact