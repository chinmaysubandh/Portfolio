import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/raviKumarLogo.webp'

const NavBar = () => {
  return (
      <nav className='flex items-center justify-between py-6'>
          <div className='flex items-center shrink-0'>
              <a to={'/'} aria-label='Home'/>
              <img src={logo} alt="" />
          </div>
    </nav>
  )
}

export default NavBar