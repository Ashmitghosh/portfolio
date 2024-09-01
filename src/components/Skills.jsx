import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div className='container mx-auto' id='skills'>
      <h2 className='mb-12 mt-20 text-center text-4xl'>
        Skills
      </h2>
      <div className='mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-2 border border-stone-50/30'>
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''}`}
            whileHover={{ scale: 1.05, backgroundColor: '#333', color: '#FFD700' }}
            transition={{ duration: 0.3 }}
          >
            <div className='flex items-center'>
              {skill.icon}
              <h3 className='px-6 text-lg lg:text-2xl'>
                {skill.name}
              </h3>
            </div>
            <div className='text-md lg:text-xl'>
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
