import React from 'react'

function Home() {
  return (
    <>
      <div className=' pb-4 lg:mb-35 flex flex-wrap'>
        <div className='text-white flex justify-between  p-7'>
            <div className='mx-32'>
              <h1 className='font-thin tracking-tight pt-36 pb-10 text-8xl'>
              I'm Krrish 
              </h1>
              <span className='bg-gradient-to-r from-pink-400 via-slate-500 to-purple-600 tracking-tight text-2xl text-transparent bg-clip-text'>
                Full Stack Developer
              </span>
              <p className='mt-4 tracking-tight font-thin'>
                I am very Passionate. what about you?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem iusto impedit velit placeat asperiores itaque sapiente incidunt vitae dolore praesentium quas doloremque, provident nam fuga quo, libero, quidem ab ex.
              </p>
            </div>
            <div className='mx-20 max-w-96 p-7'> 
                <img src="src/assets/vecteezy_cool-panda-character-wearing-modern-streetwear-illustration_46572275.png" alt='cool panda'/>
            </div>
        </div>
      </div>
    </>
    
  )
}

export default Home