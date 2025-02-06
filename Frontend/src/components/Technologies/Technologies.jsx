import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiNodejs } from "react-icons/di";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

function Technologies() {
  return (
    <div className='border-b border-neutral-800 '>
        <h2 className='my-20 text-center text-4xl text-white font-thin'>
            Technologies
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <DiNodejs  className="text-7xl text-cyan-500" />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <RiNodejsLine className="text-7xl text-green-500" />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <SiMongodb className="text-7xl text-green-500" />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <SiExpress className="text-7xl text-gray-700 " />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <TbBrandJavascript className="text-7xl text-yellow-300 " />
            </div>
            <div className='round-2xl border-4 border-neutral-800 p-4 '>
                <RiReactjsLine className="text-7xl text-cyan-500" />
            </div>
        </div>
    </div>
  )
}

export default Technologies