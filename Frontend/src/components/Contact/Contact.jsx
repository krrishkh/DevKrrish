import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='border-b border-neutral-900 pb-2 '>
       <h1 className='my-10 text-center text-4xl text-white tracking-tight font-thin'>
          Get in Touch
       </h1>
       <p className='text-center text-white tracking-tight font-thin '> 
          <a href='https://maps.app.goo.gl/DrVcUzQXZb2bwwNd8'>
          Hall-3, IIT Kanpur
          </a>
       </p>
       <p className='text-center text-white tracking-tight font-thin '>
          <a href='tel:9982098021'>
          +91 9982098021
          </a>
       </p>
       <p className='text-center text-white tracking-tight font-thin '>
          <a href='mailto:khandelwalkrrish2003@gmail.com'>
          Email : khandelwalkrrish2003@gmail.com
          </a>
       </p>
       
    </div>
  )
}

export default Contact