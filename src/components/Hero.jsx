import React from 'react';
import { HERO } from "../constants";
import { motion } from 'framer-motion';
import pic from '../assets/pic.jpeg'; // Ensure this path is correct

const Hero = () => {
  return (
    <section className='flex min-h-screen items-center justify-center px-4 md:px-8'>
      <div className='flex flex-col md:flex-row items-center md:items-start w-full max-w-screen-xl'>
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
          <motion.h2
            className='my-8 p-2 text-7xl md:text-6xl lg:text-[7rem]'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50 }}
          >
            {HERO.name}
          </motion.h2>
          <motion.p
            className='mb-8 p-2 text-3xl tracking-tighter lg:text-4xl text-left w-full'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50, delay: 0.2 }}
          >
            {HERO.greet}
          </motion.p>
          <motion.p
            className='mb-8 p-2 text-xl lg:text-2xl text-left w-full'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50, delay: 0.4 }}
          >
            {HERO.description}
          </motion.p>
          <motion.button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-lg px-10 py-5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 50, delay: 0.6 }}
          >
            Download Cv
          </motion.button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0 md:ml-20'>
          <motion.img
            src={pic} // Ensure this path is correct
            alt="Ashmit Ghosh"
            className='rounded-4xl'
            height={400}
            width={300}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50, delay: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
