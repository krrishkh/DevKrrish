import React from 'react'
import { motion } from "motion/react"
import { pandaImage } from '../../assets/Images'
import { TbFileCv } from "react-icons/tb";


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
                I am very Passionate. what about you?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iusto impedit velit placeat asperiores itaque sapiente incidunt vitae dolore praesentium quas doloremque, provident nam fuga quo, libero, quidem ab ex.
              </motion.p>
              <motion.a 
                variants={container(3)}
                initial= "hidden"
                animate="visible" 
                className='text-white font-thin tracking-tight mt-11 hover:text-cyan-500 '
                href='https://drive.google.com/file/d/1Msq3cCHf6ayHd1LhGCy8nlvd54dgD9St/view?usp=sharing'
                target='blank'
                >
                Want to see My Resume ?
                <TbFileCv />
              </motion.a>
            </div> 
        </div>
        <div className=' w-full lg:w-1/3 '> 
           <div className='flex justify-center '>
              <motion.img 
                initial= {{ x: 100, opacity:0}}
                animate={{ x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.5}} 
                src={pandaImage} alt='cool panda'/>
           </div>
            
        </div>

      </div>
    </div>
    
  )
}

export default Home