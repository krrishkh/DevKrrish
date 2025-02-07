import React from 'react'
import { motion } from 'motion/react'
import { krrishImage } from '../../assets/Images'

function About() {
  return (
    <div>
        <div className=' border-neutral-900 pb-4 '>
            <h1 className='text-center text-5xl tracking-tight font-thin my-20 text-white'>
                About 
                <span className='text-neutral-600 '>
                    Me
                </span>
            </h1>
            <div className='flex flex-wrap'>
                <div className='  w-full lg:w-1/2 lg:p-8 '> 
                  <div className='flex items-center justify-center '>
                    <motion.img
                      whileInView={{ x: 0, opacity: 1}}
                      initial= {{ x: -100, opacity:0}}
                      transition={{duration: 1, delay: 0.5}} 
                      className='rounded-3xl' src={krrishImage} alt="img"/>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-center lg:justify-start text-white '>
                        <motion.p 
                          whileInView={{ x: 0, opacity: 1}}
                          initial= {{ x: 100, opacity:0}}
                          transition={{duration: 1, delay: 0.5}} 
                          className='font-thin text-2xl tracking-tight my-2 max-w-xl '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et amet repellendus veniam eligendi quis minima nobis iure nihil omnis cumque, dolorem velit maxime incidunt inventore asperiores fugit optio aliquam.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About