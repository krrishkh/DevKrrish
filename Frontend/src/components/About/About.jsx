import React from 'react'

function About() {
  return (
    <div>
        <div className='border-b border-neutral-900 pb-4 '>
            <h1 className='text-center text-5xl tracking-tight font-thin my-20 text-white'>
                About 
                <span className='text-neutral-600 '>
                    Me
                </span>
            </h1>
            <div className='flex flex-wrap'>
                <div className='  w-full lg:w-1/2 lg:p-8 '> 
                  <div className='flex items-center justify-center '>
                    <img className='rounded-3xl' src='https://media.licdn.com/dms/image/v2/D5603AQFvzDYOZO2WSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728115628630?e=1744243200&v=beta&t=gu1NINlao3M-VLW6skoMPKsCwZJNQYELZACb77SE12s'/>
                  </div>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex justify-center lg:justify-start text-white '>
                        <p className='font-thin text-2xl tracking-tight my-2 max-w-xl '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et amet repellendus veniam eligendi quis minima nobis iure nihil omnis cumque, dolorem velit maxime incidunt inventore asperiores fugit optio aliquam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About