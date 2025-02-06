import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className='flex items-center justify-between' > 
        <div className='text-white'>
          <img src='src/assets/Dev.png' alt='sexy boiii' className='w-28 m-9'/>
        </div>
        <div className='text-white gap-4 justify-between flex items-center p-4 text-2xl m-6'>
          <FaLinkedin />
          <FaInstagram />
          <FaGithub/>

        </div>
    </nav>
  )
}

export default Navbar