import React from 'react'
import { motion } from "motion/react"
import { pandaImage } from '../../assets/Images'
import { TbFileCv } from "react-icons/tb";
import { Link } from 'react-router-dom';


const container = (delay)=>({
  hidden: {x: -100, opacity: 0},
  visible: {
    x:0,
    opacity: 1,
    transition: {duration:1, delay: delay}
  }
  

})

function Home() {
  return (
    <div className=' pb-4 lg:mb-35 lg:mx-24 '>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-2/3 justify-between'>
            <div className='flex flex-col items-center lg:items-start'>
              <motion.h1 
                variants={container(0.5)}
                initial= "hidden"
                animate="visible"
                className='font-thin tracking-tight pb-16 lg:mt-16 text-7xl text-white'
              >
                I'm Krrish 
              </motion.h1>
              <motion.span
               variants={container(1.5)}
               initial= "hidden"
               animate="visible"
                className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 tracking-tight text-2xl text-transparent bg-clip-text'>
                Full Stack Developer
              </motion.span>
              <motion.p 
                variants={container(2.5)}
                initial= "hidden"
                animate="visible" 
                className='mt-4 tracking-tight font-thin text-white lg:w-4/5 '>
                I am very passionate about Full-Stack Development, specializing in React, Node.js, and MongoDB. I love building scalable web applications with seamless user experiences and efficient backends. From video hosting platforms to product management systems, I focus on performance, security, and real-time functionality. Always eager to learn and take on new challenges!</motion.p>
              <motion.a 
                variants={container(3)}
                initial= "hidden"
                animate="visible" 
                className='text-white font-thin tracking-tight mt-11 hover:text-cyan-500 '
                href='https://drive.google.com/file/d/1lXtZq695w2VAMK0oIeh1Nrg1zEXtrLEU/view?usp=sharing'
                target='blank'
                >
                Want to see My Resume ?
                <TbFileCv />
              </motion.a>
            </div> 
        </div>
        <div className=' w-full lg:w-1/3 '> 
           <div className='flex justify-center '>
            <Link to="#">
              <motion.img 
                initial= {{ x: 100, opacity:0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.5}} 
                src={pandaImage} alt='cool panda'
                className="cursor-pointer hover:scale-110 transition-transform duration-300"
               />
              </Link>
           </div>
            
        </div>

      </div>
    </div>
    
  )
}

export default Home