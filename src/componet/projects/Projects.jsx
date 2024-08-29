import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../content/Content'
import { AiOutlineGlobal } from "react-icons/ai";
import Butttons from './Butttons';


function Projects() {
    return (
        <div id='projects' className='w-[100%]'>
            <div className='container mt-[80px]'>
                <h1
                    data-aos="fade-down"
                    data-aos-delay={200}
                    className='sm:text-3xl text-2xl px-5 sm:px-0 sm:text-start font-paprika mb-[20px] sm:mb-[40px] pt-[60px] dark:text-white'>SOME OF MY PROJECTS</h1>
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
                                    <Butttons link={project.links.githubLink} icon={FaGithub} text='GitHub Repo' />
                                    <Butttons link={project.links.liveDemo} icon={FaGithub} text='Live Demo' />
                                    <Butttons link={project.links.details} text='About Pro' />
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