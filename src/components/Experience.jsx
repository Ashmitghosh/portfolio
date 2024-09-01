import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <section className='pt-20' id='work'>
      <h2 className='mb-4 text-center text-4xl tracking-tighter'>Work Experience</h2>
      <div className='space-y-8 p-10'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className='rounded-xl border border-stone-50/30 bg-white/10 p-4'
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
              backgroundColor: '#f0f4f8', 
              color:'black',
              transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className='text-2xl'>{experience.title}</h3>
            <p className='text-xl'>{experience.company}</p>
            <p className='text-sm text-stone-300'>{experience.duration}</p>
            <p className='mt-2 text-base'>{experience.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
