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
                          className='font-thin text-xl tracking-tight my-2 max-w-xl mt-32 '>
                            I am very passionate about technology and problem-solving. As a pre-final year B.Tech student at IIT Kanpur, I enjoy building scalable applications and exploring new innovations. With experience in developing web platforms and optimizing systems, I focus on creating impactful solutions. Always eager to learn and take on new challenges </motion.p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About