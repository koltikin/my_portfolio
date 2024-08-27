import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../content/Content'
import { AiOutlineGlobal } from "react-icons/ai";


function Projects() {
    return (
        <div id='projects' className='w-[100%]'>
            <div className='container mt-[80px]'>
                <h1
                    data-aos="fade-down"
                    data-aos-delay={200}
                    className='text-3xl font-bold text-center mb-[60px] pt-[60px] dark:text-white'>Some of My Projects</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='shadow-md sm:hover:shadow-xl sm:hover:scale-105 duration-200 rounded-lg overflow-hidden dark:bg-primary_dark dark:drop-shadow-[1px_1px_1px_white] bg-primary_light ml-5 mr-5 sm:ml-0 sm:mr-0'>
                            <img src={project.image} alt={project.title} className='w-full h-80 object-cover rounded-lg' />
                            <div className='pt-8 p-5 pb-12'>
                                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                                <p className='mb-4'>{project.description}</p>
                                <div className='flex justify-center gap-2 items-center mt-8'>
                                    <a href={project.githubLink} className='flex items-center text-sm gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                                        <FaGithub className='text-xl' /> GitHub Repo
                                    </a>
                                    <a href={project.liveDemo} className='flex items-center text-sm gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                                        <AiOutlineGlobal className='text-xl' /> Live Demo
                                    </a>
                                    <a href={project.details} className='text-sm bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Projects