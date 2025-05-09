import React from 'react'
import { PROJECTS } from '../../constants/Projects/projects'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className=' border-neutral-900 pb-4 ' >
        <h1 className='my-20 text-center text-4xl text-white tracking-tight font-thin '>
            Projects
        </h1>
        <div>{PROJECTS.map((project, index )=> (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
               <div className='w-full lg:w-1/4 '>
                    <Link to={project.link} target='_blank'>
                        <img 
                            src={project.image} 
                            width={150}
                            height={150}
                            className='mb-6 rounded'
                            alt={project.title} 
                            onMouseOver={(e) => (e.currentTarget.src = project.image)}
                        />
                    </Link>
               </div>
               <div className='w-full max-w-xl lg:w-3/4 '>
                    <h6 className='mb-2 font-semibold text-gray-600'>
                        {project.title} 
                    </h6>
                    <p className='mb-4 text-neutral-400 font-thin '>
                        {project.description}
                    </p>
                    {project.technologies.map((tech, index) =>
                        <span 
                           key={index}
                           className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 '
                           >
                            {tech}
                        </span>
                    )}
               </div>
            </div>

        )) }

        </div>
    </div>
  )
}

export default Projects