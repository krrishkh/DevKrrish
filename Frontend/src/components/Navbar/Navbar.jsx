import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { logo } from '../../assets/Images';

function Navbar() {
  return (
    <nav className=' flex items-center justify-between' > 
        <a href='#'>
          <div className='text-white max-w-full lg:w-1/12 mx-24 text-balance text-3xl font-thin tracking-tight hover:text-blue-500'>
          {/* <img src={logo} alt='logo' className='w-full lg:w-1/12'/> */}
          DevKrr
          </div>
        </a>
        <div className='text-white gap-4 justify-between flex items-center p-4 text-2xl m-6'>
          <a 
            href="https://www.linkedin.com/in/krrish-khandelwal-9abb271bb/" 
            target='blank'
            className='hover:text-cyan-500'>
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/krrish.khandelwal.3/" 
            target='blank'
            className='hover:text-pink-700'>
            <FaInstagram />
          </a>
          <a
            href="https://github.com/krrishkh" 
            target='blank'
            className='hover:text-white'>
            <FaGithub/>
          </a>

        </div>
    </nav>
  )
}

export default Navbar