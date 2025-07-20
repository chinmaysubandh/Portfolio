import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/raviKumarLogo.webp'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs'


const NavBar = () => {
  return (
      <nav className='flex items-center justify-between py-6 lg:mx-28'>
          <div className='flex items-center shrink-0'>
              <a to={'/'} aria-label='Home'/>
              <img src={logo} alt="" width={50} height={33}  className='mx-2' />
          </div>
          <div className='flex items-center justify-center m-8 gap-4 text-2xl'>
              <a href={'https://www.linkedin.com/in/chinmay-subandh/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='LinkedIn'
              ><BsLinkedin/></a>

              <a href={'https://x.com/ChinmaySubandh'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='Twitter'
              ><BsTwitterX /></a>

              {/* <a href={'https://www.linkedin.com/in/chinmay-subandh/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='Instagram'
              ><BsInstagram /></a> */}

              <a href={'https://github.com/chinmaysubandh'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label='GitHub'
              ><BsGithub /></a>
          </div>
    </nav>
  )
}

export default NavBar