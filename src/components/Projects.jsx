import React from 'react';
import { PROJECTS } from '../constants';
import { MdArrowOutward } from 'react-icons/md'; 
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      <h2 className='mb-8 text-center text-4xl lg:text-4xl'>Projects</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500"
              whileHover={{ scale: 1.1 }}
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-60 backdrop-blur transition-opacity duration-500 hover:opacity-100'>
              <h3 className='mb-2 text-xl'>{project.name}</h3>
              <p className='mb-12 p-4'>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className='rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300'
              >
                <div className='flex items-center'>
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
