import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiNodejs } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { motion } from 'motion/react';
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const iconVariant = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

function Technologies() {
  return (
    <div className=' border-neutral-800 '>
        <h2 className='my-20 text-center text-4xl text-white font-thin'>
            Technologies
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <FaPython  className="text-7xl text-blue-500" />
            </motion.div>
            <motion.div 
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiNodejsLine className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
                variants={iconVariant(4.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div
                variants={iconVariant(5.5)}
                initial="initial"
                animate="animate" 
                className='rounded-xl border-4 border-neutral-800 p-4 '>
                <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
                variants={iconVariant(4.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <SiExpress className="text-7xl text-gray-700 " />
            </motion.div>
            <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <TbBrandJavascript className="text-7xl text-yellow-300 " />
            </motion.div>
            <motion.div
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate" 
                className='rounded-2xl border-4 border-neutral-800 p-4 '>
                <DiMysql className="text-7xl text-cyan-500" />
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies